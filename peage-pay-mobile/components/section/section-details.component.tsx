import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIText from '../../elements/ui-text/ui-text.component';
import { SectionStatusType, SectionType } from '../../__generated__/graphql';
import {
  faDownLong,
  faTimes,
  faUpLong,
} from '@fortawesome/free-solid-svg-icons';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import UIButton from '../../elements/ui-button/ui-button.component';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

interface SectionDetailsProps {
  section: SectionType;
  onClose: () => void;
}

const SectionDetails = ({
  section,
  onClose,
}: SectionDetailsProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme, section);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <UIText style={styles.title}>Section info</UIText>
        <UIButton onPress={() => onClose()} variant="base-200">
          <UIButton.Icon
            style={{ marginRight: 0 } as ViewProps}
            icon={faTimes}
          ></UIButton.Icon>
        </UIButton>
      </View>

      <View style={styles.tollContainer}>
        <UIText style={styles.tollName}>{section.fromToll.name}</UIText>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.arrowContainer}>
          <FontAwesomeIcon
            size={30}
            style={styles.fromArrow}
            icon={faDownLong}
          ></FontAwesomeIcon>
          <UIText style={styles.arrowText}>{section.fromStatus}</UIText>
        </View>
        <View style={styles.arrowContainer}>
          <FontAwesomeIcon
            size={30}
            style={styles.toArrow}
            icon={faUpLong}
          ></FontAwesomeIcon>
          <UIText style={styles.arrowText}>{section.toStatus}</UIText>
        </View>
      </View>
      <View style={styles.tollContainer}>
        <UIText style={styles.tollName}>{section.toToll.name}</UIText>
      </View>
    </View>
  );
};

const makeStyles = (theme: AppTheme, section: SectionType) =>
  StyleSheet.create({
    main: {
      backgroundColor: theme['base-100'],
      padding: 7,
      borderRadius: 10,
      borderColor: theme['edge-200'],
      borderWidth: 1,
      width: '100%',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: theme['edge-100'],
      borderBottomWidth: 1,
      paddingBottom: 10,
      alignItems: 'center',
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
      color: theme['primary-100'],
    },
    tollContainer: {
      padding: 10,
      backgroundColor: theme['base-200'],
      borderColor: theme['edge-200'],
      borderWidth: 1,
      borderRadius: 7,
    },
    tollName: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    statusContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
    },
    arrowContainer: {
      alignItems: 'center',
    },
    arrowText: {
      fontSize: 12,
    },
    fromArrow: {
      color:
        section.fromStatus === SectionStatusType.NormalTraffic
          ? 'rgb(34,197,94)'
          : section.fromStatus === SectionStatusType.ModerateTraffic
          ? 'rgb(234,179,8)'
          : section.fromStatus === SectionStatusType.HighTraffic
          ? 'rgb(51,146,60)'
          : section.fromStatus === SectionStatusType.Blocked
          ? 'rgb(239,68,68)'
          : undefined,
    },
    toArrow: {
      color:
        section.toStatus === SectionStatusType.NormalTraffic
          ? 'rgb(34,197,94)'
          : section.toStatus === SectionStatusType.ModerateTraffic
          ? 'rgb(234,179,8)'
          : section.toStatus === SectionStatusType.HighTraffic
          ? 'rgb(51,146,60)'
          : section.toStatus === SectionStatusType.Blocked
          ? 'rgb(239,68,68)'
          : undefined,
    },
  });

export default SectionDetails;
