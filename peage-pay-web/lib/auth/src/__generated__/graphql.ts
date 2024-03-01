/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export enum AuthErrors {
  AccessTokenNotProvided = 'ACCESS_TOKEN_NOT_PROVIDED',
  EmailAlreadyVerified = 'EMAIL_ALREADY_VERIFIED',
  EmailAuthNotFound = 'EMAIL_AUTH_NOT_FOUND',
  EmailVerificationAttemptsExceeded = 'EMAIL_VERIFICATION_ATTEMPTS_EXCEEDED',
  InvalidAccessToken = 'INVALID_ACCESS_TOKEN',
  InvalidEmailOrPassword = 'INVALID_EMAIL_OR_PASSWORD',
  InvalidGoogleOauthToken = 'INVALID_GOOGLE_OAUTH_TOKEN',
  InvalidRefreshToken = 'INVALID_REFRESH_TOKEN',
  InvalidVerificationToken = 'INVALID_VERIFICATION_TOKEN',
  PasswordResetAttemptsExceeded = 'PASSWORD_RESET_ATTEMPTS_EXCEEDED',
  PhoneAuthNotFound = 'PHONE_AUTH_NOT_FOUND',
  RefreshTokenNotProvided = 'REFRESH_TOKEN_NOT_PROVIDED',
  SignInWithEmaIlAttemptsExceeded = 'SIGN_IN_WITH_EMAIl_ATTEMPTS_EXCEEDED',
  VerificationRequestPending = 'VERIFICATION_REQUEST_PENDING',
  VerificationTokenExpired = 'VERIFICATION_TOKEN_EXPIRED',
  VerificationTokenNotFound = 'VERIFICATION_TOKEN_NOT_FOUND'
}

export type BaseUserType = {
  __typename?: 'BaseUserType';
  createdAt: Scalars['DateTime']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  resetPassword: Scalars['Boolean']['output'];
  sendPasswordResetEmail: Scalars['Boolean']['output'];
  signInWithEmail: SignInResult;
  signInWithGoogle: SignInResult;
  signOut: Scalars['Boolean']['output'];
  signOutWithRefreshTokenCookie: Scalars['Boolean']['output'];
  signUpWithEmail: Scalars['Boolean']['output'];
  verifyEmail: Scalars['Boolean']['output'];
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationSendPasswordResetEmailArgs = {
  sendPasswordResetEmailInput: SendResetPasswordEmailInput;
};


export type MutationSignInWithEmailArgs = {
  refreshTokenMode: RefreshTokenMode;
  signInWithEmailInput: SigninWithEmailInput;
};


export type MutationSignInWithGoogleArgs = {
  refreshTokenMode: RefreshTokenMode;
  signInWithGoogleInput: SignInWithGoogleInput;
};


export type MutationSignUpWithEmailArgs = {
  signUpWithEmailInput: SignUpWithEmailInput;
};


export type MutationVerifyEmailArgs = {
  verifyEmailInput: VerifyEmailInput;
};

export type Query = {
  __typename?: 'Query';
  lol: Scalars['String']['output'];
  signInWithRefreshToken: SignInWithRefreshTokenResult;
  signInWithRefreshTokenCookie: SignInWithRefreshTokenResult;
};


export type QuerySignInWithRefreshTokenArgs = {
  signInWithRefreshTokenInput: SignInWithRefreshTokenInput;
};

export enum RefreshTokenMode {
  Cookie = 'COOKIE',
  PlainText = 'PLAIN_TEXT'
}

export type ResetPasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type SendResetPasswordEmailInput = {
  email: Scalars['String']['input'];
};

export type SignInResult = {
  __typename?: 'SignInResult';
  accessToken: Scalars['String']['output'];
  baseUser: BaseUserType;
  refreshToken?: Maybe<Scalars['String']['output']>;
};

export type SignInWithGoogleInput = {
  token: Scalars['String']['input'];
};

export type SignInWithRefreshTokenInput = {
  refreshToken: Scalars['String']['input'];
};

export type SignInWithRefreshTokenResult = {
  __typename?: 'SignInWithRefreshTokenResult';
  accessToken: Scalars['String']['output'];
  baseUser: BaseUserType;
};

export type SignUpWithEmailInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SigninWithEmailInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum UserErrors {
  InsufficientPrivileges = 'INSUFFICIENT_PRIVILEGES',
  UserNotFound = 'USER_NOT_FOUND',
  UserWithEmailExists = 'USER_WITH_EMAIL_EXISTS',
  UserWithPhoneExists = 'USER_WITH_PHONE_EXISTS'
}

export type VerifyEmailInput = {
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Sign_Up_With_EmailMutationVariables = Exact<{
  signUpWithEmailInput: SignUpWithEmailInput;
}>;


export type Sign_Up_With_EmailMutation = { __typename?: 'Mutation', signUpWithEmail: boolean };

export type Verify_EmailMutationVariables = Exact<{
  verifyEmailInput: VerifyEmailInput;
}>;


export type Verify_EmailMutation = { __typename?: 'Mutation', verifyEmail: boolean };

export type Sign_In_With_EmailMutationVariables = Exact<{
  signInWithEmailInput: SigninWithEmailInput;
  refreshTokenMode: RefreshTokenMode;
}>;


export type Sign_In_With_EmailMutation = { __typename?: 'Mutation', signInWithEmail: { __typename?: 'SignInResult', accessToken: string, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } } };

export type Sign_In_With_GoogleMutationVariables = Exact<{
  signInWithGoogleInput: SignInWithGoogleInput;
  refreshTokenMode: RefreshTokenMode;
}>;


export type Sign_In_With_GoogleMutation = { __typename?: 'Mutation', signInWithGoogle: { __typename?: 'SignInResult', accessToken: string, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } } };

export type Sign_In_With_Refresh_TokenQueryVariables = Exact<{
  signInWithRefreshTokenInput: SignInWithRefreshTokenInput;
}>;


export type Sign_In_With_Refresh_TokenQuery = { __typename?: 'Query', signInWithRefreshToken: { __typename?: 'SignInWithRefreshTokenResult', accessToken: string, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } } };

export type Sign_In_With_Refresh_Token_CookieQueryVariables = Exact<{ [key: string]: never; }>;


export type Sign_In_With_Refresh_Token_CookieQuery = { __typename?: 'Query', signInWithRefreshTokenCookie: { __typename?: 'SignInWithRefreshTokenResult', accessToken: string, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } } };

export type Sign_Out_With_Refresh_Token_CookieMutationVariables = Exact<{ [key: string]: never; }>;


export type Sign_Out_With_Refresh_Token_CookieMutation = { __typename?: 'Mutation', signOutWithRefreshTokenCookie: boolean };


export const Sign_Up_With_EmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_UP_WITH_EMAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpWithEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpWithEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpWithEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpWithEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpWithEmailInput"}}}]}]}}]} as unknown as DocumentNode<Sign_Up_With_EmailMutation, Sign_Up_With_EmailMutationVariables>;
export const Verify_EmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VERIFY_EMAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verifyEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"verifyEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verifyEmailInput"}}}]}]}}]} as unknown as DocumentNode<Verify_EmailMutation, Verify_EmailMutationVariables>;
export const Sign_In_With_EmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_IN_WITH_EMAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInWithEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SigninWithEmailInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshTokenMode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RefreshTokenMode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInWithEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInWithEmailInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"refreshTokenMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshTokenMode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<Sign_In_With_EmailMutation, Sign_In_With_EmailMutationVariables>;
export const Sign_In_With_GoogleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_IN_WITH_GOOGLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInWithGoogleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInWithGoogleInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshTokenMode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RefreshTokenMode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithGoogle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInWithGoogleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInWithGoogleInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"refreshTokenMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshTokenMode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<Sign_In_With_GoogleMutation, Sign_In_With_GoogleMutationVariables>;
export const Sign_In_With_Refresh_TokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SIGN_IN_WITH_REFRESH_TOKEN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInWithRefreshTokenInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInWithRefreshTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithRefreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInWithRefreshTokenInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInWithRefreshTokenInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<Sign_In_With_Refresh_TokenQuery, Sign_In_With_Refresh_TokenQueryVariables>;
export const Sign_In_With_Refresh_Token_CookieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SIGN_IN_WITH_REFRESH_TOKEN_COOKIE"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithRefreshTokenCookie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<Sign_In_With_Refresh_Token_CookieQuery, Sign_In_With_Refresh_Token_CookieQueryVariables>;
export const Sign_Out_With_Refresh_Token_CookieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_OUT_WITH_REFRESH_TOKEN_COOKIE"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signOutWithRefreshTokenCookie"}}]}}]} as unknown as DocumentNode<Sign_Out_With_Refresh_Token_CookieMutation, Sign_Out_With_Refresh_Token_CookieMutationVariables>;