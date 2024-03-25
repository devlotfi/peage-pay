import { gql } from "../__generated__";

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

export const TOLL_ADMIN_LIST = gql(`
  query TOLL_ADMIN_LIST($tollAdminListInput: TollAdminListInput!) {
    tollAdminList(tollAdminListInput: $tollAdminListInput) {
      count
      list {
        toll {
          id
          name
        }
        baseUserId
        baseUser {
          id
          firstName
          lastName
          createdAt
          updatedAt
        }
      }
    }
  }
`);

export const GATE_ADMIN_LIST = gql(`
  query GATE_ADMIN_LIST($gateAdminListInput: GateAdminListInput!) {
    gateAdminList(gateAdminListInput: $gateAdminListInput) {
      count
      list {
        toll {
          id
          name
        }
        baseUserId
        baseUser {
          id
          firstName
          lastName
          createdAt
          updatedAt
        }
      }
    }
  }
`);

export const MODERATOR_LIST = gql(`
  query MODERATOR_LIST($moderatorListInput: ModeratorListInput!) {
    moderatorList(moderatorListInput: $moderatorListInput) {
      count
      list {
        baseUserId
        baseUser {
          id
          firstName
          lastName
          createdAt
          updatedAt
        }
      }
    }
  }
`);
