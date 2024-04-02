import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import { AuthType, initApolloClient } from '../init-apollo-client';
import { PropsWithChildren, createContext, useState } from 'react';

interface ApplicationApolloClientContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  setApolloClient: (value: ApolloClient<NormalizedCacheObject>) => void;
}

const initialValue: ApplicationApolloClientContext = {
  apolloClient: null!,
  setApolloClient: () => {
    return;
  },
};

export const ApplicationApolloClientContext = createContext(initialValue);

interface ApplicationApolloClientProviderProps {
  authType: AuthType;
}

export const ApplicationApolloClientProvider = ({
  children,
  authType,
}: PropsWithChildren<ApplicationApolloClientProviderProps>): JSX.Element => {
  const [apolloClient, setApolloClient] = useState(initApolloClient(authType));

  return (
    <ApplicationApolloClientContext.Provider
      value={{
        apolloClient,
        setApolloClient,
      }}
    >
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </ApplicationApolloClientContext.Provider>
  );
};
