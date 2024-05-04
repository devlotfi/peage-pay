import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIText from '../../elements/ui-text/ui-text.component';
import { RfidTagType } from '../../__generated__/graphql';
import { Utils } from '../../utils/utils';

interface RfidTagItemProps {
  rfidTag: RfidTagType;
}

const RfidTagItem = ({ rfidTag }: RfidTagItemProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.main}>
      <View style={styles.infoRow}>
        <UIText style={styles.infoName}>Rfid:</UIText>
        <UIText style={styles.infoContent}>{rfidTag.rfid}</UIText>
      </View>
      <View style={styles.infoRow}>
        <UIText style={styles.infoName}>Matricule:</UIText>
        <UIText style={styles.infoContent}>{rfidTag.registrationNumber}</UIText>
      </View>
      <View style={styles.infoRow}>
        <UIText style={styles.infoName}>Date assignation:</UIText>
        <UIText style={styles.infoContent}>
          {Utils.formatDateTime(new Date(rfidTag.createdAt))}
        </UIText>
      </View>
      <View style={styles.infoRow}>
        <UIText style={styles.infoName}>Identifiant:</UIText>
        <UIText style={styles.infoContent}>{rfidTag.id}</UIText>
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
