import { PropsWithChildren, createContext, useState } from 'react';
import { BaseUserType } from '../../__generated__/graphql';
import { useQuery } from '@apollo/client';
import { SIGN_IN_WITH_REFRESH_TOKEN_COOKIE } from '../graphql/mutations';
import AuthLoading from '../components/auth-loading.component';
import { SessionStorageKeys } from '@peage-pay-web/constants';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Navigate } from 'react-router-dom';

type AuthData = {
  baseUser: BaseUserType;
} | null;

interface AuthContext {
  authData: AuthData;

  setAuthData: (authData: AuthData) => void;
  setAccessToken: (accessToken: string) => void;
  clearAccessToken: () => void;
  authGuard: (element: JSX.Element) => JSX.Element;
  notAuthGuard: (element: JSX.Element) => JSX.Element;
}

const initialValue: AuthContext = {
  authData: null,

  setAuthData: () => {
    return;
  },
  setAccessToken: () => {
    return;
  },
  clearAccessToken: () => {
    return;
  },
  authGuard: () => {
    return <h1>authGuard</h1>;
  },
  notAuthGuard: () => {
    return <h1>notAuthGuard</h1>;
  },
};

export const AuthContext = createContext(initialValue);

export const AuthProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [authData, setAuthData] = useState(initialValue.authData);
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  useQuery(SIGN_IN_WITH_REFRESH_TOKEN_COOKIE, {
    onCompleted(data) {
      setAuthData({
        baseUser: data.signInWithRefreshTokenCookie.baseUser,
      });
      setAccessToken(data.signInWithRefreshTokenCookie.accessToken);
      setAuthLoading(false);
    },
    onError(error) {
      setAuthLoading(false);
    },
  });

  const setAccessToken = (accessToken: string) => {
    sessionStorage.setItem(SessionStorageKeys.ACCESS_TOKEN, accessToken);
  };
  const clearAccessToken = () => {
    sessionStorage.removeItem(SessionStorageKeys.ACCESS_TOKEN);
  };

  const authGuard = (element: JSX.Element): JSX.Element => {
    if (authData) {
      return element;
    }
    return <Navigate to={'/sign-in'}></Navigate>;
  };

  const notAuthGuard = (element: JSX.Element): JSX.Element => {
    if (!authData) {
      return element;
    }
    return <Navigate to={'/dashboard'}></Navigate>;
  };

  return (
    <GoogleOAuthProvider
      clientId={import.meta.env['VITE_GOOGLE_OAUTH_CLIENT_ID']}
    >
      <AuthContext.Provider
        value={{
          authData: authData,
          setAuthData,
          setAccessToken,
          clearAccessToken,
          authGuard,
          notAuthGuard,
        }}
      >
        {authLoading ? <AuthLoading></AuthLoading> : children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
};
