import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useContext } from 'react';
import { AccessTokenContext } from '../context/access-token.context';
import { SIGN_IN_WITH_REFRESH_TOKEN } from '../graphql/queries';
import { UserAuthUtils } from '../utils/utils';

const serverGraphqlEndpoint = `${process.env.EXPO_PUBLIC_SERVER_URL}/graphql`;

export const useInitApolloClient = () => {
  const {
    accessToken: accessTokenGlobal,
    setAccessToken: setAccessTokenGlobal,
  } = useContext(AccessTokenContext);

  const initApolloClient = () => {
    let accessToken = accessTokenGlobal;
    const httpLink = createHttpLink({
      uri: serverGraphqlEndpoint,
      credentials: 'include',
    });

    const authLink = setContext(async (_, { headers }) => {
      let expired = false;
      if (accessToken) {
        const decoded = jwtDecode(accessToken);
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const expirationTimestamp = decoded.exp;

        const timeRemaining = expirationTimestamp
          ? expirationTimestamp - currentTimestamp
          : 0;
        expired = timeRemaining <= 30;
      }
      if (expired) {
        console.log('getting access');

        const response = await axios.post<{
          data: {
            signInWithRefreshTokenCookie: {
              accessToken: string;
            };
          };
        }>(serverGraphqlEndpoint, {
          query: SIGN_IN_WITH_REFRESH_TOKEN,
          variables: {
            refreshToken: await UserAuthUtils.getRefreshToken(),
          },
        });

        accessToken =
          response.data.data.signInWithRefreshTokenCookie.accessToken;
        setAccessTokenGlobal(accessToken);
      }

      return {
        headers: {
          ...headers,
          Authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    });

    const apolloClient = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    return apolloClient;
  };

  return {
    initApolloClient,
  };
};
