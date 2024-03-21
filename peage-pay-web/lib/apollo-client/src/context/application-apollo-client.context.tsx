import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import { initApolloClient } from '../init-apollo-client';
import { PropsWithChildren, createContext, useState } from 'react';

interface ApplicationApolloClientContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  setApolloClient: (value: ApolloClient<NormalizedCacheObject>) => void;
}

const initialValue: ApplicationApolloClientContext = {
  apolloClient: initApolloClient(),
  setApolloClient: () => {
    return;
  },
};

export const ApplicationApolloClientContext = createContext(initialValue);

export const ApplicationApolloClientProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [apolloClient, setApolloClient] = useState(initApolloClient());

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
