import { PropsWithChildren, createContext, useState } from 'react';
import { BaseUserType } from '../../__generated__/graphql';
import { useQuery } from '@apollo/client';
import { SIGN_IN_WITH_REFRESH_TOKEN_COOKIE } from '../graphql/mutations';
import AuthLoading from '../components/auth-loading.component';

type AuthData = {
  baseUser: BaseUserType;
  accessToken: string;
} | null;

interface AuthContext {
  authData: AuthData;

  setAuthData: (authData: AuthData) => void;
  setAccessToken: (accessToken: string) => void;
}

const initialValue: AuthContext = {
  authData: null,

  setAuthData: () => {
    return;
  },
  setAccessToken: () => {
    return;
  },
};

export const AuthContext = createContext(initialValue);

export const AuthProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [authData, setAuthData] = useState(initialValue.authData);
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  useQuery(SIGN_IN_WITH_REFRESH_TOKEN_COOKIE, {
    onCompleted(data) {
      setAuthData(data.signInWithRefreshTokenCookie);
      setAuthLoading(false);
    },
    onError(error) {
      setAuthLoading(false);
    },
  });

  const setAccessToken = (accessToken: string) => {
    if (authData) {
      setAuthData({
        accessToken: accessToken,
        baseUser: authData.baseUser,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authData: authData,
        setAuthData,
        setAccessToken,
      }}
    >
      {authLoading ? <AuthLoading></AuthLoading> : children}
    </AuthContext.Provider>
  );
};
