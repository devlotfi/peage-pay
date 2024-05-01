import { PropsWithChildren, createContext, useState } from 'react';
import { BaseUserRolesType, BaseUserType } from '../__generated__/graphql';
import UIText from '../elements/ui-text/ui-text.component';
import { useQuery } from '@apollo/client';
import { SIGN_IN_WITH_REFRESH_TOKEN_INITIAL } from '../graphql/queries';
import { UserAuthUtils } from '../utils/utils';
import FullScreenLoading from '../layout/full-screen-loading.component';

type AuthData = {
  baseUser: BaseUserType;
  userRoles: BaseUserRolesType[];
} | null;

interface AuthContext {
  authData: AuthData;
  allowedRoles: BaseUserRolesType[];

  setAuthData: (authData: AuthData) => void;
}

const initialValue: AuthContext = {
  authData: null,
  allowedRoles: [],

  setAuthData: () => {
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
  const [authData, setAuthData] = useState<AuthData | null>(null);
  const [ready, setReady] = useState<boolean>(false);

  const { loading } = useQuery(SIGN_IN_WITH_REFRESH_TOKEN_INITIAL, {
    variables: {
      signInWithRefreshTokenInput: {
        refreshToken: UserAuthUtils.getRefreshToken()!,
      },
    },
    onCompleted(data) {
      UserAuthUtils.setAccessToken(data.signInWithRefreshToken.accessToken);
      setAuthData({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        baseUser: data.signInWithRefreshToken.baseUser,
        userRoles: data.signInWithRefreshToken.roles,
      });
      setReady(true);
    },
    onError(error) {
      console.log(JSON.stringify(error));

      console.log(error.message);
    },
  });

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
    if (loading || !ready) {
      return <FullScreenLoading loading></FullScreenLoading>;
    } else {
      if (
        (authData && checkRoles(allowedRoles, authData.userRoles)) ||
        !authData
      ) {
        return children;
      } else {
        return <UIText>Not permitted</UIText>;
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authData: authData,
        allowedRoles,
        setAuthData,
      }}
    >
      {renderContent()}
    </AuthContext.Provider>
  );
};
