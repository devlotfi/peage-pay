import { PropsWithChildren, createContext, useState } from 'react';
import { BaseUserType } from '../../__generated__/graphql';

interface AuthContext {
  authData: {
    baseUser: BaseUserType;
    accessToken: string;
  } | null;

  setBaseUser: (baseUser: BaseUserType) => void;
  setAccessToken: (accessToken: string) => void;
  clearAuthData: () => void;
}

const initialValue: AuthContext = {
  authData: null,

  setBaseUser: () => {
    return;
  },
  setAccessToken: () => {
    return;
  },
  clearAuthData: () => {
    return;
  },
};

export const AuthContext = createContext(initialValue);

export const AuthProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [authData, setAuthData] = useState(initialValue.authData);

  const setBaseUser = (baseUser: BaseUserType) => {
    if (authData) {
      setAuthData({
        accessToken: authData.accessToken,
        baseUser,
      });
    }
  };

  const setAccessToken = (accessToken: string) => {
    if (authData) {
      setAuthData({
        accessToken: accessToken,
        baseUser: authData.baseUser,
      });
    }
  };

  const clearAuthData = () => {
    setAuthData(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authData: authData,
        setBaseUser,
        setAccessToken,
        clearAuthData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
