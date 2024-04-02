import { gql } from "../__generated__";

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
      roles
    }
  }
`);
