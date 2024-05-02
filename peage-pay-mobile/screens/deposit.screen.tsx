import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import type { StackScreenProps } from '@react-navigation/stack';
import UITabs from '../elements/ui-tabs/ui-tabs.component';
import { faCreditCard, faTicket } from '@fortawesome/free-solid-svg-icons';
import { BottomTabsNavigatorParamList } from '../navigators/router';
import { useState } from 'react';
import RedeemCodeForm from '../components/payment/redeem-code-form.component';
import DepositAmountForm from '../components/payment/deposit-amount.component';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = StackScreenProps<BottomTabsNavigatorParamList, 'Deposit'>;

type Tab = 'CARD' | 'CODE';

const ReloadPage = (): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const [tab, setTab] = useState<Tab>('CODE');

  const renderTab = () => {
    switch (tab) {
      case 'CARD':
        return <DepositAmountForm></DepositAmountForm>;

      case 'CODE':
        return <RedeemCodeForm></RedeemCodeForm>;
    }
  };

  return (
    <View style={styles.page}>
      <UITabs>
        <UITabs.Item
          onPress={() => setTab('CODE')}
          variant={tab === 'CODE' ? 'active' : 'inactive'}
        >
          <UITabs.Icon icon={faTicket}></UITabs.Icon>
          <UITabs.Content>Code</UITabs.Content>
        </UITabs.Item>
        <UITabs.Item
          onPress={() => setTab('CARD')}
          variant={tab === 'CARD' ? 'active' : 'inactive'}
        >
          <UITabs.Icon icon={faCreditCard}></UITabs.Icon>
          <UITabs.Content>Carte</UITabs.Content>
        </UITabs.Item>
      </UITabs>

      {renderTab()}
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    page: {
      backgroundColor: theme['base-100'],
      flex: 1,
      padding: 10,
    },
    image: {
      height: 200,
      width: 200,
    },
    imageText: {
      marginBottom: 10,
      fontSize: 30,
      textAlign: 'center',
      maxWidth: '70%',
      fontWeight: 'bold',
    },
    imageContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonsContainer: {
      padding: 10,
    },
  });

export default ReloadPage;
