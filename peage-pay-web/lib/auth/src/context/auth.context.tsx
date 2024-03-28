import { PropsWithChildren, createContext, useState } from 'react';
import { BaseUserRolesType, BaseUserType } from '../__generated__/graphql';
import { useQuery } from '@apollo/client';
import { SessionStorageKeys } from '@peage-pay-web/constants';
import { SIGN_IN_WITH_REFRESH_TOKEN_COOKIE } from '../graphql/queries';
import PermissionErrorPage from '../pages/permission-error.page';
import { FullScreenLoading } from '@peage-pay-web/ui';

type AuthData = {
  baseUser: BaseUserType;
  userRoles: BaseUserRolesType[];
} | null;

interface AuthContext {
  authData: AuthData;
  allowedRoles: BaseUserRolesType[];

  setAuthData: (authData: AuthData) => void;
  setAccessToken: (accessToken: string) => void;
  clearAccessToken: () => void;
}

const initialValue: AuthContext = {
  authData: null,
  allowedRoles: [],

  setAuthData: () => {
    return;
  },
  setAccessToken: () => {
    return;
  },
  clearAccessToken: () => {
    return;
  },
};

export const AuthContext = createContext(initialValue);

interface AuthProviderProps {
  allowedRoles: BaseUserRolesType[];
}

export const AuthProvider = ({
  children,
  allowedRoles,
}: PropsWithChildren<AuthProviderProps>): JSX.Element => {
  const [authData, setAuthData] = useState(initialValue.authData);
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  useQuery(SIGN_IN_WITH_REFRESH_TOKEN_COOKIE, {
    onCompleted(data) {
      setAuthData({
        // @ts-ignore
        baseUser: data.signInWithRefreshTokenCookie.baseUser,
        userRoles: data.signInWithRefreshTokenCookie.roles,
      });
      setAccessToken(data.signInWithRefreshTokenCookie.accessToken);
      setAuthLoading(false);
    },
    onError() {
      setAuthLoading(false);
    },
  });

  const setAccessToken = (accessToken: string) => {
    sessionStorage.setItem(SessionStorageKeys.ACCESS_TOKEN, accessToken);
  };
  const clearAccessToken = () => {
    sessionStorage.removeItem(SessionStorageKeys.ACCESS_TOKEN);
  };

  const checkRoles = (
    allowedRoles: BaseUserRolesType[],
    userRoles: BaseUserRolesType[],
  ): boolean => {
    for (const role of allowedRoles) {
      if (userRoles.indexOf(role) !== -1) {
        return true;
      }
    }
    return false;
  };

  const renderContent = () => {
    if (authLoading) {
      return <FullScreenLoading></FullScreenLoading>;
    } else {
      if (
        (authData && checkRoles(allowedRoles, authData.userRoles)) ||
        !authData
      ) {
        return children;
      } else {
        return <PermissionErrorPage></PermissionErrorPage>;
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authData: authData,
        allowedRoles,
        setAuthData,
        setAccessToken,
        clearAccessToken,
      }}
    >
      {renderContent()}
    </AuthContext.Provider>
  );
};
