import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import './i18n';
import { AuthProvider } from '@peage-pay-web/auth';
import { ApplicationApolloClientProvider } from '@peage-pay-web/apollo-client';
import { BaseUserRolesType } from './__generated__/graphql';
import { RefreshTokenMode } from '@peage-pay-web/auth/src/__generated__/graphql';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <ThemeProvider>
      <ApplicationApolloClientProvider authType="USER">
        <AuthProvider
          refreshTokenMode={RefreshTokenMode.Cookie}
          allowedRoles={[BaseUserRolesType.GeneralAdmin]}
        >
          <App />
        </AuthProvider>
      </ApplicationApolloClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
