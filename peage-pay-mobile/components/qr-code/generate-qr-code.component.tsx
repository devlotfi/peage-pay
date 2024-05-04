import { ScrollView, StyleSheet, View } from 'react-native';
import UIHeading from '../../elements/ui-heading/ui-heading.component';
import { faKey, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import { Image } from 'expo-image';
import QRCode from 'react-qr-code';
import UIText from '../../elements/ui-text/ui-text.component';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useContext, useEffect, useState } from 'react';
import { UserAuthUtils } from '../../utils/utils';
import { AuthContext } from '../../context/auth.context';
import FullScreenLoading from '../../layout/full-screen-loading.component';

const GenerateQrCode = (): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { authData } = useContext(AuthContext);
  const [value, setValue] = useState<string>('');
  const [noPin, setNoPin] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const pin = UserAuthUtils.getPin();
    if (!pin) {
      setNoPin(true);
    } else if (authData) {
      const data = {
        userId: authData.baseUser.id,
        pin,
      };
      setValue(JSON.stringify(data));
    }
    setReady(true);
  }, []);

  return (
    <View style={styles.page}>
      <UIHeading style={{ marginLeft: 5, marginVertical: 20 }} size={25}>
        <UIHeading.Icon position="left" icon={faQrcode}></UIHeading.Icon>
        <UIHeading.Text>Qr Code</UIHeading.Text>
      </UIHeading>
      <FullScreenLoading loading={!ready}>
        {noPin ? (
          <UIText style={styles.text}>
            Veuillez definir un pin en premier
          </UIText>
        ) : (
          <View style={styles.container}>
            <UIText style={styles.text}>
              Utilisez ce code pour passer le péage
            </UIText>
            <View style={styles.card}>
              <QRCode value={value}></QRCode>
            </View>
          </View>
        )}
      </FullScreenLoading>
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    page: {
      flex: 1,
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

export default GenerateQrCode;
