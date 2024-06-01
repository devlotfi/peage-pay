import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import UIText from '../elements/ui-text/ui-text.component';
import { DrawerScreenProps } from '@react-navigation/drawer';
import FullScreenLoading from '../layout/full-screen-loading.component';
import { useApolloClient, useQuery } from '@apollo/client';
import { TRIP_LIST, USER_INFO } from '../graphql/queries';
import { BottomTabsNavigatorParamList } from '../navigators/router';
import { LinearGradient } from 'expo-linear-gradient';
import UIHeading from '../elements/ui-heading/ui-heading.component';
import { faCarSide, faRoad } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import FullScreenError from '../layout/full-screen-error.component';
import EmptyList from '../layout/empty-list.component';
import { Image } from 'expo-image';
import TripItem from '../components/trip/trip-item.component';
import { TripType } from '../__generated__/graphql';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = DrawerScreenProps<BottomTabsNavigatorParamList, 'Balance'>;

const HomeScreen = (): JSX.Element => {
  const { t } = useTranslation();
  const client = useApolloClient();
  const [refreshing, setRefreshing] = useState(false);

  const {
    loading: userInfoLoading,
    error: userInfoError,
    data: userInfoData,
  } = useQuery(USER_INFO, {
    fetchPolicy: 'network-only',
    onError(error) {
      console.log(error);
    },
  });
  const {
    loading: tripListLoading,
    error: tripListError,
    data: tripListData,
  } = useQuery(TRIP_LIST, {
    fetchPolicy: 'network-only',
  });

  const renderTripList = () => {
    if (tripListData && tripListData.tripList.length > 0) {
      return tripListData.tripList.map((trip) => (
        <TripItem key={trip.id} trip={trip as TripType}></TripItem>
      ));
    } else {
      return <EmptyList></EmptyList>;
    }
  };

  const { theme } = useAppTheme();
  const styles = makeStyles(
    theme,
    userInfoData && userInfoData.userInfo.baseUser.currentTrip ? true : false,
  );

  return (
    <FullScreenLoading loading={userInfoLoading || tripListLoading}>
      <FullScreenError error={userInfoError || tripListError}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={async () => {
                setRefreshing(true);
                await client.refetchQueries({
                  include: [USER_INFO, TRIP_LIST],
                });
                setRefreshing(false);
              }}
            ></RefreshControl>
          }
          style={styles.page}
          contentContainerStyle={styles.pageScrollContent}
        >
          <UIHeading style={{ marginLeft: 20 }} size={25}>
            <UIHeading.Icon position="left" icon={faCarSide}></UIHeading.Icon>
            <UIHeading.Text>{t('USER_STATUS')}</UIHeading.Text>
          </UIHeading>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.imageContainer}
            colors={[
              theme['base-100'],
              userInfoData?.userInfo.baseUser.currentTrip
                ? theme['success-transparent']
                : theme['error-transparent'],
            ]}
          >
            {userInfoData && userInfoData.userInfo.baseUser.currentTrip ? (
              <Image
                style={styles.image}
                contentFit="contain"
                source={require('../assets/img/status-active.png')}
              ></Image>
            ) : (
              <Image
                style={styles.image}
                contentFit="contain"
                source={require('../assets/img/status-inactive.png')}
              ></Image>
            )}
            <View style={styles.statusContainer}>
              <UIText style={styles.statusContainerText}>
                {userInfoData?.userInfo.baseUser.currentTrip
                  ? t('ON_THE_WAY')
                  : t('INACTIVE')}
              </UIText>
            </View>
          </LinearGradient>

          <UIHeading style={{ marginLeft: 20 }} size={25}>
            <UIHeading.Icon position="left" icon={faRoad}></UIHeading.Icon>
            <UIHeading.Text>{t('TRIPS')}</UIHeading.Text>
          </UIHeading>

          {renderTripList()}
        </ScrollView>
      </FullScreenError>
    </FullScreenLoading>
  );
};

const makeStyles = (theme: AppTheme, status: boolean) =>
  StyleSheet.create({
    page: {
      backgroundColor: theme['base-100'],
      flex: 1,
    },
    pageScrollContent: {
      paddingBottom: 30,
    },
    imageContainer: {
      borderRadius: 20,
      marginHorizontal: 15,
      padding: 13,
      minHeight: 170,
      alignItems: 'center',
    },
    image: {
      height: 100,
      width: '100%',
    },
    statusContainer: {
      padding: 13,
      marginTop: 20,
      borderRadius: 10,
      backgroundColor: status ? theme['success-100'] : theme['error-100'],
      width: '100%',
    },
    statusContainerText: {
      fontSize: 17,
      fontWeight: 'bold',
      color: theme['color-content'],
    },
  });

export default HomeScreen;
