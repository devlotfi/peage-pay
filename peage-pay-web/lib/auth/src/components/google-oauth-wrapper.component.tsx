import { GoogleOAuthProvider } from '@react-oauth/google';
import { PropsWithChildren } from 'react';

const GoogleOAuthWrapper = ({ children }: PropsWithChildren) => {
  return (
    <GoogleOAuthProvider
      clientId={import.meta.env['VITE_GOOGLE_OAUTH_CLIENT_ID']}
    >
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleOAuthWrapper;
