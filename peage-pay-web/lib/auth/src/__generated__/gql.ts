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
    "\n  mutation SIGN_UP_WITH_EMAIL($signUpWithEmailInput: SignUpWithEmailInput!) {\n    signUpWithEmail(signUpWithEmailInput: $signUpWithEmailInput)\n  }\n": types.Sign_Up_With_EmailDocument,
    "\n  mutation VERIFY_EMAIL($verifyEmailInput: VerifyEmailInput!) {\n    verifyEmail(verifyEmailInput: $verifyEmailInput)\n  }\n": types.Verify_EmailDocument,
    "\n  mutation SIGN_IN_WITH_EMAIL($signInWithEmailInput: SigninWithEmailInput!, $refreshTokenMode: RefreshTokenMode!) {\n    signInWithEmail(signInWithEmailInput: $signInWithEmailInput, refreshTokenMode: $refreshTokenMode) {\n      baseUser {\n        id\n        firstName\n        lastName\n        birthDate\n        gender\n        createdAt\n        updatedAt\n      }\n      accessToken\n    }\n  }\n": types.Sign_In_With_EmailDocument,
    "\n  query SIGN_IN_WITH_REFRESH_TOKEN($signInWithRefreshTokenInput: SignInWithRefreshTokenInput!) {\n    signInWithRefreshToken(signInWithRefreshTokenInput: $signInWithRefreshTokenInput) {\n      baseUser {\n        id\n        firstName\n        lastName\n        birthDate\n        gender\n        createdAt\n        updatedAt\n      }\n      accessToken\n    }\n  }\n": types.Sign_In_With_Refresh_TokenDocument,
    "\n  query SIGN_IN_WITH_REFRESH_TOKEN_COOKIE {\n    signInWithRefreshTokenCookie {\n      baseUser {\n        id\n        firstName\n        lastName\n        birthDate\n        gender\n        createdAt\n        updatedAt\n      }\n      accessToken\n    }\n  }\n": types.Sign_In_With_Refresh_Token_CookieDocument,
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
export function gql(source: "\n  mutation SIGN_UP_WITH_EMAIL($signUpWithEmailInput: SignUpWithEmailInput!) {\n    signUpWithEmail(signUpWithEmailInput: $signUpWithEmailInput)\n  }\n"): (typeof documents)["\n  mutation SIGN_UP_WITH_EMAIL($signUpWithEmailInput: SignUpWithEmailInput!) {\n    signUpWithEmail(signUpWithEmailInput: $signUpWithEmailInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VERIFY_EMAIL($verifyEmailInput: VerifyEmailInput!) {\n    verifyEmail(verifyEmailInput: $verifyEmailInput)\n  }\n"): (typeof documents)["\n  mutation VERIFY_EMAIL($verifyEmailInput: VerifyEmailInput!) {\n    verifyEmail(verifyEmailInput: $verifyEmailInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SIGN_IN_WITH_EMAIL($signInWithEmailInput: SigninWithEmailInput!, $refreshTokenMode: RefreshTokenMode!) {\n    signInWithEmail(signInWithEmailInput: $signInWithEmailInput, refreshTokenMode: $refreshTokenMode) {\n      baseUser {\n        id\n        firstName\n        lastName\n        birthDate\n        gender\n        createdAt\n        updatedAt\n      }\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation SIGN_IN_WITH_EMAIL($signInWithEmailInput: SigninWithEmailInput!, $refreshTokenMode: RefreshTokenMode!) {\n    signInWithEmail(signInWithEmailInput: $signInWithEmailInput, refreshTokenMode: $refreshTokenMode) {\n      baseUser {\n        id\n        firstName\n        lastName\n        birthDate\n        gender\n        createdAt\n        updatedAt\n      }\n      accessToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SIGN_IN_WITH_REFRESH_TOKEN($signInWithRefreshTokenInput: SignInWithRefreshTokenInput!) {\n    signInWithRefreshToken(signInWithRefreshTokenInput: $signInWithRefreshTokenInput) {\n      baseUser {\n        id\n        firstName\n        lastName\n        birthDate\n        gender\n        createdAt\n        updatedAt\n      }\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  query SIGN_IN_WITH_REFRESH_TOKEN($signInWithRefreshTokenInput: SignInWithRefreshTokenInput!) {\n    signInWithRefreshToken(signInWithRefreshTokenInput: $signInWithRefreshTokenInput) {\n      baseUser {\n        id\n        firstName\n        lastName\n        birthDate\n        gender\n        createdAt\n        updatedAt\n      }\n      accessToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SIGN_IN_WITH_REFRESH_TOKEN_COOKIE {\n    signInWithRefreshTokenCookie {\n      baseUser {\n        id\n        firstName\n        lastName\n        birthDate\n        gender\n        createdAt\n        updatedAt\n      }\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  query SIGN_IN_WITH_REFRESH_TOKEN_COOKIE {\n    signInWithRefreshTokenCookie {\n      baseUser {\n        id\n        firstName\n        lastName\n        birthDate\n        gender\n        createdAt\n        updatedAt\n      }\n      accessToken\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;