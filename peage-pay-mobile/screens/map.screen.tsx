import { StyleSheet, View, ViewStyle } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { BottomTabsNavigatorParamList } from '../navigators/router';
import MapView, { Polyline } from 'react-native-maps';
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
import TripSelectionDetails from '../components/trip/trip-selection-details.component';
import TripPriceDetails from '../components/trip/trip-price-details.component';

export type TollDetailsMode = 'NORMAL' | 'SELECTION' | 'PRICE';

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

  const [selectedFromToll, setSelectedFromToll] = useState<TollType | null>(
    null,
  );
  const [selectedToToll, setSelectedToToll] = useState<TollType | null>(null);
  const [mode, setMode] = useState<TollDetailsMode>('NORMAL');

  const renderTolls = () => {
    return tollListData?.globalTollList.map((toll) => (
      <TollMapMarker
        key={toll.id}
        toll={toll as TollType}
        mode={mode}
        onPressed={handleTollPressed}
        coordinates={{ latitude: toll.latitude, longitude: toll.longitude }}
        selected={
          (selectedFromToll && selectedFromToll.id === toll.id) ||
          (selectedToToll && selectedToToll.id === toll.id)
            ? true
            : false
        }
      ></TollMapMarker>
    ));
  };

  const renderSections = () => {
    return sectionListData?.globalSectionList.map((section) => (
      <SectionMapMarker
        key={`section:${section.fromToll.id}:${section.toToll.id}`}
        section={section as SectionType}
        onPressed={handleSectionPressed}
        coordinates={{
          latitude: (section.fromToll.latitude + section.toToll.latitude) / 2,
          longitude:
            (section.fromToll.longitude + section.toToll.longitude) / 2,
        }}
      ></SectionMapMarker>
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

  const handleTollPressed = (toll: TollType) => {
    if (mode === 'NORMAL') {
      setSelectedSection(null);
      setSelectedToll(toll);
    } else if (mode === 'SELECTION') {
      if (!selectedFromToll) {
        if (selectedToToll) {
          if (
            toll.id !== selectedToToll.id &&
            toll.tollNetworkId === selectedToToll.tollNetworkId
          ) {
            setSelectedFromToll(toll);
          }
        } else {
          setSelectedFromToll(toll);
        }
      } else if (!selectedToToll) {
        if (selectedFromToll) {
          if (
            toll.id !== selectedFromToll.id &&
            toll.tollNetworkId === selectedFromToll.tollNetworkId
          ) {
            setSelectedToToll(toll);
          }
        } else {
          setSelectedToToll(toll);
        }
      }
    }
  };

  const handleSectionPressed = (section: SectionType) => {
    if (mode === 'NORMAL') {
      setSelectedToll(null);
      setSelectedSection(section);
    }
  };

  return (
    <FullScreenLoading loading={tollListLoading || sectionListLoading}>
      <FullScreenError error={tollListError || sectionListError}>
        <View style={styles.page}>
          {mode === 'NORMAL' ? (
            <View style={styles.priceButtonContainer}>
              <UIButton
                onPress={() => {
                  setSelectedToll(null);
                  setSelectedSection(null);
                  setMode('SELECTION');
                }}
                variant="primary"
                style={styles.priceButton}
              >
                <UIButton.Icon
                  style={{ marginRight: 0 } as ViewStyle}
                  icon={faMoneyBill1Wave}
                ></UIButton.Icon>
                <UIButton.Content style={{ flex: 1 }}>Trajet</UIButton.Content>
              </UIButton>
            </View>
          ) : null}
          <View style={styles.infoContainer}>
            {mode === 'PRICE' && selectedFromToll && selectedToToll ? (
              <TripPriceDetails
                onBack={() => {
                  setMode('SELECTION');
                }}
                fromToll={selectedFromToll}
                toToll={selectedToToll}
              ></TripPriceDetails>
            ) : null}
            {mode === 'SELECTION' ? (
              <TripSelectionDetails
                onClose={() => {
                  setSelectedFromToll(null);
                  setSelectedToToll(null);
                  setMode('NORMAL');
                }}
                onSwitch={() => {
                  const fromToll = selectedToToll;
                  const toToll = selectedFromToll;
                  setSelectedFromToll(fromToll);
                  setSelectedToToll(toToll);
                }}
                onResetFromToll={() => {
                  setSelectedFromToll(null);
                }}
                onResetToToll={() => {
                  setSelectedToToll(null);
                }}
                onCalculatePrice={() => {
                  if (selectedFromToll && selectedToToll) {
                    setMode('PRICE');
                  }
                }}
                fromToll={selectedFromToll}
                toToll={selectedToToll}
              ></TripSelectionDetails>
            ) : null}
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
          <MapView
            style={styles.map}
            showsTraffic
            provider="google"
            mapType="hybrid"
          >
            {renderTolls()}
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
      width: 150,
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
