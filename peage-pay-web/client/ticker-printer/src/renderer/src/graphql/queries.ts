import { gql } from '../__generated__';

export const RFID_TAG_BY_RFID = gql(`
  query RFID_TAG_BY_RFID($rfidTagByRfidInput: RfidTagByRfidInput!) {
    rfidTagByRfid(rfidTagByRfidInput: $rfidTagByRfidInput) {
      id
      rfid
      registrationNumber
      createdAt
      updatedAt
      baseUserId
      baseUser {
        id
        firstName
        lastName
        createdAt
        updatedAt
      }
    }
  }
`);
