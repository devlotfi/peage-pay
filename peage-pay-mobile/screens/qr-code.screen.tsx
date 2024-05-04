import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import type { StackScreenProps } from '@react-navigation/stack';
import UITabs from '../elements/ui-tabs/ui-tabs.component';
import { faKey, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { BottomTabsNavigatorParamList } from '../navigators/router';
import { useState } from 'react';
import DefinePinForm from '../components/qr-code/define-pin-form.component';
import GenerateQrCode from '../components/qr-code/generate-qr-code.component';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = StackScreenProps<BottomTabsNavigatorParamList, 'Deposit'>;

type Tab = 'DEFINE_PIN' | 'QR_CODE';

const QrCodeScreen = (): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const [tab, setTab] = useState<Tab>('QR_CODE');

  const renderTab = () => {
    switch (tab) {
      case 'DEFINE_PIN':
        return <DefinePinForm></DefinePinForm>;

      case 'QR_CODE':
        return <GenerateQrCode></GenerateQrCode>;
    }
  };

  return (
    <View style={styles.page}>
      <UITabs>
        <UITabs.Item
          onPress={() => setTab('DEFINE_PIN')}
          variant={tab === 'DEFINE_PIN' ? 'active' : 'inactive'}
        >
          <UITabs.Icon icon={faKey}></UITabs.Icon>
          <UITabs.Content>Code pin</UITabs.Content>
        </UITabs.Item>
        <UITabs.Item
          onPress={() => setTab('QR_CODE')}
          variant={tab === 'QR_CODE' ? 'active' : 'inactive'}
        >
          <UITabs.Icon icon={faQrcode}></UITabs.Icon>
          <UITabs.Content>Qr Code</UITabs.Content>
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
  });

export default QrCodeScreen;
