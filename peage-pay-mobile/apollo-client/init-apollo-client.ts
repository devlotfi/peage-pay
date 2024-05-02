import 'core-js/stable/atob';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { SIGN_IN_WITH_REFRESH_TOKEN } from '../graphql/queries';
import { UserAuthUtils } from '../utils/utils';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import * as SecureStore from 'expo-secure-store';
import { SecureStoreKeys } from '../constants/secure-store-keys';

const serverGraphqlEndpoint = `${SecureStore.getItem(
  SecureStoreKeys.SERVER_URL,
)}/graphql`;
const serverWsGraphqlEndpoint = `${SecureStore.getItem(
  SecureStoreKeys.WS_SERVER_URL,
)}/graphql`;

export const initApolloClient = () => {
  console.log(serverGraphqlEndpoint);

  const httpLink = createHttpLink({
    uri: serverGraphqlEndpoint,
    credentials: 'include',
  });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: serverWsGraphqlEndpoint,
      retryAttempts: 1000,
    }),
  );

  const authLink = setContext(async (_, { headers }) => {
    let expired = false;
    let accessToken = UserAuthUtils.getAccessToken();

    if (accessToken) {
      const decoded = jwtDecode(accessToken);
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const expirationTimestamp = decoded.exp;

      const timeRemaining = expirationTimestamp
        ? expirationTimestamp - currentTimestamp
        : 0;
      expired = timeRemaining <= 1;
    }
    if (expired) {
      console.log(
        'getting access',
        '#############   ',
        UserAuthUtils.getRefreshToken(),
      );

      try {
        const response = await axios.post<{
          data: {
            signInWithRefreshToken: {
              accessToken: string;
            };
          };
        }>(serverGraphqlEndpoint, {
          query: SIGN_IN_WITH_REFRESH_TOKEN,
          variables: {
            signInWithRefreshTokenInput: {
              refreshToken: UserAuthUtils.getRefreshToken(),
            },
          },
        });

        accessToken = response.data.data.signInWithRefreshToken.accessToken;
        UserAuthUtils.setAccessToken(accessToken);
      } catch (error) {
        console.log(JSON.stringify(error.data));
      }
    }

    return {
      headers: {
        ...headers,
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    };
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    authLink.concat(httpLink),
  );

  const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });

  return apolloClient;
};
