import { gql } from '../__generated__';

export const SIGN_IN_AUTOMATIC_GATE = gql(`
  mutation SIGN_IN_AUTOMATIC_GATE($signInAutomaticGateInput: SignInAutomaticGateInput!) {
    signInAutomaticGate(signInAutomaticGateInput: $signInAutomaticGateInput) {
      accessToken
      refreshToken
      automaticGate {
        id
        name
        direction
        tollId
        toll {
          id
          name
        }
        createdAt
        updatedAt
      }
    }
  }
`);

export const SIGN_OUT_AUTOMATIC_GATE = gql(`
  mutation SIGN_OUT_AUTOMATIC_GATE {
    signOutAutomaticGate
  }
`);
