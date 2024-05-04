import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import {
  SIGN_IN_AUTOMATIC_GATE_REFRESH_TOKEN,
  SIGN_IN_WITH_REFRESH_TOKEN,
  SIGN_IN_WITH_REFRESH_TOKEN_COOKIE,
} from './graphql/query';
import { UserAuthUtils } from '@peage-pay-web/auth';
import { AutomaticGateAuthUtils } from '@peage-pay-web/automatic-gate-auth';

const serverGraphqlEndpoint = `${
  import.meta.env['VITE_SERVER_URL'] ||
  import.meta.env['RENDERER_VITE_SERVER_URL']
}/graphql`;

export type AuthType = 'USER' | 'AUTOMATIC_GATE';

export type UserRefreshTokenMode = 'COOKIE' | 'PLAIN_TEXT';

export const initApolloClient = (
  authType: AuthType,
  userRefreshTokenMode: UserRefreshTokenMode = 'PLAIN_TEXT',
) => {
  const httpLink = createHttpLink({
    uri: serverGraphqlEndpoint,
    credentials: 'include',
  });

  const authLink = setContext(async (_, { headers }) => {
    let accessToken =
      authType === 'USER'
        ? UserAuthUtils.getAccessToken()!
        : AutomaticGateAuthUtils.getAccessToken()!;

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

      if (authType === 'USER') {
        if (userRefreshTokenMode === 'COOKIE') {
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

          accessToken =
            response.data.data.signInWithRefreshTokenCookie.accessToken;
          UserAuthUtils.setAccessToken(accessToken);
        } else {
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
          console.log(response.data.data);

          accessToken = response.data.data.signInWithRefreshToken.accessToken;
          UserAuthUtils.setAccessToken(accessToken);
        }
      } else {
        console.log('lolaaaaaaaaaaaaaaaaaaa');

        const response = await axios.post<{
          data: {
            signInAutomaticGateRefreshToken: {
              accessToken: string;
            };
          };
        }>(
          serverGraphqlEndpoint,
          {
            query: SIGN_IN_AUTOMATIC_GATE_REFRESH_TOKEN,
            variables: {
              signInAutomaticGateRefreshTokenInput: {
                refreshToken: AutomaticGateAuthUtils.getRefreshToken(),
              },
            },
          },
          {
            withCredentials: true,
          },
        );

        accessToken =
          response.data.data.signInAutomaticGateRefreshToken.accessToken;
        AutomaticGateAuthUtils.setAccessToken(accessToken);

        console.log(response);
      }
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
