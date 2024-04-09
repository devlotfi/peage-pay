import {
  Keyboard,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { StatusBar } from 'expo-status-bar';
import { AppThemesEnum } from '../theme/types/app-themes-enum.type';

interface AppProviderContainerProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
}

const AppProviderContainer = ({
  children,
  ...props
}: AppProviderContainerProps) => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss} {...props}>
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
