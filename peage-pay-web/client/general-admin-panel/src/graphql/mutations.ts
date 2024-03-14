import { gql } from '../__generated__';

export const ADD_HIGHWAY = gql(`
  mutation ADD_HIGHWAY($addHighwayInput: AddHighwayInput!) {
    addHighway(addHighwayInput: $addHighwayInput) {
      id
      name
      code
      createdAt
      updatedAt
    }
  }
`);

export const EDIT_HIGHWAY = gql(`
  mutation EDIT_HIGHWAY($editHighwayInput: EditHighwayInput!) {
    editHighway(editHighwayInput: $editHighwayInput) {
      id
      name
      code
      createdAt
      updatedAt
    }
  }
`);

export const DELETE_HIGHWAY = gql(`
  mutation DELETE_HIGHWAY($deleteHighwayInput: DeleteHighwayInput!) {
    deleteHighway(deleteHighwayInput: $deleteHighwayInput)
  }
`);

export const ADD_SUBSCRIPTION = gql(`
  mutation ADD_SUBSCRIPTION($addSubscriptionInput: AddSubscriptionInput!) {
    addSubscription(addSubscriptionInput: $addSubscriptionInput) {
      id
      name
      vehicleType
      createdAt
      updatedAt
    }
  }
`);

export const EDIT_SUBSCRIPTION = gql(`
  mutation EDIT_SUBSCRIPTION($editSubscriptionInput: EditSubscriptionInput!) {
    editSubscription(editSubscriptionInput: $editSubscriptionInput) {
      id
      name
      vehicleType
      createdAt
      updatedAt
    }
  }
`);

export const DELETE_SUBSCRIPTION = gql(`
  mutation DELETE_SUBSCRIPTION($deleteSubscriptionInput: DeleteSubscriptionInput!) {
    deleteSubscription(deleteSubscriptionInput: $deleteSubscriptionInput)
  }
`);

export const ADD_TOLL = gql(`
  mutation ADD_TOLL($addTollInput: AddTollInput!) {
    addToll(addTollInput: $addTollInput) {
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

export const EDIT_TOLL = gql(`
  mutation EDIT_TOLL($editTollInput: EditTollInput!) {
    editToll(editTollInput: $editTollInput) {
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

export const DELETE_TOLL = gql(`
  mutation DELETE_TOLL($deleteTollInput: DeleteTollInput!) {
    deleteToll(deleteTollInput: $deleteTollInput)
  }
`);

export const ADD_TOLL_NETWORK = gql(`
  mutation ADD_TOLL_NETWORK($addTollNetworkInput: AddTollNetworkInput!) {
    addTollNetwork(addTollNetworkInput: $addTollNetworkInput) {
      id
      name
      createdAt
      updatedAt
    }
  }
`);

export const EDIT_TOLL_NETWORK = gql(`
  mutation EDIT_TOLL_NETWORK($editTollNetworkInput: EditTollNetworkInput!) {
    editTollNetwork(editTollNetworkInput: $editTollNetworkInput) {
      id
      name
      createdAt
      updatedAt
    }
  }
`);

export const DELETE_TOLL_NETWORK = gql(`
  mutation DELETE_TOLL_NETWORK($deleteTollNetworkInput: DeleteTollNetworkInput!) {
    deleteTollNetwork(deleteTollNetworkInput: $deleteTollNetworkInput)
  }
`);

export const ADD_GRAPH_TOLL_DISTANCE = gql(`
  mutation ADD_GRAPH_TOLL_DISTANCE($addGraphTollDistanceInput: AddGraphTollDistanceInput!) {
    addGraphTollDistance(addGraphTollDistanceInput: $addGraphTollDistanceInput) {
      fromTollId
      toTollId
      distance
    }
  }
`);

export const DELETE_GRAPH_TOLL_DISTANCE = gql(`
  mutation DELETE_GRAPH_TOLL_DISTANCE($deleteGraphTollDistanceInput: DeleteGraphTollDistanceInput!) {
    deleteGraphTollDistance(deleteGraphTollDistanceInput: $deleteGraphTollDistanceInput)
  }
`);

export const ADD_HUMAN_RESSOURCES_ADMIN_ROLE = gql(`
  mutation ADD_HUMAN_RESSOURCES_ADMIN_ROLE($addHumanRessoucesAdminRoleInput: AddHumanRessourcesAdminRoleInput!) {
    addHumanRessoucesAdminRole(addHumanRessoucesAdminRoleInput: $addHumanRessoucesAdminRoleInput)
  }
`);

export const REMOVE_HUMAN_RESSOURCES_ADMIN_ROLE = gql(`
  mutation REMOVE_HUMAN_RESSOURCES_ADMIN_ROLE($removeHumanRessoucesAdminRoleInput: RemoveHumanRessourcesAdminRoleInput!) {
    removeHumanRessoucesAdminRole(removeHumanRessoucesAdminRoleInput: $removeHumanRessoucesAdminRoleInput)
  }
`);
