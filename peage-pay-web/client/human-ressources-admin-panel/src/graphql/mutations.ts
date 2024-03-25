import { gql } from "../__generated__";

export const ADD_TOLL_ADMIN_ROLE = gql(`
  mutation ADD_TOLL_ADMIN_ROLE($changeTollInput: ChangeRoleInput!) {
    addTollAdminRole(changeTollInput: $changeTollInput)
  }
`);

export const REMOVE_TOLL_ADMIN_ROLE = gql(`
  mutation REMOVE_TOLL_ADMIN_ROLE($changeTollInput: ChangeRoleInput!) {
    removeTollAdminRole(changeTollInput: $changeTollInput)
  }
`);

export const CHANGE_TOLL_ADMIN_TOLL = gql(`
  mutation CHANGE_TOLL_ADMIN_TOLL($changeTollInput: ChangeTollInput!) {
    changeTollAdminToll(changeTollInput: $changeTollInput)
  }
`);

export const ADD_GATE_ADMIN_ROLE = gql(`
  mutation ADD_GATE_ADMIN_ROLE($changeTollInput: ChangeRoleInput!) {
    addGateAdminRole(changeTollInput: $changeTollInput)
  }
`);

export const REMOVE_GATE_ADMIN_ROLE = gql(`
  mutation REMOVE_GATE_ADMIN_ROLE($changeTollInput: ChangeRoleInput!) {
    removeGateAdminRole(changeTollInput: $changeTollInput)
  }
`);

export const CHANGE_GATE_ADMIN_TOLL = gql(`
  mutation CHANGE_GATE_ADMIN_TOLL($changeTollInput: ChangeTollInput!) {
    changeGateAdminToll(changeTollInput: $changeTollInput)
  }
`);

export const ADD_MODERATOR_ROLE = gql(`
  mutation ADD_MODERATOR_ROLE($changeTollInput: ChangeRoleInput!) {
    addModeratorRole(changeTollInput: $changeTollInput)
  }
`);

export const REMOVE_MODERATOR_ROLE = gql(`
  mutation REMOVE_MODERATOR_ROLE($changeTollInput: ChangeRoleInput!) {
    removeModeratorRole(changeTollInput: $changeTollInput)
  }
`);
