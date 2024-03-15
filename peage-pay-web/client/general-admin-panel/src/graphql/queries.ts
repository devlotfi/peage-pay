import { gql } from '../__generated__';

export const HIGHWAY_LIST = gql(`
  query HIGHWAY_LIST($highwayListInput: HighwayListInput!) {
    highwayList(highwayListInput: $highwayListInput) {
      count
      list {
        id
        name
        code
        createdAt
        updatedAt
      }
    }
  }
`);

export const HIGHWAY_BY_ID = gql(`
  query HIGHWAY_BY_ID($highwayByIdInput: HighwayByIdInput!) {
    highwayById(highwayByIdInput: $highwayByIdInput) {
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
      count
      list {
        id
        name
        days
        price
        createdAt
        updatedAt
      }
    }
  }
`);

export const SUBSCRIPTION_BY_ID = gql(`
  query SUBSCRIPTION_BY_ID($subscriptionByIdInput: SubscriptionByIdInput!) {
    subscriptionById(subscriptionByIdInput: $subscriptionByIdInput) {
      id
      name
      days
      price
      createdAt
      updatedAt
    }
  }
`);

export const FULL_TOLL_LIST = gql(`
  query FULL_TOLL_LIST($fullTollListInput: FullTollListInput!) {
    fullTollList(fullTollListInput: $fullTollListInput) {
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

export const TOLL_LIST = gql(`
  query TOLL_LIST($tollListInput: TollListInput!) {
    tollList(tollListInput: $tollListInput) {
      count
      list {
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
      count
      list {
        id
        name
        createdAt
        updatedAt
      }
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
      count
      list {
        id
        name
        code
      }
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

export const GRAPH_TOLL_DISTANCE_LIST_FOR_TOLL_NETWORK = gql(`
  query GRAPH_TOLL_DISTANCE_LIST_FOR_TOLL_NETWORK($graphTollDistanceListForTollInput: GraphTollDistanceListForTollNetworkInput!) {
    graphTollDistanceListForTollNetwork(graphTollDistanceListForTollInput: $graphTollDistanceListForTollInput) {
      distance
      fromToll {
        id
        name
        latitude
        longitude
      }
      toToll {
        id
        name
        latitude
        longitude
      }
    }
  }
`);

export const GRAPH_TOLL_DISTANCE_LIST_FOR_TOLL = gql(`
  query GRAPH_TOLL_DISTANCE_LIST_FOR_TOLL($graphTollDistanceListForTollInput: GraphTollDistanceListForTollInput!) {
    graphTollDistanceListForToll(graphTollDistanceListForTollInput: $graphTollDistanceListForTollInput) {
      count
      list {
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
