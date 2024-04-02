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
    "\n  mutation ADD_LOCAL_PRICE($addPriceInput: AddLocalPriceInput!) {\n    addLocalPrice(addPriceInput: $addPriceInput)\n  }\n": types.Add_Local_PriceDocument,
    "\n  mutation DELETE_LOCAL_PRICE($deletePriceInput: IdInput!) {\n    deleteLocalPrice(deletePriceInput: $deletePriceInput)\n  }\n": types.Delete_Local_PriceDocument,
    "\n  mutation CHANGE_TOLL_STATUS($changeTollStatusInput: ChangeTollStatusInput!) {\n    changeTollStatus(changeTollStatusInput: $changeTollStatusInput)\n  }\n": types.Change_Toll_StatusDocument,
    "\n  mutation ADD_AUTOMATIC_GATE($addAutomaticGateInput: AddAutomaticGateInput!) {\n    addAutomaticGate(addAutomaticGateInput: $addAutomaticGateInput) {\n      id\n      name\n      tollId\n      createdAt\n      updatedAt\n    }\n  }\n": types.Add_Automatic_GateDocument,
    "\n  mutation EDIT_AUTOMATIC_GATE($editAutomaticGateInput: EditAutomaticGateInput!) {\n    editAutomaticGate(editAutomaticGateInput: $editAutomaticGateInput) {\n      id\n      name\n      tollId\n      createdAt\n      updatedAt\n    }\n  }\n": types.Edit_Automatic_GateDocument,
    "\n  mutation DELETE_AUTOMATIC_GATE($deleteAutomaticGateInput: IdInput!) {\n    deleteAutomaticGate(deleteAutomaticGateInput: $deleteAutomaticGateInput)\n  }\n": types.Delete_Automatic_GateDocument,
    "\n  query TOLL_BY_ID($tollByIdInput: IdInput!) {\n    tollById(tollByIdInput: $tollByIdInput) {\n      id\n      name\n      inboundStatus\n      outboundStatus\n      longitude\n      latitude\n      wilayaId\n      wilaya {\n        id\n        name\n        code\n      }\n      highwayId\n      highway {\n        id\n        name\n        code\n      }\n      tollNetworkId\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.Toll_By_IdDocument,
    "\n  query TOLL_ADMIN_INFO {\n    tollAdminInfo {\n      tollId\n      baseUserId\n      toll {\n        id\n        name\n        inboundStatus\n        outboundStatus\n        latitude\n        longitude\n        wilaya {\n          id\n          name\n          code\n        }\n        highway {\n          id\n          name\n          code\n        }\n        tollNetwork {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.Toll_Admin_InfoDocument,
    "\n  query AUTOMATIC_GATE_LIST($automaticGateListInput: AutomaticGateListInput!) {\n    automaticGateList(automaticGateListInput: $automaticGateListInput) {\n      count\n      list {\n        id\n        name\n        tollId\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.Automatic_Gate_ListDocument,
    "\n  query AUTOMATIC_GATE_BY_ID($automaticGateByIdInput: IdInput!) {\n    automaticGateById(automaticGateByIdInput: $automaticGateByIdInput) {\n      id\n      name\n      tollId\n      createdAt\n      updatedAt\n    }\n  }\n": types.Automatic_Gate_By_IdDocument,
    "\n  query DAILY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    dailyPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n": types.Daily_Price_Local_ListDocument,
    "\n  query WEEKLY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    weeklyPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        days\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n": types.Weekly_Price_Local_ListDocument,
    "\n  query MONTHLY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    monthlyPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        startDay\n        endDay\n        months\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n": types.Monthly_Price_Local_ListDocument,
    "\n  query YEARLY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    yearlyPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        startDate\n        endDate\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n": types.Yearly_Price_Local_ListDocument,
    "\n  query CUSTOM_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    customPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        priceId\n        startDate\n        endDate\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n": types.Custom_Price_Local_ListDocument,
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
export function gql(source: "\n  mutation ADD_LOCAL_PRICE($addPriceInput: AddLocalPriceInput!) {\n    addLocalPrice(addPriceInput: $addPriceInput)\n  }\n"): (typeof documents)["\n  mutation ADD_LOCAL_PRICE($addPriceInput: AddLocalPriceInput!) {\n    addLocalPrice(addPriceInput: $addPriceInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_LOCAL_PRICE($deletePriceInput: IdInput!) {\n    deleteLocalPrice(deletePriceInput: $deletePriceInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_LOCAL_PRICE($deletePriceInput: IdInput!) {\n    deleteLocalPrice(deletePriceInput: $deletePriceInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CHANGE_TOLL_STATUS($changeTollStatusInput: ChangeTollStatusInput!) {\n    changeTollStatus(changeTollStatusInput: $changeTollStatusInput)\n  }\n"): (typeof documents)["\n  mutation CHANGE_TOLL_STATUS($changeTollStatusInput: ChangeTollStatusInput!) {\n    changeTollStatus(changeTollStatusInput: $changeTollStatusInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_AUTOMATIC_GATE($addAutomaticGateInput: AddAutomaticGateInput!) {\n    addAutomaticGate(addAutomaticGateInput: $addAutomaticGateInput) {\n      id\n      name\n      tollId\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation ADD_AUTOMATIC_GATE($addAutomaticGateInput: AddAutomaticGateInput!) {\n    addAutomaticGate(addAutomaticGateInput: $addAutomaticGateInput) {\n      id\n      name\n      tollId\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_AUTOMATIC_GATE($editAutomaticGateInput: EditAutomaticGateInput!) {\n    editAutomaticGate(editAutomaticGateInput: $editAutomaticGateInput) {\n      id\n      name\n      tollId\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation EDIT_AUTOMATIC_GATE($editAutomaticGateInput: EditAutomaticGateInput!) {\n    editAutomaticGate(editAutomaticGateInput: $editAutomaticGateInput) {\n      id\n      name\n      tollId\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_AUTOMATIC_GATE($deleteAutomaticGateInput: IdInput!) {\n    deleteAutomaticGate(deleteAutomaticGateInput: $deleteAutomaticGateInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_AUTOMATIC_GATE($deleteAutomaticGateInput: IdInput!) {\n    deleteAutomaticGate(deleteAutomaticGateInput: $deleteAutomaticGateInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_BY_ID($tollByIdInput: IdInput!) {\n    tollById(tollByIdInput: $tollByIdInput) {\n      id\n      name\n      inboundStatus\n      outboundStatus\n      longitude\n      latitude\n      wilayaId\n      wilaya {\n        id\n        name\n        code\n      }\n      highwayId\n      highway {\n        id\n        name\n        code\n      }\n      tollNetworkId\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query TOLL_BY_ID($tollByIdInput: IdInput!) {\n    tollById(tollByIdInput: $tollByIdInput) {\n      id\n      name\n      inboundStatus\n      outboundStatus\n      longitude\n      latitude\n      wilayaId\n      wilaya {\n        id\n        name\n        code\n      }\n      highwayId\n      highway {\n        id\n        name\n        code\n      }\n      tollNetworkId\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_ADMIN_INFO {\n    tollAdminInfo {\n      tollId\n      baseUserId\n      toll {\n        id\n        name\n        inboundStatus\n        outboundStatus\n        latitude\n        longitude\n        wilaya {\n          id\n          name\n          code\n        }\n        highway {\n          id\n          name\n          code\n        }\n        tollNetwork {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query TOLL_ADMIN_INFO {\n    tollAdminInfo {\n      tollId\n      baseUserId\n      toll {\n        id\n        name\n        inboundStatus\n        outboundStatus\n        latitude\n        longitude\n        wilaya {\n          id\n          name\n          code\n        }\n        highway {\n          id\n          name\n          code\n        }\n        tollNetwork {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AUTOMATIC_GATE_LIST($automaticGateListInput: AutomaticGateListInput!) {\n    automaticGateList(automaticGateListInput: $automaticGateListInput) {\n      count\n      list {\n        id\n        name\n        tollId\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query AUTOMATIC_GATE_LIST($automaticGateListInput: AutomaticGateListInput!) {\n    automaticGateList(automaticGateListInput: $automaticGateListInput) {\n      count\n      list {\n        id\n        name\n        tollId\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AUTOMATIC_GATE_BY_ID($automaticGateByIdInput: IdInput!) {\n    automaticGateById(automaticGateByIdInput: $automaticGateByIdInput) {\n      id\n      name\n      tollId\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query AUTOMATIC_GATE_BY_ID($automaticGateByIdInput: IdInput!) {\n    automaticGateById(automaticGateByIdInput: $automaticGateByIdInput) {\n      id\n      name\n      tollId\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query DAILY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    dailyPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DAILY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    dailyPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query WEEKLY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    weeklyPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        days\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query WEEKLY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    weeklyPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        days\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MONTHLY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    monthlyPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        startDay\n        endDay\n        months\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MONTHLY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    monthlyPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        startDay\n        endDay\n        months\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query YEARLY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    yearlyPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        startDate\n        endDate\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query YEARLY_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    yearlyPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        startDate\n        endDate\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CUSTOM_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    customPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        priceId\n        startDate\n        endDate\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query CUSTOM_PRICE_LOCAL_LIST($priceListInput: PaginationInput!) {\n    customPriceLocalList(priceListInput: $priceListInput) {\n      count\n      list {\n        priceId\n        startDate\n        endDate\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n          tollPrice {\n            direction\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;