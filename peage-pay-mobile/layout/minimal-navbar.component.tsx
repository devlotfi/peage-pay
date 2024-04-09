import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { AppTheme } from '../theme/types/app-theme.type';

const MinimalNavbar = (): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        contentFit="contain"
        source={require('../assets/img/peage-pay-logo.png')}
      ></Image>
      <Text style={styles.logoText}>PeagePay</Text>
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
      height: 38,
      width: 38,
    },
    logoText: {
      fontFamily: 'Fugaz-One',
      color: theme['base-content'],
      fontSize: 20,
      marginLeft: 10,
    },
  });

export default MinimalNavbar;
