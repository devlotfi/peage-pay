import { gql } from '../__generated__';

export const TICKET_INFO = gql(`
  query TICKET_INFO($ticketInfoInput: IdInput!) {
    ticketInfo(ticketInfoInput: $ticketInfoInput) {
      distance
      entryTollId
      entryTollPrice
      entryTimeStamp
      entryToll {
        name
      }
      exitTollId
      exitTollPrice
      used
    }
  }
`);

export const GATE_ADMIN_INFO = gql(`
  query GATE_ADMIN_INFO {
    gateAdminInfo {
      toll {
        name
      }
    }
  }
`);
