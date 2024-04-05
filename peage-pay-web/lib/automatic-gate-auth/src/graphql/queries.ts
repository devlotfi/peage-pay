import { gql } from '../__generated__';

export const SIGN_IN_AUTOMATIC_GATE_REFRESH_TOKEN = gql(`
  query SIGN_IN_AUTOMATIC_GATE_REFRESH_TOKEN($signInAutomaticGateRefreshTokenInput: SignInAutomaticGateRefreshTokenInput!) {
    signInAutomaticGateRefreshToken(signInAutomaticGateRefreshTokenInput: $signInAutomaticGateRefreshTokenInput) {
      accessToken
      automaticGate {
        id
        name
        direction
        tollId
        createdAt
        updatedAt
      }
    }
  }
`);
