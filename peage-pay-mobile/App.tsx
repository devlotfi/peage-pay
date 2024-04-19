import 'react-native-gesture-handler';
import { AppThemeProvider } from './context/app-theme.context';
import AppProviderContainer from './providers/app-provider-container.component';
import { NetConnectionProvider } from './context/net-connection-context.component';
import { AuthProvider } from './context/auth.context';
import MainStackRouter from './navigators/router';
import { ApplicationApolloClientProvider } from './context/application-apollo-client.context';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { BaseUserRolesType } from './__generated__/graphql';
import { useLocales } from 'expo-localization';
import './i18n';
import { useTranslation } from 'react-i18next';
import PaymentNotificationsProvider from './providers/payment-notifications.component';

SplashScreen.preventAutoHideAsync();

const App = (): JSX.Element => {
  const [fontsLoaded, fontError] = useFonts({
    Inter: require('./assets/fonts/inter.ttf'),
    'Fugaz-One': require('./assets/fonts/fugaz-one.ttf'),
  });
  const locales = useLocales();
  const { i18n } = useTranslation();

  useEffect(() => {
    for (const locale of locales) {
      if (['fr', 'en', 'ar'].indexOf(locale.languageCode!) !== -1) {
        i18n.changeLanguage(locale.languageCode!);
        break;
      }
    }
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <></>;
  }

  return (
    <AppThemeProvider>
      <AppProviderContainer onLayout={onLayoutRootView}>
        <NetConnectionProvider>
          <ApplicationApolloClientProvider>
            <AuthProvider allowedRoles={[BaseUserRolesType.User]}>
              <PaymentNotificationsProvider>
                <MainStackRouter></MainStackRouter>
              </PaymentNotificationsProvider>
            </AuthProvider>
          </ApplicationApolloClientProvider>
        </NetConnectionProvider>
      </AppProviderContainer>
    </AppThemeProvider>
  );
};

export default App;
