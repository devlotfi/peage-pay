import { PropsWithChildren, createContext, useState } from 'react';
import { AutomaticGateType } from '../__generated__/graphql';
import { useQuery } from '@apollo/client';
import { SessionStorageKeys } from '@peage-pay-web/constants';
import { SIGN_IN_WITH_REFRESH_TOKEN_COOKIE } from '../graphql/queries';
import { FullScreenLoading } from '@peage-pay-web/ui';

type AutomaticGateAuthData = {
  automaticGate: AutomaticGateType;
} | null;

interface AutomaticGateAuthContext {
  automaticGateAuthData: AutomaticGateAuthData;

  setAutomaticGateAuthData: (
    automaticGateAuthData: AutomaticGateAuthData,
  ) => void;
  setAccessToken: (accessToken: string) => void;
  clearAccessToken: () => void;
}

const initialValue: AutomaticGateAuthContext = {
  automaticGateAuthData: null,

  setAutomaticGateAuthData: () => {
    return;
  },
  setAccessToken: () => {
    return;
  },
  clearAccessToken: () => {
    return;
  },
};

export const AutomaticGateAuthContext = createContext(initialValue);

export const AuthProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [automaticGateAuthData, setAutomaticGateAuthData] = useState(
    initialValue.automaticGateAuthData,
  );

  const { loading } = useQuery(SIGN_IN_WITH_REFRESH_TOKEN_COOKIE, {
    onCompleted(data) {
      setAutomaticGateAuthData({
        // @ts-ignore
        baseUser: data.signInWithRefreshTokenCookie.baseUser,
        userRoles: data.signInWithRefreshTokenCookie.roles,
      });
      setAccessToken(data.signInWithRefreshTokenCookie.accessToken);
    },
  });

  const setAccessToken = (accessToken: string) => {
    sessionStorage.setItem(SessionStorageKeys.ACCESS_TOKEN, accessToken);
  };
  const clearAccessToken = () => {
    sessionStorage.removeItem(SessionStorageKeys.ACCESS_TOKEN);
  };

  const renderContent = () => {
    if (loading) {
      return <FullScreenLoading></FullScreenLoading>;
    } else {
      return children;
    }
  };

  return (
    <AutomaticGateAuthContext.Provider
      value={{
        automaticGateAuthData,
        setAutomaticGateAuthData,
        setAccessToken,
        clearAccessToken,
      }}
    >
      {renderContent()}
    </AutomaticGateAuthContext.Provider>
  );
};
