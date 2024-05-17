import { Modal, ModalProps, StyleSheet, View } from 'react-native';
import UIText from '../../elements/ui-text/ui-text.component';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIButton from '../../elements/ui-button/ui-button.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'expo-image';
import { useTranslation } from 'react-i18next';

interface VerificationRequestPendingModalProps extends ModalProps {
  onClose: () => void;
}

const VerificationRequestPendingModal = ({
  onClose,
  ...props
}: VerificationRequestPendingModalProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <Modal {...props}>
      <View style={styles.container}>
        <View style={styles.window}>
          <Image
            source={require('../../assets/img/mail-sent.png')}
            contentFit="contain"
            style={styles.image}
          ></Image>
          <UIText style={styles.infoText}>
            {t('VERIFICATIOn_REQUEST_SENT')}
          </UIText>
          <UIButton
            variant="base-200"
            iconPosition="right"
            onPress={() => onClose()}
          >
            <UIButton.Content>Close</UIButton.Content>
            <UIButton.Icon icon={faTimes}></UIButton.Icon>
          </UIButton>
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    window: {
      backgroundColor: theme['base-100'],
      borderColor: theme['edge-200'],
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      width: '90%',
    },
    image: {
      height: 110,
      width: 110,
      marginTop: 20,
    },
    infoText: {
      fontSize: 20,
      maxWidth: '70%',
      textAlign: 'center',
      marginVertical: 10,
    },
  });

export default VerificationRequestPendingModal;
