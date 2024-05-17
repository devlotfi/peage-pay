import { StyleSheet, View, ViewStyle } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { BottomTabsNavigatorParamList } from '../navigators/router';
import MapView from 'react-native-maps';
import { useQuery } from '@apollo/client';
import { GLOBAL_TOLL_LIST } from '../graphql/queries';
import FullScreenLoading from '../layout/full-screen-loading.component';
import { useState } from 'react';
import { TollType } from '../__generated__/graphql';
import FullScreenError from '../layout/full-screen-error.component';
import TollMapMarker from '../components/toll/toll-map-marker.component';
import TollDetails from '../components/toll/toll-details.component';
import UIButton from '../elements/ui-button/ui-button.component';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import TripSelectionDetails from '../components/trip/trip-selection-details.component';
import TripPriceDetails from '../components/trip/trip-price-details.component';
import { useTranslation } from 'react-i18next';

export type TollDetailsMode = 'NORMAL' | 'SELECTION' | 'PRICE';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = DrawerScreenProps<BottomTabsNavigatorParamList, 'Map'>;

const MapScreen = (): JSX.Element => {
  const { t } = useTranslation();
  const styles = makeStyles();

  const {
    data: tollListData,
    loading: tollListLoading,
    error: tollListError,
  } = useQuery(GLOBAL_TOLL_LIST, {
    fetchPolicy: 'network-only',
  });

  const [selectedToll, setSelectedToll] = useState<TollType | null>(null);

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

  const handleTollPressed = (toll: TollType) => {
    if (mode === 'NORMAL') {
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

  return (
    <FullScreenLoading loading={tollListLoading}>
      <FullScreenError error={tollListError}>
        <View style={styles.page}>
          {mode === 'NORMAL' ? (
            <View style={styles.priceButtonContainer}>
              <UIButton
                onPress={() => {
                  setSelectedToll(null);
                  setMode('SELECTION');
                }}
                variant="primary"
                style={styles.priceButton}
              >
                <UIButton.Icon
                  style={{ marginRight: 0 } as ViewStyle}
                  icon={faMoneyBill1Wave}
                ></UIButton.Icon>
                <UIButton.Content style={{ flex: 1 }}>
                  {t('TRIP')}
                </UIButton.Content>
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
