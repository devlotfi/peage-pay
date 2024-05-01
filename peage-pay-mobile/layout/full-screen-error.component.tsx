import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { Image } from 'expo-image';
import { PropsWithChildren } from 'react';
import UIText from '../elements/ui-text/ui-text.component';

interface FullScreenLoadingProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
}

const FullScreenError = ({
  error,
  children,
}: PropsWithChildren<FullScreenLoadingProps>) => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  if (error) {
    return (
      <View style={styles.page}>
        <Image
          source={require('../assets/img/peage-pay-logo.png')}
          style={styles.image}
          contentFit="contain"
        ></Image>
        <UIText>Error occured</UIText>
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

export default FullScreenError;
