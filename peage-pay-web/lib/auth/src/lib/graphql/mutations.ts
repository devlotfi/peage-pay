import { gql } from '../../__generated__';

export const SIGN_UP_WITH_EMAIL = gql(`
  mutation SIGN_UP_WITH_EMAIL($signUpWithEmailInput: SignUpWithEmailInput!) {
    signUpWithEmail(signUpWithEmailInput: $signUpWithEmailInput)
  }
`);

export const VERIFY_EMAIL = gql(`
  mutation VERIFY_EMAIL($verifyEmailInput: VerifyEmailInput!) {
    verifyEmail(verifyEmailInput: $verifyEmailInput)
  }
`);

export const SIGN_IN_WITH_EMAIL = gql(`
  mutation SIGN_IN_WITH_EMAIL($signInWithEmailInput: SigninWithEmailInput!, $refreshTokenMode: RefreshTokenMode!) {
    signInWithEmail(signInWithEmailInput: $signInWithEmailInput, refreshTokenMode: $refreshTokenMode) {
      baseUser {
        id
        firstName
        lastName
        birthDate
        gender
        createdAt
        updatedAt
      }
      accessToken
    }
  }
`);

export const SIGN_IN_WITH_REFRESH_TOKEN = gql(`
  query SIGN_IN_WITH_REFRESH_TOKEN($signInWithRefreshTokenInput: SignInWithRefreshTokenInput!) {
    signInWithRefreshToken(signInWithRefreshTokenInput: $signInWithRefreshTokenInput) {
      baseUser {
        id
        firstName
        lastName
        birthDate
        gender
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
        birthDate
        gender
        createdAt
        updatedAt
      }
      accessToken
    }
  }
`);
