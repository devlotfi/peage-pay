import { PropsWithChildren } from 'react';
import { Keyboard, Pressable, StyleSheet } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import {
  useFonts as useFontsNoto,
  NotoSans_500Medium,
} from '@expo-google-fonts/noto-sans';
import {
  useFonts as useFontsFugaz,
  FugazOne_400Regular,
} from '@expo-google-fonts/fugaz-one';
import { StatusBar } from 'expo-status-bar';
import { AppThemesEnum } from '../theme/types/app-themes-enum.type';

const AppProviderContainer = ({ children }: PropsWithChildren) => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  useFontsNoto({ NotoSans_500Medium });
  useFontsFugaz({ FugazOne_400Regular });

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <>
        {children}
        <StatusBar
          translucent={false}
          backgroundColor={theme['base-100']}
          style={theme.type === AppThemesEnum.LIGHT ? 'dark' : 'light'}
        ></StatusBar>
      </>
    </Pressable>
  );
};
export default AppProviderContainer;

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme['base-100'],
    },
  });
