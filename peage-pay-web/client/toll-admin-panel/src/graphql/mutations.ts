import { gql } from '../__generated__';

export const ADD_LOCAL_PRICE = gql(`
  mutation ADD_LOCAL_PRICE($addPriceInput: AddLocalPriceInput!) {
    addLocalPrice(addPriceInput: $addPriceInput)
  }
`);

export const DELETE_LOCAL_PRICE = gql(`
  mutation DELETE_LOCAL_PRICE($deletePriceInput: IdInput!) {
    deleteLocalPrice(deletePriceInput: $deletePriceInput)
  }
`);

export const CHANGE_TOLL_STATUS = gql(`
  mutation CHANGE_TOLL_STATUS($changeTollStatusInput: ChangeTollStatusInput!) {
    changeTollStatus(changeTollStatusInput: $changeTollStatusInput)
  }
`);

export const ADD_AUTOMATIC_GATE = gql(`
  mutation ADD_AUTOMATIC_GATE($addAutomaticGateInput: AddAutomaticGateInput!) {
    addAutomaticGate(addAutomaticGateInput: $addAutomaticGateInput) {
      id
      name
      tollId
      createdAt
      updatedAt
    }
  }
`);

export const EDIT_AUTOMATIC_GATE = gql(`
  mutation EDIT_AUTOMATIC_GATE($editAutomaticGateInput: EditAutomaticGateInput!) {
    editAutomaticGate(editAutomaticGateInput: $editAutomaticGateInput) {
      id
      name
      tollId
      createdAt
      updatedAt
    }
  }
`);

export const DELETE_AUTOMATIC_GATE = gql(`
  mutation DELETE_AUTOMATIC_GATE($deleteAutomaticGateInput: IdInput!) {
    deleteAutomaticGate(deleteAutomaticGateInput: $deleteAutomaticGateInput)
  }
`);
