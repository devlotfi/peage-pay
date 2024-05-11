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
    "\n  mutation ADD_HIGHWAY($addHighwayInput: AddHighwayInput!) {\n    addHighway(addHighwayInput: $addHighwayInput) {\n      id\n    }\n  }\n": types.Add_HighwayDocument,
    "\n  mutation EDIT_HIGHWAY($editHighwayInput: EditHighwayInput!) {\n    editHighway(editHighwayInput: $editHighwayInput) {\n      id\n    }\n  }\n": types.Edit_HighwayDocument,
    "\n  mutation DELETE_HIGHWAY($deleteHighwayInput: IdInput!) {\n    deleteHighway(deleteHighwayInput: $deleteHighwayInput)\n  }\n": types.Delete_HighwayDocument,
    "\n  mutation ADD_SUBSCRIPTION($addSubscriptionInput: AddSubscriptionInput!) {\n    addSubscription(addSubscriptionInput: $addSubscriptionInput) {\n      id\n    }\n  }\n": types.Add_SubscriptionDocument,
    "\n  mutation EDIT_SUBSCRIPTION($editSubscriptionInput: EditSubscriptionInput!) {\n    editSubscription(editSubscriptionInput: $editSubscriptionInput) {\n      id\n    }\n  }\n": types.Edit_SubscriptionDocument,
    "\n  mutation DELETE_SUBSCRIPTION($deleteSubscriptionInput: IdInput!) {\n    deleteSubscription(deleteSubscriptionInput: $deleteSubscriptionInput)\n  }\n": types.Delete_SubscriptionDocument,
    "\n  mutation ADD_TOLL($addTollInput: AddTollInput!) {\n    addToll(addTollInput: $addTollInput) {\n      id\n    }\n  }\n": types.Add_TollDocument,
    "\n  mutation EDIT_TOLL($editTollInput: EditTollInput!) {\n    editToll(editTollInput: $editTollInput) {\n      id\n    }\n  }\n": types.Edit_TollDocument,
    "\n  mutation DELETE_TOLL($deleteTollInput: IdInput!) {\n    deleteToll(deleteTollInput: $deleteTollInput)\n  }\n": types.Delete_TollDocument,
    "\n  mutation ADD_TOLL_NETWORK($addTollNetworkInput: AddTollNetworkInput!) {\n    addTollNetwork(addTollNetworkInput: $addTollNetworkInput) {\n      id\n    }\n  }\n": types.Add_Toll_NetworkDocument,
    "\n  mutation EDIT_TOLL_NETWORK($editTollNetworkInput: EditTollNetworkInput!) {\n    editTollNetwork(editTollNetworkInput: $editTollNetworkInput) {\n      id\n    }\n  }\n": types.Edit_Toll_NetworkDocument,
    "\n  mutation DELETE_TOLL_NETWORK($deleteTollNetworkInput: IdInput!) {\n    deleteTollNetwork(deleteTollNetworkInput: $deleteTollNetworkInput)\n  }\n": types.Delete_Toll_NetworkDocument,
    "\n  mutation ADD_SECTION($addSectionInput: AddSectionInput!) {\n    addSection(addSectionInput: $addSectionInput) {\n      fromTollId\n      toTollId\n    }\n  }\n": types.Add_SectionDocument,
    "\n  mutation EDIT_SECTION($editSectionInput: EditSectionInput!) {\n    editSection(editSectionInput: $editSectionInput) {\n      fromTollId\n      toTollId\n    }\n  }\n": types.Edit_SectionDocument,
    "\n  mutation DELETE_SECTION($deleteSectionInput: DeleteSectionInput!) {\n    deleteSection(deleteSectionInput: $deleteSectionInput)\n  }\n": types.Delete_SectionDocument,
    "\n  mutation ADD_HUMAN_RESSOURCES_ADMIN_ROLE($addHumanRessoucesAdminRoleInput: IdInput!) {\n    addHumanRessoucesAdminRole(addHumanRessoucesAdminRoleInput: $addHumanRessoucesAdminRoleInput)\n  }\n": types.Add_Human_Ressources_Admin_RoleDocument,
    "\n  mutation REMOVE_HUMAN_RESSOURCES_ADMIN_ROLE($removeHumanRessoucesAdminRoleInput: IdInput!) {\n    removeHumanRessoucesAdminRole(removeHumanRessoucesAdminRoleInput: $removeHumanRessoucesAdminRoleInput)\n  }\n": types.Remove_Human_Ressources_Admin_RoleDocument,
    "\n  mutation ADD_GLOBAL_PRICE($addPriceInput: AddGlobalPriceInput!) {\n    addGlobalPrice(addPriceInput: $addPriceInput)\n  }\n": types.Add_Global_PriceDocument,
    "\n  mutation DELETE_GLOBAL_PRICE($deletePriceInput: IdInput!) {\n    deleteGlobalPrice(deletePriceInput: $deletePriceInput)\n  }\n": types.Delete_Global_PriceDocument,
    "\n  mutation GENERATE_TOLL_DISTANCES($generateTollDistancesInput: IdInput!) {\n    generateTollDistances(generateTollDistancesInput: $generateTollDistancesInput)\n  }\n": types.Generate_Toll_DistancesDocument,
    "\n  mutation EDIT_DEFAULT_PRICE($editDefaultPriceInput: EditDefaultPriceInput!) {\n    editDefaultPrice(editDefaultPriceInput: $editDefaultPriceInput)\n  }\n": types.Edit_Default_PriceDocument,
    "\n  query HIGHWAY_LIST($highwayListInput: HighwayListInput!) {\n    highwayList(highwayListInput: $highwayListInput) {\n      count\n      list {\n        id\n        name\n        code\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.Highway_ListDocument,
    "\n  query HIGHWAY_BY_ID($highwayByIdInput: IdInput!) {\n    highwayById(highwayByIdInput: $highwayByIdInput) {\n      code\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n": types.Highway_By_IdDocument,
    "\n  query SUBSCRIPTION_LIST($subscriptionListInput: SubscriptionListInput!) {\n    subscriptionList(subscriptionListInput: $subscriptionListInput) {\n      count\n      list {\n        id\n        name\n        days\n        price\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.Subscription_ListDocument,
    "\n  query SUBSCRIPTION_BY_ID($subscriptionByIdInput: IdInput!) {\n    subscriptionById(subscriptionByIdInput: $subscriptionByIdInput) {\n      id\n      name\n      days\n      price\n      createdAt\n      updatedAt\n    }\n  }\n": types.Subscription_By_IdDocument,
    "\n  query FULL_TOLL_LIST($fullTollListInput: IdInput!) {\n    fullTollList(fullTollListInput: $fullTollListInput) {\n      id\n      name\n      longitude\n      latitude\n      wilayaId\n      wilaya {\n        id\n        name\n        code\n      }\n      highwayId\n      highway {\n        id\n        name\n        code\n      }\n      tollNetworkId\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.Full_Toll_ListDocument,
    "\n  query TOLL_LIST($tollListInput: TollListInput!) {\n    tollList(tollListInput: $tollListInput) {\n      count\n      list {\n        id\n        name\n        longitude\n        latitude\n        wilayaId\n        wilaya {\n          id\n          name\n          code\n        }\n        highwayId\n        highway {\n          id\n          name\n          code\n        }\n        tollNetworkId\n        tollNetwork {\n          id\n          name\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.Toll_ListDocument,
    "\n  query TOLL_BY_ID($tollByIdInput: IdInput!) {\n    tollById(tollByIdInput: $tollByIdInput) {\n      id\n      name\n      longitude\n      latitude\n      wilayaId\n      wilaya {\n        id\n        name\n        code\n      }\n      highwayId\n      highway {\n        id\n        name\n        code\n      }\n      tollNetworkId\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.Toll_By_IdDocument,
    "\n  query TOLL_NETWORK_LIST($tollNetworkListInput: TollNetworkListInput!) {\n    tollNetworkList(tollNetworkListInput: $tollNetworkListInput) {\n      count\n      list {\n        id\n        name\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.Toll_Network_ListDocument,
    "\n  query TOLL_NETWORK_BY_ID($tollNetworkByIdInput: IdInput!) {\n    tollNetworkById(tollNetworkByIdInput: $tollNetworkByIdInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n": types.Toll_Network_By_IdDocument,
    "\n  query WILAYA_LIST($wilayaListInput: WilayaListInput!) {\n    wilayaList(wilayaListInput: $wilayaListInput) {\n      count\n      list {\n        id\n        name\n        code\n      }\n    }\n  }\n": types.Wilaya_ListDocument,
    "\n  query WILAYA_BY_ID($wilayaByIdInput: IdInput!) {\n    wilayaById(wilayaByIdInput: $wilayaByIdInput) {\n      id\n      name\n      code\n    }\n  }\n": types.Wilaya_By_IdDocument,
    "\n  query SECTION_LIST_FOR_TOLL_NETWORK($sectionListForTollNetworkInput: IdInput!) {\n    sectionListForTollNetwork(sectionListForTollNetworkInput: $sectionListForTollNetworkInput) {\n      distance\n      fromToll {\n        id\n        name\n        latitude\n        longitude\n      }\n      toToll {\n        id\n        name\n        latitude\n        longitude\n      }\n    }\n  }\n": types.Section_List_For_Toll_NetworkDocument,
    "\n  query SECTION_LIST_FOR_TOLL($sectionListForTollInput: SectionListForTollInput!) {\n    sectionListForToll(sectionListForTollInput: $sectionListForTollInput) {\n      count\n      list {\n        distance\n        fromToll {\n          id\n          name\n        }\n        toToll {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.Section_List_For_TollDocument,
    "\n  query SECTION_BY_IDS($sectionByIdsInput: SectionByIdsInput!) {\n    sectionByIds(sectionByIdsInput: $sectionByIdsInput) {\n      distance\n      fromToll {\n        id\n        name\n      }\n      toToll {\n        id\n        name\n      }\n    }\n  }\n": types.Section_By_IdsDocument,
    "\n  query BASE_USER_LIST($baseUserListInput: BaseUserListInput!) {\n    baseUserList(baseUserListInput: $baseUserListInput) {\n      count\n      list {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n        roles\n      }\n    }\n  }\n": types.Base_User_ListDocument,
    "\n  query DAILY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    dailyPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n": types.Daily_Price_Global_ListDocument,
    "\n  query WEEKLY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    weeklyPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        days\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n": types.Weekly_Price_Global_ListDocument,
    "\n  query MONTHLY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    monthlyPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        startDay\n        endDay\n        months\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n": types.Monthly_Price_Global_ListDocument,
    "\n  query YEARLY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    yearlyPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        startDate\n        endDate\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n": types.Yearly_Price_Global_ListDocument,
    "\n  query CUSTOM_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    customPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        priceId\n        startDate\n        endDate\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n": types.Custom_Price_Global_ListDocument,
    "\n  query TOLL_DISTANCE_LIST($tollDistanceListInput: TollDistanceListInput!) {\n    tollDistanceList(tollDistanceListInput: $tollDistanceListInput) {\n      count\n      list {\n        distance\n        fromToll {\n          id\n          name\n        }\n        toToll {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.Toll_Distance_ListDocument,
    "\n  query DEFAULT_PRICE {\n    defaultPrice\n  }\n": types.Default_PriceDocument,
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
export function gql(source: "\n  mutation ADD_HIGHWAY($addHighwayInput: AddHighwayInput!) {\n    addHighway(addHighwayInput: $addHighwayInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation ADD_HIGHWAY($addHighwayInput: AddHighwayInput!) {\n    addHighway(addHighwayInput: $addHighwayInput) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_HIGHWAY($editHighwayInput: EditHighwayInput!) {\n    editHighway(editHighwayInput: $editHighwayInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation EDIT_HIGHWAY($editHighwayInput: EditHighwayInput!) {\n    editHighway(editHighwayInput: $editHighwayInput) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_HIGHWAY($deleteHighwayInput: IdInput!) {\n    deleteHighway(deleteHighwayInput: $deleteHighwayInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_HIGHWAY($deleteHighwayInput: IdInput!) {\n    deleteHighway(deleteHighwayInput: $deleteHighwayInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_SUBSCRIPTION($addSubscriptionInput: AddSubscriptionInput!) {\n    addSubscription(addSubscriptionInput: $addSubscriptionInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation ADD_SUBSCRIPTION($addSubscriptionInput: AddSubscriptionInput!) {\n    addSubscription(addSubscriptionInput: $addSubscriptionInput) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_SUBSCRIPTION($editSubscriptionInput: EditSubscriptionInput!) {\n    editSubscription(editSubscriptionInput: $editSubscriptionInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation EDIT_SUBSCRIPTION($editSubscriptionInput: EditSubscriptionInput!) {\n    editSubscription(editSubscriptionInput: $editSubscriptionInput) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_SUBSCRIPTION($deleteSubscriptionInput: IdInput!) {\n    deleteSubscription(deleteSubscriptionInput: $deleteSubscriptionInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_SUBSCRIPTION($deleteSubscriptionInput: IdInput!) {\n    deleteSubscription(deleteSubscriptionInput: $deleteSubscriptionInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_TOLL($addTollInput: AddTollInput!) {\n    addToll(addTollInput: $addTollInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation ADD_TOLL($addTollInput: AddTollInput!) {\n    addToll(addTollInput: $addTollInput) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_TOLL($editTollInput: EditTollInput!) {\n    editToll(editTollInput: $editTollInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation EDIT_TOLL($editTollInput: EditTollInput!) {\n    editToll(editTollInput: $editTollInput) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_TOLL($deleteTollInput: IdInput!) {\n    deleteToll(deleteTollInput: $deleteTollInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_TOLL($deleteTollInput: IdInput!) {\n    deleteToll(deleteTollInput: $deleteTollInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_TOLL_NETWORK($addTollNetworkInput: AddTollNetworkInput!) {\n    addTollNetwork(addTollNetworkInput: $addTollNetworkInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation ADD_TOLL_NETWORK($addTollNetworkInput: AddTollNetworkInput!) {\n    addTollNetwork(addTollNetworkInput: $addTollNetworkInput) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_TOLL_NETWORK($editTollNetworkInput: EditTollNetworkInput!) {\n    editTollNetwork(editTollNetworkInput: $editTollNetworkInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation EDIT_TOLL_NETWORK($editTollNetworkInput: EditTollNetworkInput!) {\n    editTollNetwork(editTollNetworkInput: $editTollNetworkInput) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_TOLL_NETWORK($deleteTollNetworkInput: IdInput!) {\n    deleteTollNetwork(deleteTollNetworkInput: $deleteTollNetworkInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_TOLL_NETWORK($deleteTollNetworkInput: IdInput!) {\n    deleteTollNetwork(deleteTollNetworkInput: $deleteTollNetworkInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_SECTION($addSectionInput: AddSectionInput!) {\n    addSection(addSectionInput: $addSectionInput) {\n      fromTollId\n      toTollId\n    }\n  }\n"): (typeof documents)["\n  mutation ADD_SECTION($addSectionInput: AddSectionInput!) {\n    addSection(addSectionInput: $addSectionInput) {\n      fromTollId\n      toTollId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_SECTION($editSectionInput: EditSectionInput!) {\n    editSection(editSectionInput: $editSectionInput) {\n      fromTollId\n      toTollId\n    }\n  }\n"): (typeof documents)["\n  mutation EDIT_SECTION($editSectionInput: EditSectionInput!) {\n    editSection(editSectionInput: $editSectionInput) {\n      fromTollId\n      toTollId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_SECTION($deleteSectionInput: DeleteSectionInput!) {\n    deleteSection(deleteSectionInput: $deleteSectionInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_SECTION($deleteSectionInput: DeleteSectionInput!) {\n    deleteSection(deleteSectionInput: $deleteSectionInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_HUMAN_RESSOURCES_ADMIN_ROLE($addHumanRessoucesAdminRoleInput: IdInput!) {\n    addHumanRessoucesAdminRole(addHumanRessoucesAdminRoleInput: $addHumanRessoucesAdminRoleInput)\n  }\n"): (typeof documents)["\n  mutation ADD_HUMAN_RESSOURCES_ADMIN_ROLE($addHumanRessoucesAdminRoleInput: IdInput!) {\n    addHumanRessoucesAdminRole(addHumanRessoucesAdminRoleInput: $addHumanRessoucesAdminRoleInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation REMOVE_HUMAN_RESSOURCES_ADMIN_ROLE($removeHumanRessoucesAdminRoleInput: IdInput!) {\n    removeHumanRessoucesAdminRole(removeHumanRessoucesAdminRoleInput: $removeHumanRessoucesAdminRoleInput)\n  }\n"): (typeof documents)["\n  mutation REMOVE_HUMAN_RESSOURCES_ADMIN_ROLE($removeHumanRessoucesAdminRoleInput: IdInput!) {\n    removeHumanRessoucesAdminRole(removeHumanRessoucesAdminRoleInput: $removeHumanRessoucesAdminRoleInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_GLOBAL_PRICE($addPriceInput: AddGlobalPriceInput!) {\n    addGlobalPrice(addPriceInput: $addPriceInput)\n  }\n"): (typeof documents)["\n  mutation ADD_GLOBAL_PRICE($addPriceInput: AddGlobalPriceInput!) {\n    addGlobalPrice(addPriceInput: $addPriceInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_GLOBAL_PRICE($deletePriceInput: IdInput!) {\n    deleteGlobalPrice(deletePriceInput: $deletePriceInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_GLOBAL_PRICE($deletePriceInput: IdInput!) {\n    deleteGlobalPrice(deletePriceInput: $deletePriceInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation GENERATE_TOLL_DISTANCES($generateTollDistancesInput: IdInput!) {\n    generateTollDistances(generateTollDistancesInput: $generateTollDistancesInput)\n  }\n"): (typeof documents)["\n  mutation GENERATE_TOLL_DISTANCES($generateTollDistancesInput: IdInput!) {\n    generateTollDistances(generateTollDistancesInput: $generateTollDistancesInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EDIT_DEFAULT_PRICE($editDefaultPriceInput: EditDefaultPriceInput!) {\n    editDefaultPrice(editDefaultPriceInput: $editDefaultPriceInput)\n  }\n"): (typeof documents)["\n  mutation EDIT_DEFAULT_PRICE($editDefaultPriceInput: EditDefaultPriceInput!) {\n    editDefaultPrice(editDefaultPriceInput: $editDefaultPriceInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query HIGHWAY_LIST($highwayListInput: HighwayListInput!) {\n    highwayList(highwayListInput: $highwayListInput) {\n      count\n      list {\n        id\n        name\n        code\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query HIGHWAY_LIST($highwayListInput: HighwayListInput!) {\n    highwayList(highwayListInput: $highwayListInput) {\n      count\n      list {\n        id\n        name\n        code\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query HIGHWAY_BY_ID($highwayByIdInput: IdInput!) {\n    highwayById(highwayByIdInput: $highwayByIdInput) {\n      code\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query HIGHWAY_BY_ID($highwayByIdInput: IdInput!) {\n    highwayById(highwayByIdInput: $highwayByIdInput) {\n      code\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SUBSCRIPTION_LIST($subscriptionListInput: SubscriptionListInput!) {\n    subscriptionList(subscriptionListInput: $subscriptionListInput) {\n      count\n      list {\n        id\n        name\n        days\n        price\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query SUBSCRIPTION_LIST($subscriptionListInput: SubscriptionListInput!) {\n    subscriptionList(subscriptionListInput: $subscriptionListInput) {\n      count\n      list {\n        id\n        name\n        days\n        price\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SUBSCRIPTION_BY_ID($subscriptionByIdInput: IdInput!) {\n    subscriptionById(subscriptionByIdInput: $subscriptionByIdInput) {\n      id\n      name\n      days\n      price\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query SUBSCRIPTION_BY_ID($subscriptionByIdInput: IdInput!) {\n    subscriptionById(subscriptionByIdInput: $subscriptionByIdInput) {\n      id\n      name\n      days\n      price\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FULL_TOLL_LIST($fullTollListInput: IdInput!) {\n    fullTollList(fullTollListInput: $fullTollListInput) {\n      id\n      name\n      longitude\n      latitude\n      wilayaId\n      wilaya {\n        id\n        name\n        code\n      }\n      highwayId\n      highway {\n        id\n        name\n        code\n      }\n      tollNetworkId\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query FULL_TOLL_LIST($fullTollListInput: IdInput!) {\n    fullTollList(fullTollListInput: $fullTollListInput) {\n      id\n      name\n      longitude\n      latitude\n      wilayaId\n      wilaya {\n        id\n        name\n        code\n      }\n      highwayId\n      highway {\n        id\n        name\n        code\n      }\n      tollNetworkId\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_LIST($tollListInput: TollListInput!) {\n    tollList(tollListInput: $tollListInput) {\n      count\n      list {\n        id\n        name\n        longitude\n        latitude\n        wilayaId\n        wilaya {\n          id\n          name\n          code\n        }\n        highwayId\n        highway {\n          id\n          name\n          code\n        }\n        tollNetworkId\n        tollNetwork {\n          id\n          name\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query TOLL_LIST($tollListInput: TollListInput!) {\n    tollList(tollListInput: $tollListInput) {\n      count\n      list {\n        id\n        name\n        longitude\n        latitude\n        wilayaId\n        wilaya {\n          id\n          name\n          code\n        }\n        highwayId\n        highway {\n          id\n          name\n          code\n        }\n        tollNetworkId\n        tollNetwork {\n          id\n          name\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_BY_ID($tollByIdInput: IdInput!) {\n    tollById(tollByIdInput: $tollByIdInput) {\n      id\n      name\n      longitude\n      latitude\n      wilayaId\n      wilaya {\n        id\n        name\n        code\n      }\n      highwayId\n      highway {\n        id\n        name\n        code\n      }\n      tollNetworkId\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query TOLL_BY_ID($tollByIdInput: IdInput!) {\n    tollById(tollByIdInput: $tollByIdInput) {\n      id\n      name\n      longitude\n      latitude\n      wilayaId\n      wilaya {\n        id\n        name\n        code\n      }\n      highwayId\n      highway {\n        id\n        name\n        code\n      }\n      tollNetworkId\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_NETWORK_LIST($tollNetworkListInput: TollNetworkListInput!) {\n    tollNetworkList(tollNetworkListInput: $tollNetworkListInput) {\n      count\n      list {\n        id\n        name\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query TOLL_NETWORK_LIST($tollNetworkListInput: TollNetworkListInput!) {\n    tollNetworkList(tollNetworkListInput: $tollNetworkListInput) {\n      count\n      list {\n        id\n        name\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_NETWORK_BY_ID($tollNetworkByIdInput: IdInput!) {\n    tollNetworkById(tollNetworkByIdInput: $tollNetworkByIdInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query TOLL_NETWORK_BY_ID($tollNetworkByIdInput: IdInput!) {\n    tollNetworkById(tollNetworkByIdInput: $tollNetworkByIdInput) {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query WILAYA_LIST($wilayaListInput: WilayaListInput!) {\n    wilayaList(wilayaListInput: $wilayaListInput) {\n      count\n      list {\n        id\n        name\n        code\n      }\n    }\n  }\n"): (typeof documents)["\n  query WILAYA_LIST($wilayaListInput: WilayaListInput!) {\n    wilayaList(wilayaListInput: $wilayaListInput) {\n      count\n      list {\n        id\n        name\n        code\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query WILAYA_BY_ID($wilayaByIdInput: IdInput!) {\n    wilayaById(wilayaByIdInput: $wilayaByIdInput) {\n      id\n      name\n      code\n    }\n  }\n"): (typeof documents)["\n  query WILAYA_BY_ID($wilayaByIdInput: IdInput!) {\n    wilayaById(wilayaByIdInput: $wilayaByIdInput) {\n      id\n      name\n      code\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SECTION_LIST_FOR_TOLL_NETWORK($sectionListForTollNetworkInput: IdInput!) {\n    sectionListForTollNetwork(sectionListForTollNetworkInput: $sectionListForTollNetworkInput) {\n      distance\n      fromToll {\n        id\n        name\n        latitude\n        longitude\n      }\n      toToll {\n        id\n        name\n        latitude\n        longitude\n      }\n    }\n  }\n"): (typeof documents)["\n  query SECTION_LIST_FOR_TOLL_NETWORK($sectionListForTollNetworkInput: IdInput!) {\n    sectionListForTollNetwork(sectionListForTollNetworkInput: $sectionListForTollNetworkInput) {\n      distance\n      fromToll {\n        id\n        name\n        latitude\n        longitude\n      }\n      toToll {\n        id\n        name\n        latitude\n        longitude\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SECTION_LIST_FOR_TOLL($sectionListForTollInput: SectionListForTollInput!) {\n    sectionListForToll(sectionListForTollInput: $sectionListForTollInput) {\n      count\n      list {\n        distance\n        fromToll {\n          id\n          name\n        }\n        toToll {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query SECTION_LIST_FOR_TOLL($sectionListForTollInput: SectionListForTollInput!) {\n    sectionListForToll(sectionListForTollInput: $sectionListForTollInput) {\n      count\n      list {\n        distance\n        fromToll {\n          id\n          name\n        }\n        toToll {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SECTION_BY_IDS($sectionByIdsInput: SectionByIdsInput!) {\n    sectionByIds(sectionByIdsInput: $sectionByIdsInput) {\n      distance\n      fromToll {\n        id\n        name\n      }\n      toToll {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query SECTION_BY_IDS($sectionByIdsInput: SectionByIdsInput!) {\n    sectionByIds(sectionByIdsInput: $sectionByIdsInput) {\n      distance\n      fromToll {\n        id\n        name\n      }\n      toToll {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BASE_USER_LIST($baseUserListInput: BaseUserListInput!) {\n    baseUserList(baseUserListInput: $baseUserListInput) {\n      count\n      list {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n        roles\n      }\n    }\n  }\n"): (typeof documents)["\n  query BASE_USER_LIST($baseUserListInput: BaseUserListInput!) {\n    baseUserList(baseUserListInput: $baseUserListInput) {\n      count\n      list {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n        roles\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query DAILY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    dailyPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DAILY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    dailyPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query WEEKLY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    weeklyPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        days\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query WEEKLY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    weeklyPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        days\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MONTHLY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    monthlyPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        startDay\n        endDay\n        months\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MONTHLY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    monthlyPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        startDay\n        endDay\n        months\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query YEARLY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    yearlyPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        startDate\n        endDate\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query YEARLY_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    yearlyPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        startDate\n        endDate\n        priceId\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CUSTOM_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    customPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        priceId\n        startDate\n        endDate\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query CUSTOM_PRICE_GLOBAL_LIST($priceListInput: PaginationInput!) {\n    customPriceGlobalList(priceListInput: $priceListInput) {\n      count\n      list {\n        priceId\n        startDate\n        endDate\n        price {\n          id\n          value\n          priority\n          startTimestamp\n          endTimestamp\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TOLL_DISTANCE_LIST($tollDistanceListInput: TollDistanceListInput!) {\n    tollDistanceList(tollDistanceListInput: $tollDistanceListInput) {\n      count\n      list {\n        distance\n        fromToll {\n          id\n          name\n        }\n        toToll {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query TOLL_DISTANCE_LIST($tollDistanceListInput: TollDistanceListInput!) {\n    tollDistanceList(tollDistanceListInput: $tollDistanceListInput) {\n      count\n      list {\n        distance\n        fromToll {\n          id\n          name\n        }\n        toToll {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query DEFAULT_PRICE {\n    defaultPrice\n  }\n"): (typeof documents)["\n  query DEFAULT_PRICE {\n    defaultPrice\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;