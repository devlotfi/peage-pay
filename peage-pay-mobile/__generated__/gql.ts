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
    "\n  mutation SEND_PASSWORD_RESET_EMAIL($sendPasswordResetEmailInput: SendResetPasswordEmailInput!) {\n    sendPasswordResetEmail(sendPasswordResetEmailInput: $sendPasswordResetEmailInput)\n  }\n": types.Send_Password_Reset_EmailDocument,
    "\n  mutation SIGN_IN_WITH_EMAIL($signInWithEmailInput: SigninWithEmailInput!, $refreshTokenMode: RefreshTokenMode!) {\n    signInWithEmail(signInWithEmailInput: $signInWithEmailInput, refreshTokenMode: $refreshTokenMode) {\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n      refreshToken\n      accessToken\n      roles\n    }\n  }\n": types.Sign_In_With_EmailDocument,
    "\n  mutation SIGN_OUT($signOutInput: SignOutInput!) {\n    signOut(signOutInput: $signOutInput)\n  }\n": types.Sign_OutDocument,
    "\n  mutation REDEEM_CODE($redeemCodeInput: RedeemCodeInput!) {\n    redeemCode(redeemCodeInput: $redeemCodeInput)\n  }\n": types.Redeem_CodeDocument,
    "\n  mutation DEPOSIT_AMOUNT($depositAmountInput: DepositAmountInput!) {\n    depositAmount(depositAmountInput: $depositAmountInput)\n  }\n": types.Deposit_AmountDocument,
    "\n  query SIGN_IN_WITH_REFRESH_TOKEN_INITIAL($signInWithRefreshTokenInput: SignInWithRefreshTokenInput!) {\n    signInWithRefreshToken(signInWithRefreshTokenInput: $signInWithRefreshTokenInput) {\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n      accessToken\n      roles\n    }\n  }\n": types.Sign_In_With_Refresh_Token_InitialDocument,
    "\n  query SIGN_IN_WITH_REFRESH_TOKEN_COOKIE {\n    signInWithRefreshTokenCookie {\n      accessToken\n    }\n  }\n": types.Sign_In_With_Refresh_Token_CookieDocument,
    "\n  query DEPOSIT_LIST {\n    depositList {\n      id\n      amount\n      createdAt\n    }\n  }\n": types.Deposit_ListDocument,
    "\n  query TRIP_LIST {\n    tripList {\n      id\n      distance\n      entryTimeStamp\n      entryTollPrice\n      entryToll {\n        name\n      }\n      exitTimeStamp\n      exitTollPrice\n      exitToll {\n        name\n      }\n    }\n  }\n": types.Trip_ListDocument,
    "\n  query USER_INFO {\n    userInfo {\n      balance\n      baseUser {\n        currentTrip {\n          entryTimeStamp\n          entryTollId\n          entryTollPrice\n          entryToll {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": types.User_InfoDocument,
    "\n  query GLOBAL_TOLL_LIST {\n    globalTollList {\n      id\n      name\n      longitude\n      latitude\n      wilayaId\n      wilaya {\n        id\n        name\n        code\n      }\n      highwayId\n      highway {\n        id\n        name\n        code\n      }\n      tollNetworkId\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.Global_Toll_ListDocument,
    "\n  query TRIP_PRICE($tripPriceInput: TripPriceInput!) {\n    tripPrice(tripPriceInput: $tripPriceInput) {\n      distance\n      fromTollPrice\n      toTollPrice\n    }\n  }\n": types.Trip_PriceDocument,
    "\n  query USER_RFID_TAG_LIST {\n    userRfidTagList {\n      id\n      rfid\n      registrationNumber\n      createdAt\n    }\n  }\n": types.User_Rfid_Tag_ListDocument,
    "\n  query GENERATE_PIN {\n    generatePin\n  }\n": types.Generate_PinDocument,
    "\n  subscription PAYMENT_SUCCESSFUL($paymentSuccessfulInput: IdInput!) {\n    paymentSuccessful(paymentSuccessfulInput: $paymentSuccessfulInput)\n  }\n": types.Payment_SuccessfulDocument,
    "\n  subscription PAYMENT_FAILED($paymentFailedInput: IdInput!) {\n    paymentFailed(paymentFailedInput: $paymentFailedInput)\n  }\n": types.Payment_FailedDocument,
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
export function gql(source: "\n  mutation SEND_PASSWORD_RESET_EMAIL($sendPasswordResetEmailInput: SendResetPasswordEmailInput!) {\n    sendPasswordResetEmail(sendPasswordResetEmailInput: $sendPasswordResetEmailInput)\n  }\n"): (typeof documents)["\n  mutation SEND_PASSWORD_RESET_EMAIL($sendPasswordResetEmailInput: SendResetPasswordEmailInput!) {\n    sendPasswordResetEmail(sendPasswordResetEmailInput: $sendPasswordResetEmailInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SIGN_IN_WITH_EMAIL($signInWithEmailInput: SigninWithEmailInput!, $refreshTokenMode: RefreshTokenMode!) {\n    signInWithEmail(signInWithEmailInput: $signInWithEmailInput, refreshTokenMode: $refreshTokenMode) {\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n      refreshToken\n      accessToken\n      roles\n    }\n  }\n"): (typeof documents)["\n  mutation SIGN_IN_WITH_EMAIL($signInWithEmailInput: SigninWithEmailInput!, $refreshTokenMode: RefreshTokenMode!) {\n    signInWithEmail(signInWithEmailInput: $signInWithEmailInput, refreshTokenMode: $refreshTokenMode) {\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n      refreshToken\n      accessToken\n      roles\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SIGN_OUT($signOutInput: SignOutInput!) {\n    signOut(signOutInput: $signOutInput)\n  }\n"): (typeof documents)["\n  mutation SIGN_OUT($signOutInput: SignOutInput!) {\n    signOut(signOutInput: $signOutInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation REDEEM_CODE($redeemCodeInput: RedeemCodeInput!) {\n    redeemCode(redeemCodeInput: $redeemCodeInput)\n  }\n"): (typeof documents)["\n  mutation REDEEM_CODE($redeemCodeInput: RedeemCodeInput!) {\n    redeemCode(redeemCodeInput: $redeemCodeInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DEPOSIT_AMOUNT($depositAmountInput: DepositAmountInput!) {\n    depositAmount(depositAmountInput: $depositAmountInput)\n  }\n"): (typeof documents)["\n  mutation DEPOSIT_AMOUNT($depositAmountInput: DepositAmountInput!) {\n    depositAmount(depositAmountInput: $depositAmountInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SIGN_IN_WITH_REFRESH_TOKEN_INITIAL($signInWithRefreshTokenInput: SignInWithRefreshTokenInput!) {\n    signInWithRefreshToken(signInWithRefreshTokenInput: $signInWithRefreshTokenInput) {\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n      accessToken\n      roles\n    }\n  }\n"): (typeof documents)["\n  query SIGN_IN_WITH_REFRESH_TOKEN_INITIAL($signInWithRefreshTokenInput: SignInWithRefreshTokenInput!) {\n    signInWithRefreshToken(signInWithRefreshTokenInput: $signInWithRefreshTokenInput) {\n      baseUser {\n        id\n        firstName\n        lastName\n        createdAt\n        updatedAt\n      }\n      accessToken\n      roles\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SIGN_IN_WITH_REFRESH_TOKEN_COOKIE {\n    signInWithRefreshTokenCookie {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  query SIGN_IN_WITH_REFRESH_TOKEN_COOKIE {\n    signInWithRefreshTokenCookie {\n      accessToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query DEPOSIT_LIST {\n    depositList {\n      id\n      amount\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query DEPOSIT_LIST {\n    depositList {\n      id\n      amount\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TRIP_LIST {\n    tripList {\n      id\n      distance\n      entryTimeStamp\n      entryTollPrice\n      entryToll {\n        name\n      }\n      exitTimeStamp\n      exitTollPrice\n      exitToll {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query TRIP_LIST {\n    tripList {\n      id\n      distance\n      entryTimeStamp\n      entryTollPrice\n      entryToll {\n        name\n      }\n      exitTimeStamp\n      exitTollPrice\n      exitToll {\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query USER_INFO {\n    userInfo {\n      balance\n      baseUser {\n        currentTrip {\n          entryTimeStamp\n          entryTollId\n          entryTollPrice\n          entryToll {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query USER_INFO {\n    userInfo {\n      balance\n      baseUser {\n        currentTrip {\n          entryTimeStamp\n          entryTollId\n          entryTollPrice\n          entryToll {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GLOBAL_TOLL_LIST {\n    globalTollList {\n      id\n      name\n      longitude\n      latitude\n      wilayaId\n      wilaya {\n        id\n        name\n        code\n      }\n      highwayId\n      highway {\n        id\n        name\n        code\n      }\n      tollNetworkId\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GLOBAL_TOLL_LIST {\n    globalTollList {\n      id\n      name\n      longitude\n      latitude\n      wilayaId\n      wilaya {\n        id\n        name\n        code\n      }\n      highwayId\n      highway {\n        id\n        name\n        code\n      }\n      tollNetworkId\n      tollNetwork {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TRIP_PRICE($tripPriceInput: TripPriceInput!) {\n    tripPrice(tripPriceInput: $tripPriceInput) {\n      distance\n      fromTollPrice\n      toTollPrice\n    }\n  }\n"): (typeof documents)["\n  query TRIP_PRICE($tripPriceInput: TripPriceInput!) {\n    tripPrice(tripPriceInput: $tripPriceInput) {\n      distance\n      fromTollPrice\n      toTollPrice\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query USER_RFID_TAG_LIST {\n    userRfidTagList {\n      id\n      rfid\n      registrationNumber\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query USER_RFID_TAG_LIST {\n    userRfidTagList {\n      id\n      rfid\n      registrationNumber\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GENERATE_PIN {\n    generatePin\n  }\n"): (typeof documents)["\n  query GENERATE_PIN {\n    generatePin\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription PAYMENT_SUCCESSFUL($paymentSuccessfulInput: IdInput!) {\n    paymentSuccessful(paymentSuccessfulInput: $paymentSuccessfulInput)\n  }\n"): (typeof documents)["\n  subscription PAYMENT_SUCCESSFUL($paymentSuccessfulInput: IdInput!) {\n    paymentSuccessful(paymentSuccessfulInput: $paymentSuccessfulInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription PAYMENT_FAILED($paymentFailedInput: IdInput!) {\n    paymentFailed(paymentFailedInput: $paymentFailedInput)\n  }\n"): (typeof documents)["\n  subscription PAYMENT_FAILED($paymentFailedInput: IdInput!) {\n    paymentFailed(paymentFailedInput: $paymentFailedInput)\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;