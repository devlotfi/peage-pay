/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation ADD_TOLL_ADMIN_ROLE($addTollAdminRoleInput: IdInput!) {\n    addTollAdminRole(addTollAdminRoleInput: $addTollAdminRoleInput)\n  }\n": types.Add_Toll_Admin_RoleDocument,
    "\n  mutation REMOVE_TOLL_ADMIN_ROLE($removeTollAdminRoleInput: IdInput!) {\n    removeTollAdminRole(removeTollAdminRoleInput: $removeTollAdminRoleInput)\n  }\n": types.Remove_Toll_Admin_RoleDocument,
    "\n  mutation CHANGE_TOLL_ADMIN_TOLL($changeTollAdminTollInput: ChangeTollInput!) {\n    changeTollAdminToll(changeTollAdminTollInput: $changeTollAdminTollInput)\n  }\n": types.Change_Toll_Admin_TollDocument,
    "\n  mutation ADD_GATE_ADMIN_ROLE($addGateAdminRoleInput: IdInput!) {\n    addGateAdminRole(addGateAdminRoleInput: $addGateAdminRoleInput)\n  }\n": types.Add_Gate_Admin_RoleDocument,
    "\n  mutation REMOVE_GATE_ADMIN_ROLE($removeGateAdminRoleInput: IdInput!) {\n    removeGateAdminRole(removeGateAdminRoleInput: $removeGateAdminRoleInput)\n  }\n": types.Remove_Gate_Admin_RoleDocument,
    "\n  mutation CHANGE_GATE_ADMIN_TOLL($changeGateAdminTollInput: ChangeTollInput!) {\n    changeGateAdminToll(changeGateAdminTollInput: $changeGateAdminTollInput)\n  }\n": types.Change_Gate_Admin_TollDocument,
    "\n  mutation ADD_MODERATOR_ROLE($addModeratorRoleInput: IdInput!) {\n    addModeratorRole(addModeratorRoleInput: $addModeratorRoleInput)\n  }\n": types.Add_Moderator_RoleDocument,
    "\n  mutation REMOVE_MODERATOR_ROLE($removeModeratorRoleInput: IdInput!) {\n    removeModeratorRole(removeModeratorRoleInput: $removeModeratorRoleInput)\n  }\n": types.Remove_Moderator_RoleDocument,
    "\n  query BASE_USER_LIST($baseUserListInput: BaseUserListInput!) {\n    baseUserList(baseUserListInput: $baseUserListInput) {\n      count\n      list {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n        roles\n      }\n    }\n  }\n": types.Base_User_ListDocument,
    "\n  query TOLL_ADMIN_LIST($tollAdminListInput: TollAdminListInput!) {\n    tollAdminList(tollAdminListInput: $tollAdminListInput) {\n      count\n      list {\n        toll {\n          id\n          name\n        }\n        baseUserId\n        baseUser {\n          id\n          firstName\n          lastName\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n": types.Toll_Admin_ListDocument,
    "\n  query TOLL_ADMIN_BY_ID($tollAdminByIdInput: IdInput!) {\n    tollAdminById(tollAdminByIdInput: $tollAdminByIdInput) {\n      toll {\n        id\n        name\n      }\n      baseUserId\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.Toll_Admin_By_IdDocument,
    "\n  query GATE_ADMIN_LIST($gateAdminListInput: GateAdminListInput!) {\n    gateAdminList(gateAdminListInput: $gateAdminListInput) {\n      count\n      list {\n        toll {\n          id\n          name\n        }\n        baseUserId\n        baseUser {\n          id\n          firstName\n          lastName\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n": types.Gate_Admin_ListDocument,
    "\n  query GATE_ADMIN_BY_ID($gateAdminByIdInput: IdInput!) {\n    gateAdminById(gateAdminByIdInput: $gateAdminByIdInput) {\n      toll {\n        id\n        name\n      }\n      baseUserId\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.Gate_Admin_By_IdDocument,
    "\n  query MODERATOR_LIST($moderatorListInput: ModeratorListInput!) {\n    moderatorList(moderatorListInput: $moderatorListInput) {\n      count\n      list {\n        baseUserId\n        baseUser {\n          id\n          firstName\n          lastName\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n": types.Moderator_ListDocument,
    "\n  query TOLL_LIST($tollListInput: TollListInput!) {\n    tollList(tollListInput: $tollListInput) {\n      count\n      list {\n        id\n        name\n        status\n        longitude\n        latitude\n        wilayaId\n        wilaya {\n          id\n          name\n          code\n        }\n        highwayId\n        highway {\n          id\n          name\n          code\n        }\n        tollNetworkId\n        tollNetwork {\n          id\n          name\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.Toll_ListDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_TOLL_ADMIN_ROLE($addTollAdminRoleInput: IdInput!) {\n    addTollAdminRole(addTollAdminRoleInput: $addTollAdminRoleInput)\n  }\n"): (typeof documents)["\n  mutation ADD_TOLL_ADMIN_ROLE($addTollAdminRoleInput: IdInput!) {\n    addTollAdminRole(addTollAdminRoleInput: $addTollAdminRoleInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation REMOVE_TOLL_ADMIN_ROLE($removeTollAdminRoleInput: IdInput!) {\n    removeTollAdminRole(removeTollAdminRoleInput: $removeTollAdminRoleInput)\n  }\n"): (typeof documents)["\n  mutation REMOVE_TOLL_ADMIN_ROLE($removeTollAdminRoleInput: IdInput!) {\n    removeTollAdminRole(removeTollAdminRoleInput: $removeTollAdminRoleInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CHANGE_TOLL_ADMIN_TOLL($changeTollAdminTollInput: ChangeTollInput!) {\n    changeTollAdminToll(changeTollAdminTollInput: $changeTollAdminTollInput)\n  }\n"): (typeof documents)["\n  mutation CHANGE_TOLL_ADMIN_TOLL($changeTollAdminTollInput: ChangeTollInput!) {\n    changeTollAdminToll(changeTollAdminTollInput: $changeTollAdminTollInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_GATE_ADMIN_ROLE($addGateAdminRoleInput: IdInput!) {\n    addGateAdminRole(addGateAdminRoleInput: $addGateAdminRoleInput)\n  }\n"): (typeof documents)["\n  mutation ADD_GATE_ADMIN_ROLE($addGateAdminRoleInput: IdInput!) {\n    addGateAdminRole(addGateAdminRoleInput: $addGateAdminRoleInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation REMOVE_GATE_ADMIN_ROLE($removeGateAdminRoleInput: IdInput!) {\n    removeGateAdminRole(removeGateAdminRoleInput: $removeGateAdminRoleInput)\n  }\n"): (typeof documents)["\n  mutation REMOVE_GATE_ADMIN_ROLE($removeGateAdminRoleInput: IdInput!) {\n    removeGateAdminRole(removeGateAdminRoleInput: $removeGateAdminRoleInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CHANGE_GATE_ADMIN_TOLL($changeGateAdminTollInput: ChangeTollInput!) {\n    changeGateAdminToll(changeGateAdminTollInput: $changeGateAdminTollInput)\n  }\n"): (typeof documents)["\n  mutation CHANGE_GATE_ADMIN_TOLL($changeGateAdminTollInput: ChangeTollInput!) {\n    changeGateAdminToll(changeGateAdminTollInput: $changeGateAdminTollInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_MODERATOR_ROLE($addModeratorRoleInput: IdInput!) {\n    addModeratorRole(addModeratorRoleInput: $addModeratorRoleInput)\n  }\n"): (typeof documents)["\n  mutation ADD_MODERATOR_ROLE($addModeratorRoleInput: IdInput!) {\n    addModeratorRole(addModeratorRoleInput: $addModeratorRoleInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation REMOVE_MODERATOR_ROLE($removeModeratorRoleInput: IdInput!) {\n    removeModeratorRole(removeModeratorRoleInput: $removeModeratorRoleInput)\n  }\n"): (typeof documents)["\n  mutation REMOVE_MODERATOR_ROLE($removeModeratorRoleInput: IdInput!) {\n    removeModeratorRole(removeModeratorRoleInput: $removeModeratorRoleInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BASE_USER_LIST($baseUserListInput: BaseUserListInput!) {\n    baseUserList(baseUserListInput: $baseUserListInput) {\n      count\n      list {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n        roles\n      }\n    }\n  }\n"): (typeof documents)["\n  query BASE_USER_LIST($baseUserListInput: BaseUserListInput!) {\n    baseUserList(baseUserListInput: $baseUserListInput) {\n      count\n      list {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n        roles\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_ADMIN_LIST($tollAdminListInput: TollAdminListInput!) {\n    tollAdminList(tollAdminListInput: $tollAdminListInput) {\n      count\n      list {\n        toll {\n          id\n          name\n        }\n        baseUserId\n        baseUser {\n          id\n          firstName\n          lastName\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query TOLL_ADMIN_LIST($tollAdminListInput: TollAdminListInput!) {\n    tollAdminList(tollAdminListInput: $tollAdminListInput) {\n      count\n      list {\n        toll {\n          id\n          name\n        }\n        baseUserId\n        baseUser {\n          id\n          firstName\n          lastName\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_ADMIN_BY_ID($tollAdminByIdInput: IdInput!) {\n    tollAdminById(tollAdminByIdInput: $tollAdminByIdInput) {\n      toll {\n        id\n        name\n      }\n      baseUserId\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query TOLL_ADMIN_BY_ID($tollAdminByIdInput: IdInput!) {\n    tollAdminById(tollAdminByIdInput: $tollAdminByIdInput) {\n      toll {\n        id\n        name\n      }\n      baseUserId\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GATE_ADMIN_LIST($gateAdminListInput: GateAdminListInput!) {\n    gateAdminList(gateAdminListInput: $gateAdminListInput) {\n      count\n      list {\n        toll {\n          id\n          name\n        }\n        baseUserId\n        baseUser {\n          id\n          firstName\n          lastName\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GATE_ADMIN_LIST($gateAdminListInput: GateAdminListInput!) {\n    gateAdminList(gateAdminListInput: $gateAdminListInput) {\n      count\n      list {\n        toll {\n          id\n          name\n        }\n        baseUserId\n        baseUser {\n          id\n          firstName\n          lastName\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GATE_ADMIN_BY_ID($gateAdminByIdInput: IdInput!) {\n    gateAdminById(gateAdminByIdInput: $gateAdminByIdInput) {\n      toll {\n        id\n        name\n      }\n      baseUserId\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GATE_ADMIN_BY_ID($gateAdminByIdInput: IdInput!) {\n    gateAdminById(gateAdminByIdInput: $gateAdminByIdInput) {\n      toll {\n        id\n        name\n      }\n      baseUserId\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MODERATOR_LIST($moderatorListInput: ModeratorListInput!) {\n    moderatorList(moderatorListInput: $moderatorListInput) {\n      count\n      list {\n        baseUserId\n        baseUser {\n          id\n          firstName\n          lastName\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MODERATOR_LIST($moderatorListInput: ModeratorListInput!) {\n    moderatorList(moderatorListInput: $moderatorListInput) {\n      count\n      list {\n        baseUserId\n        baseUser {\n          id\n          firstName\n          lastName\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_LIST($tollListInput: TollListInput!) {\n    tollList(tollListInput: $tollListInput) {\n      count\n      list {\n        id\n        name\n        status\n        longitude\n        latitude\n        wilayaId\n        wilaya {\n          id\n          name\n          code\n        }\n        highwayId\n        highway {\n          id\n          name\n          code\n        }\n        tollNetworkId\n        tollNetwork {\n          id\n          name\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query TOLL_LIST($tollListInput: TollListInput!) {\n    tollList(tollListInput: $tollListInput) {\n      count\n      list {\n        id\n        name\n        status\n        longitude\n        latitude\n        wilayaId\n        wilaya {\n          id\n          name\n          code\n        }\n        highwayId\n        highway {\n          id\n          name\n          code\n        }\n        tollNetworkId\n        tollNetwork {\n          id\n          name\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;