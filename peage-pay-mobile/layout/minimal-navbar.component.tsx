import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { AppTheme } from '../theme/types/app-theme.type';

const MinimalNavbar = (): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/svg/peage-pay-logo.svg')}
      ></Image>
    </View>
  );
};
const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      backgroundColor: theme['base-100'],
      minHeight: 60,
      borderColor: theme['edge-200'],
      borderBottomWidth: 1,
      alignItems: 'center',
      flexDirection: 'row',
    },
    logo: {
      height: 35,
      width: 35,
    },
  });

export default MinimalNavbar;
