import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import UIText from '../elements/ui-text/ui-text.component';
import { TollStatusType, TollType } from '../__generated__/graphql';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import UIButton from '../elements/ui-button/ui-button.component';

interface TollDetailsProps {
  toll: TollType;
  onClose: () => void;
}

const TollDetails = ({ toll, onClose }: TollDetailsProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme, toll);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <UIText style={styles.title}>Toll info</UIText>
        <UIButton onPress={() => onClose()} variant="base-200">
          <UIButton.Icon
            style={{ marginRight: 0 } as ViewProps}
            icon={faTimes}
          ></UIButton.Icon>
        </UIButton>
      </View>
      <View style={styles.infoContainer}>
        <UIText style={styles.infoName}>Name:</UIText>
        <UIText style={styles.infoContent}>{toll.name}</UIText>
      </View>
      <View style={styles.infoContainer}>
        <UIText style={styles.infoName}>Highway:</UIText>
        <UIText style={styles.infoContent}>{toll.highway.name}</UIText>
      </View>

      <View style={styles.infoContainer}>
        <UIText style={styles.infoName}>Traffic status:</UIText>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.infoContainer}>
          <UIText style={styles.infoName}>
            <View style={styles.inboundDot}></View> Inbound:
          </UIText>
          <UIText style={styles.infoContent}>{toll.inboundStatus}</UIText>
        </View>
        <View style={styles.infoContainer}>
          <UIText style={styles.infoName}>
            <View style={styles.outboundDot}></View> Outbound:
          </UIText>
          <UIText style={styles.infoContent}>{toll.outboundStatus}</UIText>
        </View>
      </View>
    </View>
  );
};

const makeStyles = (theme: AppTheme, toll: TollType) =>
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
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
      color: theme['primary-100'],
    },
    infoContainer: {
      flexDirection: 'row',
      paddingVertical: 5,
      alignItems: 'center',
    },
    infoName: {
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    infoContent: {
      fontSize: 17,
      marginLeft: 10,
    },
    statusContainer: {
      borderRadius: 7,
      borderColor: theme['edge-200'],
      borderWidth: 1,
    },
    inboundDot: {
      height: 13,
      width: 13,
      borderRadius: 1000,
      backgroundColor:
        toll.inboundStatus === TollStatusType.NormalTraffic
          ? 'rgb(34,197,94)'
          : toll.inboundStatus === TollStatusType.ModerateTraffic
          ? 'rgb(234,179,8)'
          : toll.inboundStatus === TollStatusType.HighTraffic
          ? 'rgb(51,146,60)'
          : toll.inboundStatus === TollStatusType.OutOfService
          ? 'rgb(239,68,68)'
          : undefined,
    },
    outboundDot: {
      height: 13,
      width: 13,
      borderRadius: 1000,
      backgroundColor:
        toll.outboundStatus === TollStatusType.NormalTraffic
          ? 'rgb(34,197,94)'
          : toll.outboundStatus === TollStatusType.ModerateTraffic
          ? 'rgb(234,179,8)'
          : toll.outboundStatus === TollStatusType.HighTraffic
          ? 'rgb(51,146,60)'
          : toll.outboundStatus === TollStatusType.OutOfService
          ? 'rgb(239,68,68)'
          : undefined,
    },
  });

export default TollDetails;
