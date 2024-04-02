export const SIGN_IN_WITH_REFRESH_TOKEN_COOKIE = `
  query {
    signInWithRefreshTokenCookie {
      accessToken
    }
  }
`;

export const SIGN_IN_AUTOMATIC_GATE_REFRESH_TOKEN = `
  query SIGN_IN_AUTOMATIC_GATE_REFRESH_TOKEN {
    signInAutomaticGateRefreshToken {
      accessToken
    }
  }
`;
