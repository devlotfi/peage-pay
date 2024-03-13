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
    "\n  mutation ADD_HIGHWAY($addHighwayInput: AddHighwayInput!) {\n    addHighway(addHighwayInput: $addHighwayInput) {\n      id\n      name\n      code\n      createdAt\n      updatedAt\n    }\n  }\n": types.Add_HighwayDocument,
    "\n  mutation EDIT_HIGHWAY($editHighwayInput: EditHighwayInput!) {\n    editHighway(editHighwayInput: $editHighwayInput) {\n      id\n      name\n      code\n      createdAt\n      updatedAt\n    }\n  }\n": types.Edit_HighwayDocument,
    "\n  mutation DELETE_HIGHWAY($deleteHighwayInput: DeleteHighwayInput!) {\n    deleteHighway(deleteHighwayInput: $deleteHighwayInput)\n  }\n": types.Delete_HighwayDocument,
    "\n  mutation ADD_SUBSCRIPTION($addSubscriptionInput: AddSubscriptionInput!) {\n    addSubscription(addSubscriptionInput: $addSubscriptionInput) {\n      id\n      name\n      vehicleType\n      createdAt\n      updatedAt\n    }\n  }\n": types.Add_SubscriptionDocument,
    "\n  mutation EDIT_SUBSCRIPTION($editSubscriptionInput: EditSubscriptionInput!) {\n    editSubscription(editSubscriptionInput: $editSubscriptionInput) {\n      id\n      name\n      vehicleType\n      createdAt\n      updatedAt\n    }\n  }\n": types.Edit_SubscriptionDocument,
    "\n  mutation DELETE_SUBSCRIPTION($deleteSubscriptionInput: DeleteSubscriptionInput!) {\n    deleteSubscription(deleteSubscriptionInput: $deleteSubscriptionInput)\n  }\n": types.Delete_SubscriptionDocument,
    "\n  mutation ADD_TOLL($addTollInput: AddTollInput!) {\n    addToll(addTollInput: $addTollInput) {\n      id\n      name\n      status\n      longitude\n      latitude\n      wilaya {\n        id\n        name\n        code\n      }\n      highway {\n        id\n        name\n        code\n      }\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.Add_TollDocument,
    "\n  mutation EDIT_TOLL($editTollInput: EditTollInput!) {\n    editToll(editTollInput: $editTollInput) {\n      id\n      name\n      status\n      longitude\n      latitude\n      wilaya {\n        id\n        name\n        code\n      }\n      highway {\n        id\n        name\n        code\n      }\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.Edit_TollDocument,
    "\n  mutation DELETE_TOLL($deleteTollInput: DeleteTollInput!) {\n    deleteToll(deleteTollInput: $deleteTollInput)\n  }\n": types.Delete_TollDocument,
    "\n  mutation ADD_TOLL_NETWORK($addTollNetworkInput: AddTollNetworkInput!) {\n    addTollNetwork(addTollNetworkInput: $addTollNetworkInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n": types.Add_Toll_NetworkDocument,
    "\n  mutation EDIT_TOLL_NETWORK($editTollNetworkInput: EditTollNetworkInput!) {\n    editTollNetwork(editTollNetworkInput: $editTollNetworkInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n": types.Edit_Toll_NetworkDocument,
    "\n  mutation DELETE_TOLL_NETWORK($deleteTollNetworkInput: DeleteTollNetworkInput!) {\n    deleteTollNetwork(deleteTollNetworkInput: $deleteTollNetworkInput)\n  }\n": types.Delete_Toll_NetworkDocument,
    "\n  query HIGHWAY_LIST($highwayListInput: HighwayListInput!) {\n    highwayList(highwayListInput: $highwayListInput) {\n      id\n      name\n      code\n      createdAt\n      updatedAt\n    }\n  }\n": types.Highway_ListDocument,
    "\n  query HIGHWAY_BY_ID($highwayByIdInput: HighwayByIdInput!) {\n    highwaybyId(highwayByIdInput: $highwayByIdInput) {\n      code\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n": types.Highway_By_IdDocument,
    "\n  query SUBSCRIPTION_LIST($subscriptionListInput: SubscriptionListInput!) {\n    subscriptionList(subscriptionListInput: $subscriptionListInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n": types.Subscription_ListDocument,
    "\n  query SUBSCRIPTION_BY_ID($subscriptionByIdInput: SubscriptionByIdInput!) {\n    subscriptionById(subscriptionByIdInput: $subscriptionByIdInput) {\n      id\n      name\n      vehicleType\n      createdAt\n      updatedAt\n    }\n  }\n": types.Subscription_By_IdDocument,
    "\n  query TOLL_LIST($tollListInput: TollListInput!) {\n    tollList(tollListInput: $tollListInput) {\n      id\n      name\n      status\n      longitude\n      latitude\n      wilaya {\n        id\n        name\n        code\n      }\n      highway {\n        id\n        name\n        code\n      }\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.Toll_ListDocument,
    "\n  query TOLL_BY_ID($tollByIdInput: TollByIdInput!) {\n    tollById(tollByIdInput: $tollByIdInput) {\n      id\n      name\n      status\n      longitude\n      latitude\n      wilaya {\n        id\n        name\n        code\n      }\n      highway {\n        id\n        name\n        code\n      }\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.Toll_By_IdDocument,
    "\n  query TOLL_NETWORK_LIST($tollNetworkListInput: TollNetworkListInput!) {\n    tollNetworkList(tollNetworkListInput: $tollNetworkListInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n": types.Toll_Network_ListDocument,
    "\n  query TOLL_NETWORK_BY_ID($tollNetworkByIdInput: TollNetworkByIdInput!) {\n    tollNetworkById(tollNetworkByIdInput: $tollNetworkByIdInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n": types.Toll_Network_By_IdDocument,
    "\n  query WILAYA_LIST($wilayaListInput: WilayaListInput!) {\n    wilayaList(wilayaListInput: $wilayaListInput) {\n      id\n      name\n      code\n    }\n  }\n": types.Wilaya_ListDocument,
    "\n  query WILAYA_BY_ID($wilayaByIdInput: WilayaByIdInput!) {\n    wilayaById(wilayaByIdInput: $wilayaByIdInput) {\n      id\n      name\n      code\n    }\n  }\n": types.Wilaya_By_IdDocument,
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
export function gql(source: "\n  mutation ADD_HIGHWAY($addHighwayInput: AddHighwayInput!) {\n    addHighway(addHighwayInput: $addHighwayInput) {\n      id\n      name\n      code\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation ADD_HIGHWAY($addHighwayInput: AddHighwayInput!) {\n    addHighway(addHighwayInput: $addHighwayInput) {\n      id\n      name\n      code\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_HIGHWAY($editHighwayInput: EditHighwayInput!) {\n    editHighway(editHighwayInput: $editHighwayInput) {\n      id\n      name\n      code\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation EDIT_HIGHWAY($editHighwayInput: EditHighwayInput!) {\n    editHighway(editHighwayInput: $editHighwayInput) {\n      id\n      name\n      code\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_HIGHWAY($deleteHighwayInput: DeleteHighwayInput!) {\n    deleteHighway(deleteHighwayInput: $deleteHighwayInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_HIGHWAY($deleteHighwayInput: DeleteHighwayInput!) {\n    deleteHighway(deleteHighwayInput: $deleteHighwayInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_SUBSCRIPTION($addSubscriptionInput: AddSubscriptionInput!) {\n    addSubscription(addSubscriptionInput: $addSubscriptionInput) {\n      id\n      name\n      vehicleType\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation ADD_SUBSCRIPTION($addSubscriptionInput: AddSubscriptionInput!) {\n    addSubscription(addSubscriptionInput: $addSubscriptionInput) {\n      id\n      name\n      vehicleType\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_SUBSCRIPTION($editSubscriptionInput: EditSubscriptionInput!) {\n    editSubscription(editSubscriptionInput: $editSubscriptionInput) {\n      id\n      name\n      vehicleType\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation EDIT_SUBSCRIPTION($editSubscriptionInput: EditSubscriptionInput!) {\n    editSubscription(editSubscriptionInput: $editSubscriptionInput) {\n      id\n      name\n      vehicleType\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_SUBSCRIPTION($deleteSubscriptionInput: DeleteSubscriptionInput!) {\n    deleteSubscription(deleteSubscriptionInput: $deleteSubscriptionInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_SUBSCRIPTION($deleteSubscriptionInput: DeleteSubscriptionInput!) {\n    deleteSubscription(deleteSubscriptionInput: $deleteSubscriptionInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_TOLL($addTollInput: AddTollInput!) {\n    addToll(addTollInput: $addTollInput) {\n      id\n      name\n      status\n      longitude\n      latitude\n      wilaya {\n        id\n        name\n        code\n      }\n      highway {\n        id\n        name\n        code\n      }\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation ADD_TOLL($addTollInput: AddTollInput!) {\n    addToll(addTollInput: $addTollInput) {\n      id\n      name\n      status\n      longitude\n      latitude\n      wilaya {\n        id\n        name\n        code\n      }\n      highway {\n        id\n        name\n        code\n      }\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_TOLL($editTollInput: EditTollInput!) {\n    editToll(editTollInput: $editTollInput) {\n      id\n      name\n      status\n      longitude\n      latitude\n      wilaya {\n        id\n        name\n        code\n      }\n      highway {\n        id\n        name\n        code\n      }\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation EDIT_TOLL($editTollInput: EditTollInput!) {\n    editToll(editTollInput: $editTollInput) {\n      id\n      name\n      status\n      longitude\n      latitude\n      wilaya {\n        id\n        name\n        code\n      }\n      highway {\n        id\n        name\n        code\n      }\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_TOLL($deleteTollInput: DeleteTollInput!) {\n    deleteToll(deleteTollInput: $deleteTollInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_TOLL($deleteTollInput: DeleteTollInput!) {\n    deleteToll(deleteTollInput: $deleteTollInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_TOLL_NETWORK($addTollNetworkInput: AddTollNetworkInput!) {\n    addTollNetwork(addTollNetworkInput: $addTollNetworkInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation ADD_TOLL_NETWORK($addTollNetworkInput: AddTollNetworkInput!) {\n    addTollNetwork(addTollNetworkInput: $addTollNetworkInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_TOLL_NETWORK($editTollNetworkInput: EditTollNetworkInput!) {\n    editTollNetwork(editTollNetworkInput: $editTollNetworkInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation EDIT_TOLL_NETWORK($editTollNetworkInput: EditTollNetworkInput!) {\n    editTollNetwork(editTollNetworkInput: $editTollNetworkInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_TOLL_NETWORK($deleteTollNetworkInput: DeleteTollNetworkInput!) {\n    deleteTollNetwork(deleteTollNetworkInput: $deleteTollNetworkInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_TOLL_NETWORK($deleteTollNetworkInput: DeleteTollNetworkInput!) {\n    deleteTollNetwork(deleteTollNetworkInput: $deleteTollNetworkInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query HIGHWAY_LIST($highwayListInput: HighwayListInput!) {\n    highwayList(highwayListInput: $highwayListInput) {\n      id\n      name\n      code\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query HIGHWAY_LIST($highwayListInput: HighwayListInput!) {\n    highwayList(highwayListInput: $highwayListInput) {\n      id\n      name\n      code\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query HIGHWAY_BY_ID($highwayByIdInput: HighwayByIdInput!) {\n    highwaybyId(highwayByIdInput: $highwayByIdInput) {\n      code\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query HIGHWAY_BY_ID($highwayByIdInput: HighwayByIdInput!) {\n    highwaybyId(highwayByIdInput: $highwayByIdInput) {\n      code\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SUBSCRIPTION_LIST($subscriptionListInput: SubscriptionListInput!) {\n    subscriptionList(subscriptionListInput: $subscriptionListInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query SUBSCRIPTION_LIST($subscriptionListInput: SubscriptionListInput!) {\n    subscriptionList(subscriptionListInput: $subscriptionListInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SUBSCRIPTION_BY_ID($subscriptionByIdInput: SubscriptionByIdInput!) {\n    subscriptionById(subscriptionByIdInput: $subscriptionByIdInput) {\n      id\n      name\n      vehicleType\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query SUBSCRIPTION_BY_ID($subscriptionByIdInput: SubscriptionByIdInput!) {\n    subscriptionById(subscriptionByIdInput: $subscriptionByIdInput) {\n      id\n      name\n      vehicleType\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_LIST($tollListInput: TollListInput!) {\n    tollList(tollListInput: $tollListInput) {\n      id\n      name\n      status\n      longitude\n      latitude\n      wilaya {\n        id\n        name\n        code\n      }\n      highway {\n        id\n        name\n        code\n      }\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query TOLL_LIST($tollListInput: TollListInput!) {\n    tollList(tollListInput: $tollListInput) {\n      id\n      name\n      status\n      longitude\n      latitude\n      wilaya {\n        id\n        name\n        code\n      }\n      highway {\n        id\n        name\n        code\n      }\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_BY_ID($tollByIdInput: TollByIdInput!) {\n    tollById(tollByIdInput: $tollByIdInput) {\n      id\n      name\n      status\n      longitude\n      latitude\n      wilaya {\n        id\n        name\n        code\n      }\n      highway {\n        id\n        name\n        code\n      }\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query TOLL_BY_ID($tollByIdInput: TollByIdInput!) {\n    tollById(tollByIdInput: $tollByIdInput) {\n      id\n      name\n      status\n      longitude\n      latitude\n      wilaya {\n        id\n        name\n        code\n      }\n      highway {\n        id\n        name\n        code\n      }\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_NETWORK_LIST($tollNetworkListInput: TollNetworkListInput!) {\n    tollNetworkList(tollNetworkListInput: $tollNetworkListInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query TOLL_NETWORK_LIST($tollNetworkListInput: TollNetworkListInput!) {\n    tollNetworkList(tollNetworkListInput: $tollNetworkListInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_NETWORK_BY_ID($tollNetworkByIdInput: TollNetworkByIdInput!) {\n    tollNetworkById(tollNetworkByIdInput: $tollNetworkByIdInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query TOLL_NETWORK_BY_ID($tollNetworkByIdInput: TollNetworkByIdInput!) {\n    tollNetworkById(tollNetworkByIdInput: $tollNetworkByIdInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query WILAYA_LIST($wilayaListInput: WilayaListInput!) {\n    wilayaList(wilayaListInput: $wilayaListInput) {\n      id\n      name\n      code\n    }\n  }\n"): (typeof documents)["\n  query WILAYA_LIST($wilayaListInput: WilayaListInput!) {\n    wilayaList(wilayaListInput: $wilayaListInput) {\n      id\n      name\n      code\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query WILAYA_BY_ID($wilayaByIdInput: WilayaByIdInput!) {\n    wilayaById(wilayaByIdInput: $wilayaByIdInput) {\n      id\n      name\n      code\n    }\n  }\n"): (typeof documents)["\n  query WILAYA_BY_ID($wilayaByIdInput: WilayaByIdInput!) {\n    wilayaById(wilayaByIdInput: $wilayaByIdInput) {\n      id\n      name\n      code\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;