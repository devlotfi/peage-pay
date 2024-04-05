import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import './i18n';
import { AuthProvider } from '@peage-pay-web/auth';
import { ApplicationApolloClientProvider } from '@peage-pay-web/apollo-client';
import { BaseUserRolesType, RefreshTokenMode } from './__generated__/graphql';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <ThemeProvider>
      <ApplicationApolloClientProvider authType="USER">
        <AuthProvider
          refreshTokenMode={RefreshTokenMode.Cookie}
          allowedRoles={[BaseUserRolesType.HumanRessourcesAdmin]}
        >
          <App />
        </AuthProvider>
      </ApplicationApolloClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
