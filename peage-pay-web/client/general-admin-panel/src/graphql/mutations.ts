import { gql } from '../__generated__';

export const ADD_HIGHWAY = gql(`
  mutation ADD_HIGHWAY($addHighwayInput: AddHighwayInput!) {
    addHighway(addHighwayInput: $addHighwayInput) {
      id
    }
  }
`);

export const EDIT_HIGHWAY = gql(`
  mutation EDIT_HIGHWAY($editHighwayInput: EditHighwayInput!) {
    editHighway(editHighwayInput: $editHighwayInput) {
      id
    }
  }
`);

export const DELETE_HIGHWAY = gql(`
  mutation DELETE_HIGHWAY($deleteHighwayInput: IdInput!) {
    deleteHighway(deleteHighwayInput: $deleteHighwayInput)
  }
`);

export const ADD_SUBSCRIPTION = gql(`
  mutation ADD_SUBSCRIPTION($addSubscriptionInput: AddSubscriptionInput!) {
    addSubscription(addSubscriptionInput: $addSubscriptionInput) {
      id
    }
  }
`);

export const EDIT_SUBSCRIPTION = gql(`
  mutation EDIT_SUBSCRIPTION($editSubscriptionInput: EditSubscriptionInput!) {
    editSubscription(editSubscriptionInput: $editSubscriptionInput) {
      id
    }
  }
`);

export const DELETE_SUBSCRIPTION = gql(`
  mutation DELETE_SUBSCRIPTION($deleteSubscriptionInput: IdInput!) {
    deleteSubscription(deleteSubscriptionInput: $deleteSubscriptionInput)
  }
`);

export const ADD_TOLL = gql(`
  mutation ADD_TOLL($addTollInput: AddTollInput!) {
    addToll(addTollInput: $addTollInput) {
      id
    }
  }
`);

export const EDIT_TOLL = gql(`
  mutation EDIT_TOLL($editTollInput: EditTollInput!) {
    editToll(editTollInput: $editTollInput) {
      id
    }
  }
`);

export const DELETE_TOLL = gql(`
  mutation DELETE_TOLL($deleteTollInput: IdInput!) {
    deleteToll(deleteTollInput: $deleteTollInput)
  }
`);

export const ADD_TOLL_NETWORK = gql(`
  mutation ADD_TOLL_NETWORK($addTollNetworkInput: AddTollNetworkInput!) {
    addTollNetwork(addTollNetworkInput: $addTollNetworkInput) {
      id
    }
  }
`);

export const EDIT_TOLL_NETWORK = gql(`
  mutation EDIT_TOLL_NETWORK($editTollNetworkInput: EditTollNetworkInput!) {
    editTollNetwork(editTollNetworkInput: $editTollNetworkInput) {
      id
    }
  }
`);

export const DELETE_TOLL_NETWORK = gql(`
  mutation DELETE_TOLL_NETWORK($deleteTollNetworkInput: IdInput!) {
    deleteTollNetwork(deleteTollNetworkInput: $deleteTollNetworkInput)
  }
`);

export const ADD_SECTION = gql(`
  mutation ADD_SECTION($addSectionInput: AddSectionInput!) {
    addSection(addSectionInput: $addSectionInput) {
      fromTollId
      toTollId
    }
  }
`);

export const EDIT_SECTION = gql(`
  mutation EDIT_SECTION($editSectionInput: EditSectionInput!) {
    editSection(editSectionInput: $editSectionInput) {
      fromTollId
      toTollId
    }
  }
`);

export const DELETE_SECTION = gql(`
  mutation DELETE_SECTION($deleteSectionInput: DeleteSectionInput!) {
    deleteSection(deleteSectionInput: $deleteSectionInput)
  }
`);

export const ADD_HUMAN_RESSOURCES_ADMIN_ROLE = gql(`
  mutation ADD_HUMAN_RESSOURCES_ADMIN_ROLE($addHumanRessoucesAdminRoleInput: IdInput!) {
    addHumanRessoucesAdminRole(addHumanRessoucesAdminRoleInput: $addHumanRessoucesAdminRoleInput)
  }
`);

export const REMOVE_HUMAN_RESSOURCES_ADMIN_ROLE = gql(`
  mutation REMOVE_HUMAN_RESSOURCES_ADMIN_ROLE($removeHumanRessoucesAdminRoleInput: IdInput!) {
    removeHumanRessoucesAdminRole(removeHumanRessoucesAdminRoleInput: $removeHumanRessoucesAdminRoleInput)
  }
`);

export const ADD_GLOBAL_PRICE = gql(`
  mutation ADD_GLOBAL_PRICE($addPriceInput: AddGlobalPriceInput!) {
    addGlobalPrice(addPriceInput: $addPriceInput)
  }
`);

export const DELETE_GLOBAL_PRICE = gql(`
  mutation DELETE_GLOBAL_PRICE($deletePriceInput: IdInput!) {
    deleteGlobalPrice(deletePriceInput: $deletePriceInput)
  }
`);

export const GENERATE_TOLL_DISTANCES = gql(`
  mutation GENERATE_TOLL_DISTANCES($generateTollDistancesInput: IdInput!) {
    generateTollDistances(generateTollDistancesInput: $generateTollDistancesInput)
  }
`);

export const EDIT_DEFAULT_PRICE = gql(`
  mutation EDIT_DEFAULT_PRICE($editDefaultPriceInput: EditDefaultPriceInput!) {
    editDefaultPrice(editDefaultPriceInput: $editDefaultPriceInput)
  }
`);
