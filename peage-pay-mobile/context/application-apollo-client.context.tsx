import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import { useInitApolloClient } from '../hooks/use-init-apollo-client';
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

export const ApplicationApolloClientProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const { initApolloClient } = useInitApolloClient();
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
