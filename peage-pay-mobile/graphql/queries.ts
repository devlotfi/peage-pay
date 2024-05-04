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

export const SIGN_IN_WITH_REFRESH_TOKEN = `
  query SIGN_IN_WITH_REFRESH_TOKEN($signInWithRefreshTokenInput: SignInWithRefreshTokenInput!) {
    signInWithRefreshToken(signInWithRefreshTokenInput: $signInWithRefreshTokenInput) {
      accessToken
    }
  }
`;

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
      id
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

export const TRIP_PRICE = gql(`
  query TRIP_PRICE($tripPriceInput: TripPriceInput!) {
    tripPrice(tripPriceInput: $tripPriceInput) {
      distance
      fromTollPrice
      toTollPrice
    }
  }
`);

export const USER_RFID_TAG_LIST = gql(`
  query USER_RFID_TAG_LIST {
    userRfidTagList {
      id
      rfid
      registrationNumber
      createdAt
    }
  }
`);
