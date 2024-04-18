import { PropsWithChildren, createContext, useState } from 'react';
import {
  BaseUserRolesType,
  BaseUserType,
  RefreshTokenMode,
} from '../__generated__/graphql';
import { useQuery } from '@apollo/client';
import {
  SIGN_IN_WITH_REFRESH_TOKEN,
  SIGN_IN_WITH_REFRESH_TOKEN_COOKIE,
} from '../graphql/queries';
import PermissionErrorPage from '../pages/permission-error.page';
import { FullScreenLoading } from '@peage-pay-web/ui';
import { UserAuthUtils } from '../utils';

type AuthData = {
  baseUser: BaseUserType;
  userRoles: BaseUserRolesType[];
} | null;

interface AuthContext {
  authData: AuthData;
  allowedRoles: BaseUserRolesType[];
  refreshTokenMode: RefreshTokenMode;

  setAuthData: (authData: AuthData) => void;
}

const initialValue: AuthContext = {
  authData: null,
  allowedRoles: [],
  refreshTokenMode: RefreshTokenMode.PlainText,

  setAuthData: () => {
    return;
  },
};

export const AuthContext = createContext(initialValue);

interface AuthProviderProps {
  allowedRoles: BaseUserRolesType[];
  refreshTokenMode: RefreshTokenMode;
}

export const AuthProvider = ({
  children,
  allowedRoles,
  refreshTokenMode,
}: PropsWithChildren<AuthProviderProps>): JSX.Element => {
  const [authData, setAuthData] = useState(initialValue.authData);
  const [ready, setReady] = useState<boolean>(false);

  const { loading: signInWithRefreshTokenCookieLoading } = useQuery(
    SIGN_IN_WITH_REFRESH_TOKEN_COOKIE,
    {
      onCompleted(data) {
        UserAuthUtils.setAccessToken(
          data.signInWithRefreshTokenCookie.accessToken,
        );
        setAuthData({
          // @ts-ignore
          baseUser: data.signInWithRefreshTokenCookie.baseUser,
          userRoles: data.signInWithRefreshTokenCookie.roles,
        });
        setReady(true);
      },
      skip: refreshTokenMode !== RefreshTokenMode.Cookie,
    },
  );
  const { loading: signInWithRefreshTokenLoading } = useQuery(
    SIGN_IN_WITH_REFRESH_TOKEN,
    {
      variables: {
        signInWithRefreshTokenInput: {
          refreshToken: UserAuthUtils.getRefreshToken()!,
        },
      },
      onCompleted(data) {
        UserAuthUtils.setAccessToken(data.signInWithRefreshToken.accessToken);
        setAuthData({
          // @ts-ignore
          baseUser: data.signInWithRefreshToken.baseUser,
          userRoles: data.signInWithRefreshToken.roles,
        });
        setReady(true);
      },
      skip: refreshTokenMode !== RefreshTokenMode.PlainText,
    },
  );

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
    if (
      signInWithRefreshTokenCookieLoading ||
      signInWithRefreshTokenLoading ||
      !ready
    ) {
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
        authData,
        allowedRoles,
        refreshTokenMode,
        setAuthData,
      }}
    >
      {renderContent()}
    </AuthContext.Provider>
  );
};
