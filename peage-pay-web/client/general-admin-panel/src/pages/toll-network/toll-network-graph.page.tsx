/// <reference types="@types/google.maps" />
import { useQuery } from '@apollo/client';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayout, Heading } from '@peage-pay-web/ui';
import { useEffect } from 'react';
import {
  FULL_TOLL_LIST,
  SECTION_LIST_FOR_TOLL_NETWORK,
  TOLL_NETWORK_BY_ID,
} from '../../graphql/queries';
import { useParams } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import TollMapMarker from '../../components/toll/toll-map-marker.component';
import { SectionType, TollType } from '../../__generated__/graphql';
import SectionMapMarker from '../../components/section/section-map-marker.component';
import { useTranslation } from 'react-i18next';

const TollNetworkGraphPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { tollNetworkId } = useParams();
  const {
    data: tollNetworkData,
    loading: tollNetworkLoading,
    error: tollNetworkError,
  } = useQuery(TOLL_NETWORK_BY_ID, {
    variables: {
      tollNetworkByIdInput: {
        id: tollNetworkId as string,
      },
    },
    fetchPolicy: 'network-only',
  });
  const {
    data: tollListData,
    loading: tollListLoading,
    error: tollListError,
  } = useQuery(FULL_TOLL_LIST, {
    variables: {
      fullTollListInput: {
        id: tollNetworkId as string,
      },
    },
    fetchPolicy: 'network-only',
    skip: tollNetworkLoading || tollNetworkError !== undefined,
  });
  const {
    data: sectionListData,
    loading: sectionListLoading,
    error: sectionListError,
  } = useQuery(SECTION_LIST_FOR_TOLL_NETWORK, {
    variables: {
      sectionListForTollNetworkInput: {
        id: tollNetworkId as string,
      },
    },
    fetchPolicy: 'network-only',
  });

  const getMapMount = (): HTMLElement => {
    return document.getElementById('toll-network-graph-map') as HTMLElement;
  };

  const initMap = async () => {
    if (tollListData && tollNetworkData && sectionListData) {
      const { Map } = (await google.maps.importLibrary(
        'maps',
      )) as google.maps.MapsLibrary;
      const { TrafficLayer } = (await google.maps.importLibrary(
        'maps',
      )) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        'marker',
      )) as google.maps.MarkerLibrary;

      const map = new Map(getMapMount(), {
        center: { lat: 28.76, lng: 2.89 },
        zoom: 5,
        mapId: 'DEMO_MAP_ID',
        mapTypeId: 'hybrid',
      });
      const trafficLayer = new TrafficLayer();
      trafficLayer.setMap(map);

      for (const toll of tollListData.fullTollList) {
        const tollMarker = document.createElement('div');
        const root = ReactDOM.createRoot(tollMarker);
        root.render(<TollMapMarker toll={toll as TollType}></TollMapMarker>);

        new AdvancedMarkerElement({
          map: map,
          position: {
            lat: toll.latitude,
            lng: toll.longitude,
          },
          content: tollMarker,
        });
      }

      for (const section of sectionListData.sectionListForTollNetwork) {
        const polylineColor = '#FFFFFF';

        new google.maps.Polyline({
          map,
          path: [
            {
              lat: section.fromToll.latitude,
              lng: section.fromToll.longitude,
            },
            {
              lat: section.toToll.latitude,
              lng: section.toToll.longitude,
            },
          ],
          strokeColor: polylineColor,
          strokeOpacity: 1.0,
          strokeWeight: 5,
        });

        const distanceMarker = document.createElement('div');
        const root = ReactDOM.createRoot(distanceMarker);
        root.render(
          <SectionMapMarker
            section={section as SectionType}
          ></SectionMapMarker>,
        );

        const latitude =
          (section.fromToll.latitude + section.toToll.latitude) / 2;
        const longitude =
          (section.fromToll.longitude + section.toToll.longitude) / 2;
        new AdvancedMarkerElement({
          map: map,
          position: {
            lat: latitude,
            lng: longitude,
          },
          content: distanceMarker,
        });
      }
    }
  };

  useEffect(() => {
    initMap();
  }, [tollListData, tollNetworkData, sectionListData]);

  return (
    <AdminDashboardLayout.Loading
      loading={tollNetworkLoading || tollListLoading || sectionListLoading}
    >
      <AdminDashboardLayout.Error
        error={tollNetworkError || tollListError || sectionListError}
      >
        <div className="flex flex-col flex-1">
          <Heading className="text-[20pt] my-[0.5rem] ml-[1rem]">
            <Heading.Icon position={'left'}>
              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            </Heading.Icon>
            <Heading.Text>{t('GRAPH')}</Heading.Text>
          </Heading>
          <div
            className="flex h-full rounded-lg"
            id="toll-network-graph-map"
          ></div>
        </div>
      </AdminDashboardLayout.Error>
    </AdminDashboardLayout.Loading>
  );
};

export default TollNetworkGraphPage;
