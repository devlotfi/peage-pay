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

export const BASE_USER_LIST = gql(`
  query BASE_USER_LIST($baseUserListInput: BaseUserListInput!) {
    baseUserList(baseUserListInput: $baseUserListInput) {
      count
      list {
        id
        firstName
        lastName
        createdAt
        updatedAt
        roles
      }
    }
  }
`);

export const BASE_USER_BY_ID = gql(`
  query BASE_USER_BY_ID($baseUserByIdInput: IdInput!) {
    baseUserById(baseUserByIdInput: $baseUserByIdInput) {
      id
      firstName
      lastName
      roles
      createdAt
      updatedAt
    }
  }
`);

export const RFID_TAG_LIST = gql(`
  query RFID_TAG_LIST($rfidTagListInput: RfidTagListInput!) {
    rfidTagList(rfidTagListInput: $rfidTagListInput) {
      count
      list {
        id
        rfid
        registrationNumber
        baseUserId
        createdAt
        updatedAt
      }
    }
  }
`);
