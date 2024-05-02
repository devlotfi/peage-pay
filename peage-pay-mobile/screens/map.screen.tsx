import { StyleSheet, View, ViewStyle } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { BottomTabsNavigatorParamList } from '../navigators/router';
import MapView, { MapMarker, Polyline } from 'react-native-maps';
import { useQuery } from '@apollo/client';
import { GLOBAL_TOLL_LIST, GLOBAL_SECTION_LIST } from '../graphql/queries';
import FullScreenLoading from '../layout/full-screen-loading.component';
import { useState } from 'react';
import { SectionType, TollType } from '../__generated__/graphql';
import FullScreenError from '../layout/full-screen-error.component';
import TollMapMarker from '../components/toll/toll-map-marker.component';
import SectionMapMarker from '../components/section/section-map-marker.component';
import TollDetails from '../components/toll/toll-details.component';
import SectionDetails from '../components/section/section-details.component';
import UIButton from '../elements/ui-button/ui-button.component';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = DrawerScreenProps<BottomTabsNavigatorParamList, 'Map'>;

const MapScreen = (): JSX.Element => {
  const styles = makeStyles();

  const {
    data: tollListData,
    loading: tollListLoading,
    error: tollListError,
  } = useQuery(GLOBAL_TOLL_LIST, {
    fetchPolicy: 'network-only',
  });
  const {
    data: sectionListData,
    loading: sectionListLoading,
    error: sectionListError,
  } = useQuery(GLOBAL_SECTION_LIST, {
    fetchPolicy: 'network-only',
  });

  const [selectedToll, setSelectedToll] = useState<TollType | null>(null);
  const [selectedSection, setSelectedSection] = useState<SectionType | null>(
    null,
  );

  const renderTolls = () => {
    return tollListData?.globalTollList.map((toll) => (
      <MapMarker
        onPress={() => {
          setSelectedSection(null);
          setSelectedToll(toll as TollType);
        }}
        key={toll.id}
        coordinate={{ latitude: toll.latitude, longitude: toll.longitude }}
      >
        <TollMapMarker toll={toll as TollType}></TollMapMarker>
      </MapMarker>
    ));
  };

  const renderSections = () => {
    return sectionListData?.globalSectionList.map((section) => (
      <MapMarker
        onPress={() => {
          setSelectedToll(null);
          setSelectedSection(section as SectionType);
        }}
        key={`section:${section.fromToll.id}:${section.toToll.id}`}
        coordinate={{
          latitude: (section.fromToll.latitude + section.toToll.latitude) / 2,
          longitude:
            (section.fromToll.longitude + section.toToll.longitude) / 2,
        }}
      >
        <SectionMapMarker section={section as SectionType}></SectionMapMarker>
      </MapMarker>
    ));
  };

  const renderSectionLines = () => {
    return sectionListData?.globalSectionList.map((section) => (
      <Polyline
        key={`line:${section.fromToll.id}:${section.toToll.id}`}
        strokeColor="#FFFFFF"
        strokeWidth={3}
        coordinates={[
          {
            latitude: section.fromToll.latitude,
            longitude: section.fromToll.longitude,
          },
          {
            latitude: section.toToll.latitude,
            longitude: section.toToll.longitude,
          },
        ]}
      ></Polyline>
    ));
  };

  return (
    <FullScreenLoading loading={tollListLoading || sectionListLoading}>
      <FullScreenError error={tollListError || sectionListError}>
        <View style={styles.page}>
          <View style={styles.priceButtonContainer}>
            <UIButton variant="primary" style={styles.priceButton}>
              <UIButton.Icon
                style={{ marginRight: 0 } as ViewStyle}
                icon={faMoneyBill1Wave}
              ></UIButton.Icon>
            </UIButton>
          </View>
          <View style={styles.infoContainer}>
            {selectedToll ? (
              <TollDetails
                onClose={() => setSelectedToll(null)}
                toll={selectedToll}
              ></TollDetails>
            ) : null}
            {selectedSection ? (
              <SectionDetails
                onClose={() => setSelectedSection(null)}
                section={selectedSection as SectionType}
              ></SectionDetails>
            ) : null}
          </View>
          <MapView style={styles.map} provider="google" mapType="hybrid">
            {renderTolls()}
            {renderSections()}
            {renderSectionLines()}
          </MapView>
        </View>
      </FullScreenError>
    </FullScreenLoading>
  );
};

const makeStyles = () =>
  StyleSheet.create({
    page: {
      flex: 1,
    },
    priceButtonContainer: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      zIndex: 10,
    },
    priceButton: {
      margin: 15,
      minHeight: 59,
      width: 59,
      borderRadius: 1000,
    },
    infoContainer: {
      width: '100%',
      alignItems: 'center',
      padding: 10,
      position: 'absolute',
      zIndex: 10,
    },
    map: {
      flex: 1,
    },
  });

export default MapScreen;
