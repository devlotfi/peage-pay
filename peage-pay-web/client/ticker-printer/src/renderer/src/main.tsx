import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import './i18n';
import { ApplicationApolloClientProvider } from '@peage-pay-web/apollo-client';
import './assets/main.css';
import { AutomaticGateAuthProvider } from '@peage-pay-web/automatic-gate-auth';
import { TitleBar } from '@peage-pay-web/ui';
import TicketPrinterIcon from './assets/img/icon.png';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ApplicationApolloClientProvider
          userRefreshTokenMode="PLAIN_TEXT"
          authType="AUTOMATIC_GATE"
        >
          <TitleBar.Layout
            windowIcon={TicketPrinterIcon}
            title="Peage Pay ticket printer"
          >
            <AutomaticGateAuthProvider>
              <App />
            </AutomaticGateAuthProvider>
          </TitleBar.Layout>
        </ApplicationApolloClientProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
