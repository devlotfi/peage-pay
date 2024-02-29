import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { SessionStorageKeys } from '@peage-pay-web/constants';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const serverGraphqlEndpoint = `${import.meta.env['VITE_SERVER_URL']}/graphql`;

const SIGN_IN_WITH_REFRESH_TOKEN_COOKIE = `
  query {
    signInWithRefreshTokenCookie {
      accessToken
    }
  }
`;

export const initApolloClient = () => {
  const httpLink = createHttpLink({
    uri: serverGraphqlEndpoint,
    credentials: 'include',
  });

  const authLink = setContext(async (_, { headers }) => {
    let accessToken = sessionStorage.getItem(SessionStorageKeys.ACCESS_TOKEN);

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
      }>(
        serverGraphqlEndpoint,
        {
          query: SIGN_IN_WITH_REFRESH_TOKEN_COOKIE,
        },
        {
          withCredentials: true,
        },
      );

      accessToken = response.data.data.signInWithRefreshTokenCookie.accessToken;
      sessionStorage.setItem(SessionStorageKeys.ACCESS_TOKEN, accessToken);

      console.log(response);
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
