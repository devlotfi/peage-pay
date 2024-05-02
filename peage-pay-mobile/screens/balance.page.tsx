import { ScrollView, StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import UIText from '../elements/ui-text/ui-text.component';
import { DrawerScreenProps } from '@react-navigation/drawer';
import FullScreenLoading from '../layout/full-screen-loading.component';
import { useQuery } from '@apollo/client';
import { DEPOSIT_LIST, USER_INFO } from '../graphql/queries';
import { BottomTabsNavigatorParamList } from '../navigators/router';
import { LinearGradient } from 'expo-linear-gradient';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import UIHeading from '../elements/ui-heading/ui-heading.component';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import DepositItem from '../components/deposit/deposit-item.component';
import FullScreenError from '../layout/full-screen-error.component';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = DrawerScreenProps<BottomTabsNavigatorParamList, 'Balance'>;

const BalancePage = (): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { authData } = useContext(AuthContext);
  const { t } = useTranslation();

  const {
    loading: userInfoLoading,
    error: userInfoError,
    data: userInfoData,
  } = useQuery(USER_INFO, {
    fetchPolicy: 'network-only',
  });
  const {
    loading: depositListLoading,
    error: depositListError,
    data: depositListData,
  } = useQuery(DEPOSIT_LIST, {
    fetchPolicy: 'network-only',
  });
  /* const {
    loading: tripListLoading,
    error: tripListError,
    data: tripListData,
  } = useQuery(TRIP_LIST, {
    fetchPolicy: 'network-only',
  }); */

  const renderDepositList = () => {
    if (depositListData && depositListData.depositList.length < 0) {
      return depositListData.depositList.map((deposit) => (
        <DepositItem key={deposit.id} deposit={deposit}></DepositItem>
      ));
    } else {
      return <UIText>Empty</UIText>;
    }
  };

  return (
    <FullScreenLoading loading={userInfoLoading || depositListLoading}>
      <FullScreenError error={userInfoError || depositListError}>
        <View style={styles.page}>
          <UIHeading style={{ marginLeft: 20 }} size={30}>
            <UIHeading.Icon position="left" icon={faMoneyBill}></UIHeading.Icon>
            <UIHeading.Text>{t('BALANCE')}</UIHeading.Text>
          </UIHeading>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.balanceContainer}
            colors={['#3793D6', '#4ED2EF', '#9FDDFF']}
          >
            <View>
              <UIText style={styles.balanceTitle}>Balance</UIText>
              <UIText style={styles.balanceValue}>
                {userInfoData?.userInfo.balance} DZD
              </UIText>
            </View>
            <UIText style={styles.balanceUser}>
              User ID: {authData?.baseUser.id}
            </UIText>
          </LinearGradient>

          <UIHeading style={{ marginLeft: 20 }} size={30}>
            <UIHeading.Icon position="left" icon={faMoneyBill}></UIHeading.Icon>
            <UIHeading.Text>{t('DEPOSITS')}</UIHeading.Text>
          </UIHeading>
          <ScrollView
            style={styles.depositList}
            contentContainerStyle={styles.depositListContent}
          >
            {renderDepositList()}
          </ScrollView>
        </View>
      </FullScreenError>
    </FullScreenLoading>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    page: {
      backgroundColor: theme['base-100'],
      flex: 1,
    },
    balanceContainer: {
      borderRadius: 20,
      marginHorizontal: 15,
      padding: 20,
      minHeight: 170,
      justifyContent: 'space-between',
    },
    balanceTitle: {
      fontSize: 20,
      color: theme['color-content'],
    },
    balanceValue: {
      fontSize: 35,
      fontWeight: 'bold',
      color: theme['color-content'],
    },
    balanceUser: {
      color: theme['color-content'],
    },
    depositList: {
      paddingHorizontal: 10,
    },
    depositListContent: {
      paddingBottom: 30,
    },
  });

export default BalancePage;
