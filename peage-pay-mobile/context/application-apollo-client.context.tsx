import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import { PropsWithChildren, createContext, useState } from 'react';
import { initApolloClient } from '../apollo-client/init-apollo-client';

interface ApplicationApolloClientContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  setApolloClient: (value: ApolloClient<NormalizedCacheObject>) => void;
  resetClient: () => void;
}

const initialValue: ApplicationApolloClientContext = {
  apolloClient: null!,
  setApolloClient: () => {
    return;
  },
  resetClient: () => {},
};

export const ApplicationApolloClientContext = createContext(initialValue);

export const ApplicationApolloClientProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [apolloClient, setApolloClient] = useState(initApolloClient());

  const resetClient = () => {
    setApolloClient(initApolloClient());
  };

  return (
    <ApplicationApolloClientContext.Provider
      value={{
        apolloClient,
        setApolloClient,
        resetClient,
      }}
    >
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </ApplicationApolloClientContext.Provider>
  );
};
