import { gql } from '../../__generated__';

export const SIGN_IN_WITH_REFRESH_TOKEN = gql(`
  query SIGN_IN_WITH_REFRESH_TOKEN($signInWithRefreshTokenInput: SignInWithRefreshTokenInput!) {
    signInWithRefreshToken(signInWithRefreshTokenInput: $signInWithRefreshTokenInput) {
      baseUser {
        id
        firstName
        lastName
        createdAt
        updatedAt
      }
      accessToken
    }
  }
`);

export const SIGN_IN_WITH_REFRESH_TOKEN_COOKIE = gql(`
  query SIGN_IN_WITH_REFRESH_TOKEN_COOKIE {
    signInWithRefreshTokenCookie {
      baseUser {
        id
        firstName
        lastName
        createdAt
        updatedAt
      }
      accessToken
    }
  }
`);
