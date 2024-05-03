import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIText from '../../elements/ui-text/ui-text.component';
import { SectionType } from '../../__generated__/graphql';
import { LatLng, MapMarker } from 'react-native-maps';

interface SectionMapMarkerProps {
  section: SectionType;
  onPressed: (toll: SectionType) => void;
  coordinates: LatLng;
}

const SectionMapMarker = ({
  section,
  onPressed,
  coordinates,
}: SectionMapMarkerProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <MapMarker coordinate={coordinates} onPress={() => onPressed(section)}>
      <View style={styles.main}>
        <UIText style={styles.text}>{section.distance} km</UIText>
      </View>
    </MapMarker>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    main: {
      backgroundColor: theme['base-100'],
      padding: 7,
      borderRadius: 10,
      borderColor: theme['edge-200'],
      marginTop: 5,
      borderWidth: 1,
    },
    text: {
      fontSize: 13,
    },
  });

export default SectionMapMarker;
