import { gql } from "../__generated__";

export const ADD_TOLL_ADMIN_ROLE = gql(`
  mutation ADD_TOLL_ADMIN_ROLE($addTollAdminRoleInput: IdInput!) {
    addTollAdminRole(addTollAdminRoleInput: $addTollAdminRoleInput)
  }
`);

export const REMOVE_TOLL_ADMIN_ROLE = gql(`
  mutation REMOVE_TOLL_ADMIN_ROLE($removeTollAdminRoleInput: IdInput!) {
    removeTollAdminRole(removeTollAdminRoleInput: $removeTollAdminRoleInput)
  }
`);

export const CHANGE_TOLL_ADMIN_TOLL = gql(`
  mutation CHANGE_TOLL_ADMIN_TOLL($changeTollAdminTollInput: ChangeTollInput!) {
    changeTollAdminToll(changeTollAdminTollInput: $changeTollAdminTollInput)
  }
`);

export const ADD_GATE_ADMIN_ROLE = gql(`
  mutation ADD_GATE_ADMIN_ROLE($addGateAdminRoleInput: IdInput!) {
    addGateAdminRole(addGateAdminRoleInput: $addGateAdminRoleInput)
  }
`);

export const REMOVE_GATE_ADMIN_ROLE = gql(`
  mutation REMOVE_GATE_ADMIN_ROLE($removeGateAdminRoleInput: IdInput!) {
    removeGateAdminRole(removeGateAdminRoleInput: $removeGateAdminRoleInput)
  }
`);

export const CHANGE_GATE_ADMIN_TOLL = gql(`
  mutation CHANGE_GATE_ADMIN_TOLL($changeGateAdminTollInput: ChangeTollInput!) {
    changeGateAdminToll(changeGateAdminTollInput: $changeGateAdminTollInput)
  }
`);

export const ADD_MODERATOR_ROLE = gql(`
  mutation ADD_MODERATOR_ROLE($addModeratorRoleInput: IdInput!) {
    addModeratorRole(addModeratorRoleInput: $addModeratorRoleInput)
  }
`);

export const REMOVE_MODERATOR_ROLE = gql(`
  mutation REMOVE_MODERATOR_ROLE($removeModeratorRoleInput: IdInput!) {
    removeModeratorRole(removeModeratorRoleInput: $removeModeratorRoleInput)
  }
`);
