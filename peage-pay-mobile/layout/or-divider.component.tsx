import { StyleSheet, View } from 'react-native';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { AppTheme } from '../theme/types/app-theme.type';
import UIText from '../elements/ui-text/ui-text.component';

const OrDivider = (): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.divider}>
      <UIText style={styles.text}>Or</UIText>
    </View>
  );
};
const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    divider: {
      minHeight: 1,
      backgroundColor: theme['edge-100'],
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
    },
    text: {
      position: 'absolute',
      fontSize: 20,
      backgroundColor: theme['base-100'],
      paddingHorizontal: 10,
    },
  });

export default OrDivider;
