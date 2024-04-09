import 'react-native-gesture-handler';
import { AppThemeProvider } from './context/app-theme.context';
import AppProviderContainer from './providers/app-provider-container.component';
import { NetConnectionProvider } from './context/net-connection-context.component';
import { AuthProvider } from './context/auth.context';
import MainStackRouter from './navigators/router';
import { AccessTokenProvider } from './context/access-token.context';
import { ApplicationApolloClientProvider } from './context/application-apollo-client.context';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { BaseUserRolesType } from './__generated__/graphql';

SplashScreen.preventAutoHideAsync();

const App = (): JSX.Element => {
  const [fontsLoaded, fontError] = useFonts({
    'Noto-Sans': require('./assets/fonts/noto-sans.ttf'),
    'Fugaz-One': require('./assets/fonts/fugaz-one.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AppThemeProvider>
      <AppProviderContainer onLayout={onLayoutRootView}>
        <NetConnectionProvider>
          <AccessTokenProvider>
            <ApplicationApolloClientProvider>
              <AuthProvider allowedRoles={[BaseUserRolesType.User]}>
                <MainStackRouter></MainStackRouter>
              </AuthProvider>
            </ApplicationApolloClientProvider>
          </AccessTokenProvider>
        </NetConnectionProvider>
      </AppProviderContainer>
    </AppThemeProvider>
  );
};

export default App;
