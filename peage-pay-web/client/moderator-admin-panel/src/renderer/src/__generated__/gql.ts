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
    "\n  mutation DELETE_BASE_USER($deleteBaseUserInput: IdInput!) {\n    deleteBaseUser(deleteBaseUserInput: $deleteBaseUserInput)\n  }\n": types.Delete_Base_UserDocument,
    "\n  mutation ADD_RFID_TAG($addRfidTagInput: AddRfidTagInput!) {\n    addRfidTag(addRfidTagInput: $addRfidTagInput) {\n      id\n      rfid\n      registrationNumber\n      baseUserId\n      createdAt\n      updatedAt\n    }\n  }\n": types.Add_Rfid_TagDocument,
    "\n  mutation DELETE_RFID_TAG($deleteRfidTagInput: IdInput!) {\n    deleteRfidTag(deleteRfidTagInput: $deleteRfidTagInput)\n  }\n": types.Delete_Rfid_TagDocument,
    "\n  query MODERATOR_STATISTICS {\n    moderatorStatistics {\n      userCount\n      rfidTagCount\n    }\n  }\n": types.Moderator_StatisticsDocument,
    "\n  query RFID_TAG_BY_RFID($rfidTagByRfidInput: RfidTagByRfidInput!) {\n    rfidTagByRfid(rfidTagByRfidInput: $rfidTagByRfidInput) {\n      id\n      rfid\n      registrationNumber\n      createdAt\n      updatedAt\n      baseUserId\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.Rfid_Tag_By_RfidDocument,
    "\n  query BASE_USER_LIST($baseUserListInput: BaseUserListInput!) {\n    baseUserList(baseUserListInput: $baseUserListInput) {\n      count\n      list {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n        roles\n      }\n    }\n  }\n": types.Base_User_ListDocument,
    "\n  query BASE_USER_BY_ID($baseUserByIdInput: IdInput!) {\n    baseUserById(baseUserByIdInput: $baseUserByIdInput) {\n      id\n      firstName\n      lastName\n      roles\n      createdAt\n      updatedAt\n    }\n  }\n": types.Base_User_By_IdDocument,
    "\n  query RFID_TAG_LIST($rfidTagListInput: RfidTagListInput!) {\n    rfidTagList(rfidTagListInput: $rfidTagListInput) {\n      count\n      list {\n        id\n        rfid\n        registrationNumber\n        baseUserId\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.Rfid_Tag_ListDocument,
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
export function gql(source: "\n  mutation DELETE_BASE_USER($deleteBaseUserInput: IdInput!) {\n    deleteBaseUser(deleteBaseUserInput: $deleteBaseUserInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_BASE_USER($deleteBaseUserInput: IdInput!) {\n    deleteBaseUser(deleteBaseUserInput: $deleteBaseUserInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ADD_RFID_TAG($addRfidTagInput: AddRfidTagInput!) {\n    addRfidTag(addRfidTagInput: $addRfidTagInput) {\n      id\n      rfid\n      registrationNumber\n      baseUserId\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation ADD_RFID_TAG($addRfidTagInput: AddRfidTagInput!) {\n    addRfidTag(addRfidTagInput: $addRfidTagInput) {\n      id\n      rfid\n      registrationNumber\n      baseUserId\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DELETE_RFID_TAG($deleteRfidTagInput: IdInput!) {\n    deleteRfidTag(deleteRfidTagInput: $deleteRfidTagInput)\n  }\n"): (typeof documents)["\n  mutation DELETE_RFID_TAG($deleteRfidTagInput: IdInput!) {\n    deleteRfidTag(deleteRfidTagInput: $deleteRfidTagInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MODERATOR_STATISTICS {\n    moderatorStatistics {\n      userCount\n      rfidTagCount\n    }\n  }\n"): (typeof documents)["\n  query MODERATOR_STATISTICS {\n    moderatorStatistics {\n      userCount\n      rfidTagCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query RFID_TAG_BY_RFID($rfidTagByRfidInput: RfidTagByRfidInput!) {\n    rfidTagByRfid(rfidTagByRfidInput: $rfidTagByRfidInput) {\n      id\n      rfid\n      registrationNumber\n      createdAt\n      updatedAt\n      baseUserId\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query RFID_TAG_BY_RFID($rfidTagByRfidInput: RfidTagByRfidInput!) {\n    rfidTagByRfid(rfidTagByRfidInput: $rfidTagByRfidInput) {\n      id\n      rfid\n      registrationNumber\n      createdAt\n      updatedAt\n      baseUserId\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BASE_USER_LIST($baseUserListInput: BaseUserListInput!) {\n    baseUserList(baseUserListInput: $baseUserListInput) {\n      count\n      list {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n        roles\n      }\n    }\n  }\n"): (typeof documents)["\n  query BASE_USER_LIST($baseUserListInput: BaseUserListInput!) {\n    baseUserList(baseUserListInput: $baseUserListInput) {\n      count\n      list {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n        roles\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BASE_USER_BY_ID($baseUserByIdInput: IdInput!) {\n    baseUserById(baseUserByIdInput: $baseUserByIdInput) {\n      id\n      firstName\n      lastName\n      roles\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query BASE_USER_BY_ID($baseUserByIdInput: IdInput!) {\n    baseUserById(baseUserByIdInput: $baseUserByIdInput) {\n      id\n      firstName\n      lastName\n      roles\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query RFID_TAG_LIST($rfidTagListInput: RfidTagListInput!) {\n    rfidTagList(rfidTagListInput: $rfidTagListInput) {\n      count\n      list {\n        id\n        rfid\n        registrationNumber\n        baseUserId\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query RFID_TAG_LIST($rfidTagListInput: RfidTagListInput!) {\n    rfidTagList(rfidTagListInput: $rfidTagListInput) {\n      count\n      list {\n        id\n        rfid\n        registrationNumber\n        baseUserId\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;