import { AppThemeProvider } from './context/app-theme.context';
import AppProviderContainer from './providers/app-provider-container.component';
import { NetConnectionProvider } from './context/net-connection-context.component';
import { AuthProvider } from './context/auth.context';
import MainRouter from './routers/main.router';

export default function App() {
  return (
    <AppThemeProvider>
      <AppProviderContainer>
        <NetConnectionProvider>
          <AuthProvider>
            <MainRouter></MainRouter>
          </AuthProvider>
        </NetConnectionProvider>
      </AppProviderContainer>
    </AppThemeProvider>
  );
}
