import { gql } from '../__generated__';

export const HIGHWAY_LIST = gql(`
  query HIGHWAY_LIST($highwayListInput: HighwayListInput!) {
    highwayList(highwayListInput: $highwayListInput) {
      id
      name
      code
      createdAt
      updatedAt
    }
  }
`);

export const SUBSCRIPTION_LIST = gql(`
  query SUBSCRIPTION_LIST($subscriptionListInput: SubscriptionListInput!) {
    subscriptionList(subscriptionListInput: $subscriptionListInput) {
      id
      name
      createdAt
      updatedAt
    }
  }
`);

export const TOLL_LIST = gql(`
  query TOLL_LIST($tollListInput: TollListInput!) {
    tollList(tollListInput: $tollListInput) {
      id
      name
      status
      longitude
      latitude
      wilaya {
        name
        code
      }
      highway {
        name
        code
      }
      tollNetwork {
        name
      }
      createdAt
      updatedAt
    }
  }
`);
