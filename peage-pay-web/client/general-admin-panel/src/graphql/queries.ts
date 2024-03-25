import { gql } from "../__generated__";

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
  query HIGHWAY_BY_ID($highwayByIdInput: IdInput!) {
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
  query SUBSCRIPTION_BY_ID($subscriptionByIdInput: IdInput!) {
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
  query FULL_TOLL_LIST($fullTollListInput: IdInput!) {
    fullTollList(fullTollListInput: $fullTollListInput) {
      id
      name
      status
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

export const TOLL_BY_ID = gql(`
  query TOLL_BY_ID($tollByIdInput: IdInput!) {
    tollById(tollByIdInput: $tollByIdInput) {
      id
      name
      status
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
  query TOLL_NETWORK_BY_ID($tollNetworkByIdInput: IdInput!) {
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
  query WILAYA_BY_ID($wilayaByIdInput: IdInput!) {
    wilayaById(wilayaByIdInput: $wilayaByIdInput) {
      id
      name
      code
    }
  }
`);

export const SECTION_LIST_FOR_TOLL_NETWORK = gql(`
  query SECTION_LIST_FOR_TOLL_NETWORK($sectionListForTollNetworkInput: IdInput!) {
    sectionListForTollNetwork(sectionListForTollNetworkInput: $sectionListForTollNetworkInput) {
      distance
      status
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

export const SECTION_LIST_FOR_TOLL = gql(`
  query SECTION_LIST_FOR_TOLL($sectionListForTollInput: SectionListForTollInput!) {
    sectionListForToll(sectionListForTollInput: $sectionListForTollInput) {
      count
      list {
        distance
        status
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

export const SECTION_BY_IDS = gql(`
  query SECTION_BY_IDS($sectionByIdsInput: SectionByIdsInput!) {
    sectionByIds(sectionByIdsInput: $sectionByIdsInput) {
      distance
      status
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

export const DAILY_PRICE_GLOBAL_LIST = gql(`
  query DAILY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {
    dailyPriceGlobalList(priceListInput: $priceListInput) {
      count
      list {
        priceId
        price {
          id
          value
          priority
          startTimestamp
          endTimestamp
          createdAt
          updatedAt
        }
      }
    }
  }
`);

export const WEEKLY_PRICE_GLOBAL_LIST = gql(`
  query WEEKLY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {
    weeklyPriceGlobalList(priceListInput: $priceListInput) {
      count
      list {
        days
        priceId
        price {
          id
          value
          priority
          startTimestamp
          endTimestamp
          createdAt
          updatedAt
        }
      }
    }
  }
`);

export const MONTHLY_PRICE_GLOBAL_LIST = gql(`
  query MONTHLY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {
    monthlyPriceGlobalList(priceListInput: $priceListInput) {
      count
      list {
        startDay
        endDay
        months
        priceId
        price {
          id
          value
          priority
          startTimestamp
          endTimestamp
          createdAt
          updatedAt
        }
      }
    }
  }
`);

export const YEARLY_PRICE_GLOBAL_LIST = gql(`
  query YEARLY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {
    yearlyPriceGlobalList(priceListInput: $priceListInput) {
      count
      list {
        startDate
        endDate
        priceId
        price {
          id
          value
          priority
          startTimestamp
          endTimestamp
          createdAt
          updatedAt
        }
      }
    }
  }
`);

export const CUSTOM_PRICE_GLOBAL_LIST = gql(`
  query CUSTOM_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {
    customPriceGlobalList(priceListInput: $priceListInput) {
      count
      list {
        priceId
        startDate
        endDate
        price {
          id
          value
          priority
          startTimestamp
          endTimestamp
          createdAt
          updatedAt
        }
      }
    }
  }
`);
