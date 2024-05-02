import { gql } from '../__generated__';

export const SIGN_IN_WITH_REFRESH_TOKEN_INITIAL = gql(`
  query SIGN_IN_WITH_REFRESH_TOKEN_INITIAL($signInWithRefreshTokenInput: SignInWithRefreshTokenInput!) {
    signInWithRefreshToken(signInWithRefreshTokenInput: $signInWithRefreshTokenInput) {
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

export const SIGN_IN_WITH_REFRESH_TOKEN_COOKIE = gql(`
  query SIGN_IN_WITH_REFRESH_TOKEN_COOKIE {
    signInWithRefreshTokenCookie {
      accessToken
    }
  }
`);

export const SIGN_IN_WITH_REFRESH_TOKEN = gql(`
  query SIGN_IN_WITH_REFRESH_TOKEN($signInWithRefreshTokenInput: SignInWithRefreshTokenInput!) {
    signInWithRefreshToken(signInWithRefreshTokenInput: $signInWithRefreshTokenInput) {
      accessToken
    }
  }
`);

export const DEPOSIT_LIST = gql(`
  query DEPOSIT_LIST {
    depositList {
      id
      amount
      createdAt
    }
  }
`);

export const TRIP_LIST = gql(`
  query TRIP_LIST {
    tripList {
      distance
      entryTimeStamp
      entryTollPrice
      entryToll {
        name
      }
      exitTimeStamp
      exitTollPrice
      exitToll {
        name
      }
    }
  }
`);

export const USER_INFO = gql(`
  query USER_INFO {
    userInfo {
      balance
      baseUser {
        currentTrip {
          entryTimeStamp
          entryTollId
          entryTollPrice
          entryToll {
            id
            name
          }
        }
      }
    }
  }
`);

export const GLOBAL_TOLL_LIST = gql(`
  query GLOBAL_TOLL_LIST {
    globalTollList {
      id
      name
      inboundStatus
      outboundStatus
      longitude
      latitude
      wilayaId
      wilaya {
        id
        name
        code
      }
      highwayId
      highway {
        id
        name
        code
      }
      tollNetworkId
      tollNetwork {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`);

export const GLOBAL_SECTION_LIST = gql(`
  query GLOBAL_SECTION_LIST {
    globalSectionList {
      distance
      fromStatus
      toStatus
      fromToll {
        id
        name
        latitude
        longitude
      }
      toToll {
        id
        name
        latitude
        longitude
      }
    }
  }
`);
