/// <reference types="@types/google.maps" />
import { useQuery } from '@apollo/client';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading, ListPageLayout } from '@peage-pay-web/ui';
import { useEffect } from 'react';
import {
  FULL_TOLL_LIST,
  GRAPH_TOLL_DISTANCE_LIST_FOR_TOLL_NETWORK,
  TOLL_NETWORK_BY_ID,
} from '../../graphql/queries';
import { useParams } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import TollMapMarker from '../../components/toll/toll-map-marker.component';
import { GraphTollDistanceType, TollType } from '../../__generated__/graphql';
import GraphTollDistanceMapMarker from '../../components/graph-toll-distance/graph-toll-distance-map-marker.component';

const TollNetworkGraphPage = (): JSX.Element => {
  const { tollNetworkId } = useParams();
  const {
    data: tollNetworkData,
    loading: tollNetworkLoading,
    error: tollNetworkError,
  } = useQuery(TOLL_NETWORK_BY_ID, {
    variables: {
      tollNetworkByIdInput: {
        tollNetworkId: tollNetworkId as string,
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
        tollNetworkId: tollNetworkId as string,
      },
    },
    fetchPolicy: 'network-only',
    skip: tollNetworkLoading || tollNetworkError !== undefined,
  });
  const {
    data: graphTollDistanceListData,
    loading: graphTollDistanceListLoading,
    error: graphTollDistanceListError,
  } = useQuery(GRAPH_TOLL_DISTANCE_LIST_FOR_TOLL_NETWORK, {
    variables: {
      graphTollDistanceListForTollInput: {
        tollNetworkId: tollNetworkId as string,
      },
    },
    fetchPolicy: 'network-only',
  });

  const getMapMount = (): HTMLElement => {
    return document.getElementById('toll-network-graph-map') as HTMLElement;
  };

  useEffect(() => {
    if (tollListData && tollNetworkData && graphTollDistanceListData) {
      const map = new google.maps.Map(getMapMount(), {
        center: { lat: 28.76, lng: 2.89 },
        zoom: 5,
        mapId: '4504f8b37365c3d0',
      });

      for (const toll of tollListData.fullTollList) {
        const tollMarker = document.createElement('div');
        const root = ReactDOM.createRoot(tollMarker);
        root.render(<TollMapMarker toll={toll as TollType}></TollMapMarker>);

        new google.maps.marker.AdvancedMarkerElement({
          map: map,
          position: {
            lat: toll.latitude,
            lng: toll.longitude,
          },
          content: tollMarker,
        });
      }

      for (const graphTollDistance of graphTollDistanceListData.graphTollDistanceListForTollNetwork) {
        new google.maps.Polyline({
          map,
          path: [
            {
              lat: graphTollDistance.fromToll.latitude,
              lng: graphTollDistance.fromToll.longitude,
            },
            {
              lat: graphTollDistance.toToll.latitude,
              lng: graphTollDistance.toToll.longitude,
            },
          ],
          strokeColor: '#FFFFFF',
          strokeOpacity: 1.0,
          strokeWeight: 4,
        });

        const distanceMarker = document.createElement('div');
        const root = ReactDOM.createRoot(distanceMarker);
        root.render(
          <GraphTollDistanceMapMarker
            graphTollDistance={graphTollDistance as GraphTollDistanceType}
          ></GraphTollDistanceMapMarker>,
        );

        const latitude =
          (graphTollDistance.fromToll.latitude +
            graphTollDistance.toToll.latitude) /
          2;
        const longitude =
          (graphTollDistance.fromToll.longitude +
            graphTollDistance.toToll.longitude) /
          2;
        new google.maps.marker.AdvancedMarkerElement({
          map: map,
          position: {
            lat: latitude,
            lng: longitude,
          },
          content: distanceMarker,
        });
      }
    }
  }, [tollListData, tollNetworkData, graphTollDistanceListData]);

  return (
    <ListPageLayout.Loading
      loading={
        tollNetworkLoading || tollListLoading || graphTollDistanceListLoading
      }
    >
      <ListPageLayout.Error
        error={tollNetworkError || tollListError || graphTollDistanceListError}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col md:flex-row md:justify-between items-start">
            <Heading className="text-[20pt]">
              <Heading.Icon position={'left'}>
                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Toll network map</Heading.Text>
            </Heading>
            <Heading className="text-[15pt]">
              <Heading.Text className="opacity-70">
                toll network: {tollNetworkData?.tollNetworkById.name}
              </Heading.Text>
            </Heading>
          </div>
          <div
            className="flex h-full rounded-lg"
            id="toll-network-graph-map"
          ></div>
        </div>
      </ListPageLayout.Error>
    </ListPageLayout.Loading>
  );
};

export default TollNetworkGraphPage;
