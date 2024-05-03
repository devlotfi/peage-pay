import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { Image } from 'expo-image';
import { PropsWithChildren } from 'react';

interface FullScreenLoadingProps {
  loading?: boolean;
  logo?: boolean;
}

const FullScreenLoading = ({
  loading,
  logo = true,
  children,
}: PropsWithChildren<FullScreenLoadingProps>) => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  if (loading) {
    return (
      <View style={styles.page}>
        {logo ? (
          <Image
            source={require('../assets/img/peage-pay-logo.png')}
            style={styles.image}
            contentFit="contain"
          ></Image>
        ) : null}
        <ActivityIndicator
          style={styles.spinner}
          color={theme['primary-100']}
          size={50}
        ></ActivityIndicator>
      </View>
    );
  }

  return children;
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    page: {
      backgroundColor: theme['base-100'],
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    spinner: {
      marginTop: 30,
    },
    image: {
      height: 70,
      width: 70,
    },
  });

export default FullScreenLoading;
