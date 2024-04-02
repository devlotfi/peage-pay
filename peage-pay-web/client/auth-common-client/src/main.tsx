import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import './i18n';
import { ApplicationApolloClientProvider } from '@peage-pay-web/apollo-client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <ThemeProvider>
      <ApplicationApolloClientProvider authType="USER">
        <App />
      </ApplicationApolloClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
