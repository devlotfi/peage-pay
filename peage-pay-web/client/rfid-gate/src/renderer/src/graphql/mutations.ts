import { gql } from '../__generated__';

export const GENERATE_TICKET = gql(`
  mutation GENERATE_TICKET {
    generateTicket {
      id
      distance
      entryTollId
      entryTimeStamp
      entryToll {
        name
      }
      exitToll {
        name
      }
    }
  }
`);
