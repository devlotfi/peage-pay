import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import './i18n';
import { AuthProvider } from '@peage-pay-web/auth';
import { ApplicationApolloClientProvider } from '@peage-pay-web/apollo-client';
import { BaseUserRolesType } from './__generated__/graphql';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <ThemeProvider>
      <ApplicationApolloClientProvider>
        <AuthProvider allowedRoles={[BaseUserRolesType.GeneralAdmin]}>
          <App />
          <ToastContainer autoClose={3000}></ToastContainer>
        </AuthProvider>
      </ApplicationApolloClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
