import { gql } from '../__generated__';

export const TOLL_LIST = gql(`
  query TOLL_LIST($tollListInput: TollListInput!) {
    tollList(tollListInput: $tollListInput) {
      count
      list {
        id
        name
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
  }
`);

export const AUTOMATIC_GATE_LIST = gql(`
  query AUTOMATIC_GATE_LIST($automaticGateListInput: AutomaticGateListInput!) {
    automaticGateList(automaticGateListInput: $automaticGateListInput) {
      count
      list {
        id
        name
        direction
        variant
        tollId
        createdAt
        updatedAt
      }
    }
  }
`);
