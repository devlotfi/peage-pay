import { gql } from '../__generated__';

export const VALIDATE_TICKET = gql(`
  mutation VALIDATE_TICKET($validateTicketInput: IdInput!) {
    validateTicket(validateTicketInput: $validateTicketInput) {
      id
    }
  }
`);
