import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@peage-pay-web/tailwind-config'
import { AuthProvider } from '@peage-pay-web/auth'
import { ApplicationApolloClientProvider } from '@peage-pay-web/apollo-client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ApplicationApolloClientProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ApplicationApolloClientProvider>
    </ThemeProvider>
  </React.StrictMode>
)
