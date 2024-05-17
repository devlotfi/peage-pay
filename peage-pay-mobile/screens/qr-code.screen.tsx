import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import type { StackScreenProps } from '@react-navigation/stack';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { BottomTabsNavigatorParamList } from '../navigators/router';
import { useContext } from 'react';
import QRCode from 'react-qr-code';
import { AuthContext } from '../context/auth.context';
import UIHeading from '../elements/ui-heading/ui-heading.component';
import UIText from '../elements/ui-text/ui-text.component';
import FullScreenLoading from '../layout/full-screen-loading.component';
import { useQuery } from '@apollo/client';
import { GENERATE_PIN } from '../graphql/queries';
import FullScreenError from '../layout/full-screen-error.component';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = StackScreenProps<BottomTabsNavigatorParamList, 'Deposit'>;

const QrCodeScreen = (): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { authData } = useContext(AuthContext);

  const { loading, error, data } = useQuery(GENERATE_PIN, {
    fetchPolicy: 'network-only',
  });

  const getQRCodeDataString = () => {
    const qrCodeData = {
      baseUserId: authData?.baseUser.id,
      pin: data?.generatePin,
    };

    return JSON.stringify(qrCodeData);
  };

  return (
    <View style={styles.page}>
      <UIHeading style={{ marginLeft: 5, marginVertical: 20 }} size={25}>
        <UIHeading.Icon position="left" icon={faQrcode}></UIHeading.Icon>
        <UIHeading.Text>{t('QR_CODE')}</UIHeading.Text>
      </UIHeading>
      <FullScreenLoading loading={loading}>
        <FullScreenError error={error}>
          <View style={styles.container}>
            <UIText style={styles.text}>{t('USE_QR_CODE')}</UIText>
            <View style={styles.card}>
              <QRCode value={getQRCodeDataString()}></QRCode>
            </View>
          </View>
        </FullScreenError>
      </FullScreenLoading>
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
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      borderColor: theme['edge-100'],
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
    },
    text: {
      color: theme['base-content'],
      fontSize: 17,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });

export default QrCodeScreen;
