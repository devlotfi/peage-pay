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

export const HIGHWAY_BY_ID = gql(`
  query HIGHWAY_BY_ID($highwayByIdInput: HighwayByIdInput!) {
    highwaybyId(highwayByIdInput: $highwayByIdInput) {
      code
      id
      name
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

export const SUBSCRIPTION_BY_ID = gql(`
  query SUBSCRIPTION_BY_ID($subscriptionByIdInput: SubscriptionByIdInput!) {
    subscriptionById(subscriptionByIdInput: $subscriptionByIdInput) {
      id
      name
      vehicleType
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
        id
        name
        code
      }
      highway {
        id
        name
        code
      }
      tollNetwork {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`);

export const TOLL_BY_ID = gql(`
  query TOLL_BY_ID($tollByIdInput: TollByIdInput!) {
    tollById(tollByIdInput: $tollByIdInput) {
      id
      name
      status
      longitude
      latitude
      wilaya {
        id
        name
        code
      }
      highway {
        id
        name
        code
      }
      tollNetwork {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`);

export const TOLL_NETWORK_LIST = gql(`
  query TOLL_NETWORK_LIST($tollNetworkListInput: TollNetworkListInput!) {
    tollNetworkList(tollNetworkListInput: $tollNetworkListInput) {
      id
      name
      createdAt
      updatedAt
    }
  }
`);

export const TOLL_NETWORK_BY_ID = gql(`
  query TOLL_NETWORK_BY_ID($tollNetworkByIdInput: TollNetworkByIdInput!) {
    tollNetworkById(tollNetworkByIdInput: $tollNetworkByIdInput) {
      id
      name
      createdAt
      updatedAt
    }
  }
`);

export const WILAYA_LIST = gql(`
  query WILAYA_LIST($wilayaListInput: WilayaListInput!) {
    wilayaList(wilayaListInput: $wilayaListInput) {
      id
      name
      code
    }
  }
`);

export const WILAYA_BY_ID = gql(`
  query WILAYA_BY_ID($wilayaByIdInput: WilayaByIdInput!) {
    wilayaById(wilayaByIdInput: $wilayaByIdInput) {
      id
      name
      code
    }
  }
`);

export const GRAPH_TOLL_DISTANCE_LIST_FOR_TOLL = gql(`
  query GRAPH_TOLL_DISTANCE_LIST_FOR_TOLL($graphTollDistanceListForTollInput: GraphTollDistanceListForTollInput!) {
    graphTollDistanceListForToll(graphTollDistanceListForTollInput: $graphTollDistanceListForTollInput) {
      distance
      fromToll {
        id
        name
      }
      toToll {
        id
        name
      }
    }
  }
`);
