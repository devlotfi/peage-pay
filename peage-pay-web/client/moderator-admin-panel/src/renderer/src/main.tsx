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
import { BadgeScannerProvider } from './context/badge-scanner.context';
import { TitleBar } from '@peage-pay-web/ui';
import ModeratorAdminPanelLogo from './assets/img/icon.png';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ApplicationApolloClientProvider
          authType="USER"
          userRefreshTokenMode="PLAIN_TEXT"
        >
          <TitleBar.Layout
            windowIcon={ModeratorAdminPanelLogo}
            title="APP_NAME"
          >
            <AuthProvider
              refreshTokenMode={RefreshTokenMode.PlainText}
              allowedRoles={[BaseUserRolesType.Moderator]}
            >
              <BadgeScannerProvider>
                <App></App>
              </BadgeScannerProvider>
            </AuthProvider>
          </TitleBar.Layout>
        </ApplicationApolloClientProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
