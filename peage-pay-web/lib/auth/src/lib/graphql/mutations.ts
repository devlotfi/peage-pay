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

export const SEND_PASSWORD_RESET_EMAIL = gql(`
  mutation SEND_PASSWORD_RESET_EMAIL($sendPasswordResetEmailInput: SendResetPasswordEmailInput!) {
    sendPasswordResetEmail(sendPasswordResetEmailInput: $sendPasswordResetEmailInput)
  }
`);

export const RESET_PASSWORD = gql(`
  mutation RESET_PASSWORD($resetPasswordInput: ResetPasswordInput!) {
    resetPassword(resetPasswordInput: $resetPasswordInput)
  }
`);

export const SIGN_IN_WITH_EMAIL = gql(`
  mutation SIGN_IN_WITH_EMAIL($signInWithEmailInput: SigninWithEmailInput!, $refreshTokenMode: RefreshTokenMode!) {
    signInWithEmail(signInWithEmailInput: $signInWithEmailInput, refreshTokenMode: $refreshTokenMode) {
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

export const SIGN_IN_WITH_GOOGLE = gql(`
  mutation SIGN_IN_WITH_GOOGLE($signInWithGoogleInput: SignInWithGoogleInput!, $refreshTokenMode: RefreshTokenMode!) {
    signInWithGoogle(signInWithGoogleInput: $signInWithGoogleInput, refreshTokenMode: $refreshTokenMode) {
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

export const SIGN_OUT_WITH_REFRESH_TOKEN_COOKIE = gql(`
  mutation SIGN_OUT_WITH_REFRESH_TOKEN_COOKIE {
    signOutWithRefreshTokenCookie
  }
`);
