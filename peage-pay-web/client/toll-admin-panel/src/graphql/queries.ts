import { gql } from '../__generated__';

export const TOLL_BY_ID = gql(`
  query TOLL_BY_ID($tollByIdInput: IdInput!) {
    tollById(tollByIdInput: $tollByIdInput) {
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
`);

export const TOLL_ADMIN_INFO = gql(`
  query TOLL_ADMIN_INFO {
    tollAdminInfo {
      tollId
      baseUserId
      toll {
        id
        name
        latitude
        longitude
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
        variant
        direction
        tollId
        createdAt
        updatedAt
      }
    }
  }
`);

export const AUTOMATIC_GATE_BY_ID = gql(`
  query AUTOMATIC_GATE_BY_ID($automaticGateByIdInput: IdInput!) {
    automaticGateById(automaticGateByIdInput: $automaticGateByIdInput) {
      id
      name
      variant
      direction
      tollId
      createdAt
      updatedAt
    }
  }
`);

export const DAILY_PRICE_LOCAL_LIST = gql(`
  query DAILY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {
    dailyPriceLocalList(priceListInput: $priceListInput) {
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
          tollPrice {
            direction
          }
        }
      }
    }
  }
`);

export const WEEKLY_PRICE_LOCAL_LIST = gql(`
  query WEEKLY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {
    weeklyPriceLocalList(priceListInput: $priceListInput) {
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
          tollPrice {
            direction
          }
        }
      }
    }
  }
`);

export const MONTHLY_PRICE_LOCAL_LIST = gql(`
  query MONTHLY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {
    monthlyPriceLocalList(priceListInput: $priceListInput) {
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
          tollPrice {
            direction
          }
        }
      }
    }
  }
`);

export const YEARLY_PRICE_LOCAL_LIST = gql(`
  query YEARLY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {
    yearlyPriceLocalList(priceListInput: $priceListInput) {
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
          tollPrice {
            direction
          }
        }
      }
    }
  }
`);

export const CUSTOM_PRICE_LOCAL_LIST = gql(`
  query CUSTOM_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {
    customPriceLocalList(priceListInput: $priceListInput) {
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
          tollPrice {
            direction
          }
        }
      }
    }
  }
`);
