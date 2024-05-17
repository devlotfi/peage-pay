import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIText from '../../elements/ui-text/ui-text.component';
import { RfidTagType } from '../../__generated__/graphql';
import { Utils } from '../../utils/utils';
import { useTranslation } from 'react-i18next';

interface RfidTagItemProps {
  rfidTag: RfidTagType;
}

const RfidTagItem = ({ rfidTag }: RfidTagItemProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.main}>
      <View style={styles.infoRow}>
        <UIText style={styles.infoName}>{t('RFID')}:</UIText>
        <UIText style={styles.infoContent}>{rfidTag.rfid}</UIText>
      </View>
      <View style={styles.infoRow}>
        <UIText style={styles.infoName}>{t('REGISTRATION_NUMBER')}:</UIText>
        <UIText style={styles.infoContent}>{rfidTag.registrationNumber}</UIText>
      </View>
      <View style={styles.infoRow}>
        <UIText style={styles.infoName}>{t('ASSIGNATION_DATE')}:</UIText>
        <UIText style={styles.infoContent}>
          {Utils.formatDateTime(new Date(rfidTag.createdAt))}
        </UIText>
      </View>
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    main: {
      backgroundColor: theme['base-200'],
      padding: 10,
      borderRadius: 10,
      borderColor: theme['edge-200'],
      marginTop: 10,
      borderWidth: 1,
    },
    infoRow: {
      flexDirection: 'row',
      paddingVertical: 3,
    },
    infoName: {
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: 10,
      color: theme['primary-100'],
    },
    infoContent: {
      fontSize: 17,
      marginLeft: 10,
      flexWrap: 'wrap',
      flexShrink: 1,
    },
  });

export default RfidTagItem;
