import { gql } from '../__generated__';

export const SIGN_UP_WITH_EMAIL = gql(`
  mutation SIGN_UP_WITH_EMAIL($signUpWithEmailInput: SignUpWithEmailInput!) {
    signUpWithEmail(signUpWithEmailInput: $signUpWithEmailInput)
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
      refreshToken
      accessToken
      roles
    }
  }
`);

export const SIGN_OUT = gql(`
  mutation SIGN_OUT($signOutInput: SignOutInput!) {
    signOut(signOutInput: $signOutInput)
  }
`);
