import { PressableProps, StyleProp, ViewStyle } from 'react-native';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { StatusBar } from 'expo-status-bar';
import { AppThemesEnum } from '../theme/types/app-themes-enum.type';

interface AppProviderContainerProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
}

const AppProviderContainer = ({ children }: AppProviderContainerProps) => {
  const { theme } = useAppTheme();

  return (
    <>
      {children}
      <StatusBar
        translucent={false}
        backgroundColor={theme['base-100']}
        style={theme.type === AppThemesEnum.LIGHT ? 'dark' : 'light'}
      ></StatusBar>
    </>
  );
};
export default AppProviderContainer;
