import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { Image } from 'expo-image';

const FullScreenLoading = (): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.page}>
      <Image
        source={require('../assets/img/peage-pay-logo.png')}
        style={styles.image}
        contentFit="contain"
      ></Image>
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    page: {
      backgroundColor: theme['base-100'],
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: 70,
      width: 70,
    },
  });

export default FullScreenLoading;
