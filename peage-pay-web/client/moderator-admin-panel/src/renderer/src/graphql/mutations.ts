import { gql } from '../__generated__';

export const DELETE_BASE_USER = gql(`
  mutation DELETE_BASE_USER($deleteBaseUserInput: IdInput!) {
    deleteBaseUser(deleteBaseUserInput: $deleteBaseUserInput)
  }
`);

export const ADD_RFID_TAG = gql(`
  mutation ADD_RFID_TAG($addRfidTagInput: AddRfidTagInput!) {
    addRfidTag(addRfidTagInput: $addRfidTagInput) {
      id
      rfid
      registrationNumber
      baseUserId
      createdAt
      updatedAt
    }
  }
`);

export const DELETE_RFID_TAG = gql(`
  mutation DELETE_RFID_TAG($deleteRfidTagInput: IdInput!) {
    deleteRfidTag(deleteRfidTagInput: $deleteRfidTagInput)
  }
`);
