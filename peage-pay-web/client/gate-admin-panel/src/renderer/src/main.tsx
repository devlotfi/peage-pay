import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import './i18n';
import { AuthProvider } from '@peage-pay-web/auth';
import { ApplicationApolloClientProvider } from '@peage-pay-web/apollo-client';
import { BaseUserRolesType, RefreshTokenMode } from './__generated__/graphql';
import './assets/main.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TitleBar } from '@peage-pay-web/ui';
import { PeagePayAdminLogo } from '@peage-pay-web/assets';
import { GateAdminInfoProvider } from './context/gate-admin-info.context';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ApplicationApolloClientProvider
          userRefreshTokenMode="COOKIE"
          authType="USER"
        >
          <TitleBar.Layout
            windowIcon={PeagePayAdminLogo}
            title="Peage Pay gate admin dashboard"
          >
            <AuthProvider
              refreshTokenMode={RefreshTokenMode.PlainText}
              allowedRoles={[BaseUserRolesType.Moderator]}
            >
              <GateAdminInfoProvider>
                <App></App>
              </GateAdminInfoProvider>
            </AuthProvider>
          </TitleBar.Layout>
        </ApplicationApolloClientProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
