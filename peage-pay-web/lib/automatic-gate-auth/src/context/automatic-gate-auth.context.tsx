import { PropsWithChildren, createContext, useState } from 'react';
import { AutomaticGateType } from '../__generated__/graphql';
import { useQuery } from '@apollo/client';
import { FullScreenLoading } from '@peage-pay-web/ui';
import { SIGN_IN_AUTOMATIC_GATE_REFRESH_TOKEN } from '../graphql/queries';
import { AutomaticGateAuthUtils } from '../utils';

type AutomaticGateAuthData = {
  automaticGate: AutomaticGateType;
} | null;

interface AutomaticGateAuthContext {
  automaticGateAuthData: AutomaticGateAuthData;

  setAutomaticGateAuthData: (
    automaticGateAuthData: AutomaticGateAuthData,
  ) => void;
}

const initialValue: AutomaticGateAuthContext = {
  automaticGateAuthData: null,

  setAutomaticGateAuthData: () => {
    return;
  },
};

export const AutomaticGateAuthContext = createContext(initialValue);

export const AutomaticGateAuthProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [automaticGateAuthData, setAutomaticGateAuthData] = useState(
    initialValue.automaticGateAuthData,
  );
  const [ready, setReady] = useState<boolean>(false);

  const { loading } = useQuery(SIGN_IN_AUTOMATIC_GATE_REFRESH_TOKEN, {
    variables: {
      signInAutomaticGateRefreshTokenInput: {
        refreshToken: AutomaticGateAuthUtils.getRefreshToken()!,
      },
    },
    onCompleted(data) {
      AutomaticGateAuthUtils.setAccessToken(
        data.signInAutomaticGateRefreshToken.accessToken,
      );
      console.log(
        'refresh auth completed',
        data.signInAutomaticGateRefreshToken,
      );
      setAutomaticGateAuthData({
        // @ts-ignore
        automaticGate: data.signInAutomaticGateRefreshToken.automaticGate,
      });
      setReady(true);
    },
    onError() {
      console.log('refresh error');
      setReady(true);
    },
    skip: automaticGateAuthData !== null,
  });

  const renderContent = () => {
    if (loading || !ready) {
      return <FullScreenLoading></FullScreenLoading>;
    } else {
      if (!automaticGateAuthData) {
        return children;
      } else {
        return children;
      }
    }
  };

  return (
    <AutomaticGateAuthContext.Provider
      value={{
        automaticGateAuthData,
        setAutomaticGateAuthData,
      }}
    >
      {renderContent()}
    </AutomaticGateAuthContext.Provider>
  );
};
