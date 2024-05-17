import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIText from '../../elements/ui-text/ui-text.component';
import { TollType } from '../../__generated__/graphql';
import { LatLng, MapMarker } from 'react-native-maps';
import { TollDetailsMode } from '../../screens/map.screen';

interface TollMapMarkerProps {
  toll: TollType;
  mode?: TollDetailsMode;
  selected?: boolean;
  onPressed: (toll: TollType) => void;
  coordinates: LatLng;
}

const TollMapMarker = ({
  toll,
  selected = false,
  coordinates,
  onPressed,
}: TollMapMarkerProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme, toll, selected);

  return (
    <MapMarker coordinate={coordinates} onPress={() => onPressed(toll)}>
      <View style={styles.container}>
        <View style={styles.main}>
          <UIText style={styles.tollName}>{toll.name}</UIText>
        </View>
        <View style={styles.verticalBar}></View>
        <View style={styles.circle}></View>
      </View>
    </MapMarker>
  );
};

const makeStyles = (theme: AppTheme, toll: TollType, selected: boolean) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    tollName: {
      fontSize: selected ? 19 : 14,
      fontWeight: selected ? 'bold' : 'normal',
      color: selected ? theme['color-content'] : theme['base-content'],
    },
    main: {
      backgroundColor: selected ? theme['primary-100'] : theme['base-100'],
      padding: 10,
      borderRadius: 10,
      borderColor: theme['edge-200'],
      borderWidth: selected ? 0 : 1,
      marginTop: 5,
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
  });

export default TollMapMarker;
