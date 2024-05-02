import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIText from '../../elements/ui-text/ui-text.component';
import { TollStatusType, TollType } from '../../__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDownLong, faUpLong } from '@fortawesome/free-solid-svg-icons';

interface TollMapMarkerProps {
  toll: TollType;
}

const TollMapMarker = ({ toll }: TollMapMarkerProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme, toll);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <UIText>{toll.name}</UIText>
        <FontAwesomeIcon
          style={styles.inboundArrow}
          icon={faUpLong}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          style={styles.outboundArrow}
          icon={faDownLong}
        ></FontAwesomeIcon>
      </View>
      <View style={styles.verticalBar}></View>
      <View style={styles.circle}></View>
    </View>
  );
};

const makeStyles = (theme: AppTheme, toll: TollType) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    main: {
      backgroundColor: theme['base-100'],
      padding: 10,
      borderRadius: 10,
      borderColor: theme['edge-200'],
      marginTop: 5,
      borderWidth: 1,
      flexDirection: 'row',
    },
    verticalBar: {
      height: 30,
      width: 5,
      backgroundColor: theme['primary-100'],
    },
    circle: {
      height: 13,
      width: 13,
      backgroundColor: theme['primary-100'],
      borderRadius: 1000,
    },
    inboundArrow: {
      color:
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
    outboundArrow: {
      color:
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

export default TollMapMarker;
