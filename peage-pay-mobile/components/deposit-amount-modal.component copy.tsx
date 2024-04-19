import { Modal, ModalProps, StyleSheet, View } from 'react-native';
import UIText from '../elements/ui-text/ui-text.component';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import WebView from 'react-native-webview';
import { useTranslation } from 'react-i18next';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import UIButtonOutline from '../elements/ui-button-outline/ui-button-outline.component';

interface DepositAmountModalProps extends ModalProps {
  onClose: () => void;
  url: string;
}

const DepositAmountModal = ({
  onClose,
  url,
  ...props
}: DepositAmountModalProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { t } = useTranslation();

  return (
    <Modal {...props}>
      <View style={styles.container}>
        <View style={styles.window}>
          <View style={styles.topBar}>
            <UIText style={styles.tobBarTitle}>{t('PAYMENT')}</UIText>
            <UIButtonOutline
              style={styles.closeBtn}
              onPress={() => onClose()}
              variant="error"
            >
              <UIButtonOutline.Icon
                style={{ marginRight: 0 } as ViewProps}
                icon={faTimes}
              ></UIButtonOutline.Icon>
            </UIButtonOutline>
          </View>
          <WebView source={{ uri: url }}></WebView>
        </View>
      </View>
    </Modal>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#00000070',
      flex: 1,
    },
    window: {
      backgroundColor: theme['base-100'],
      flex: 1,
      width: '100%',
    },
    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme['base-100'],
      borderBottomWidth: 1,
      borderColor: theme['edge-100'],
      padding: 10,
    },
    tobBarTitle: {
      fontSize: 15,
    },
    closeBtn: {
      borderRadius: 1000,
    },
  });

export default DepositAmountModal;
