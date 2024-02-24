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
  EmailAlreadyVerified = 'EMAIL_ALREADY_VERIFIED',
  EmailAuthNotFound = 'EMAIL_AUTH_NOT_FOUND',
  InvalidEmailOrPassword = 'INVALID_EMAIL_OR_PASSWORD',
  InvalidRefreshToken = 'INVALID_REFRESH_TOKEN',
  InvalidVerificationToken = 'INVALID_VERIFICATION_TOKEN',
  PhoneAuthNotFound = 'PHONE_AUTH_NOT_FOUND',
  RefreshTokenNotProvided = 'REFRESH_TOKEN_NOT_PROVIDED',
  UserWithEmailExists = 'USER_WITH_EMAIL_EXISTS',
  UserWithPhoneExists = 'USER_WITH_PHONE_EXISTS',
  VerificationTokenExpired = 'VERIFICATION_TOKEN_EXPIRED',
  VerificationTokenNotFound = 'VERIFICATION_TOKEN_NOT_FOUND'
}

export type BaseUserType = {
  __typename?: 'BaseUserType';
  birthDate: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  firstName: Scalars['String']['output'];
  gender: GenderType;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum GenderType {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type Mutation = {
  __typename?: 'Mutation';
  signInWithEmail: SignInWithEmailResult;
  signInWithRefreshToken: SignInWithRefreshTokenResult;
  signInWithRefreshTokenCookie: SignInWithRefreshTokenResult;
  signUpWithEmail: Scalars['Boolean']['output'];
  signUpWithPhone: Scalars['Boolean']['output'];
  verifyEmail: Scalars['Boolean']['output'];
};


export type MutationSignInWithEmailArgs = {
  refreshTokenMode: RefreshTokenMode;
  signInWithEmailInput: SigninWithEmailInput;
};


export type MutationSignInWithRefreshTokenArgs = {
  signInWithRefreshTokenInput: SignInWithRefreshTokenInput;
};


export type MutationSignUpWithEmailArgs = {
  signUpWithEmailInput: SignUpWithEmailInput;
};


export type MutationSignUpWithPhoneArgs = {
  signUpWithPhoneInput: SignUpWithPhoneInput;
};


export type MutationVerifyEmailArgs = {
  verifyEmailInput: VerifyEmailInput;
};

export type Query = {
  __typename?: 'Query';
  lol: Scalars['String']['output'];
};

export enum RefreshTokenMode {
  Cookie = 'COOKIE',
  PlainText = 'PLAIN_TEXT'
}

export type SignInWithEmailResult = {
  __typename?: 'SignInWithEmailResult';
  baseUser: BaseUserType;
  refreshToken?: Maybe<Scalars['String']['output']>;
};

export type SignInWithRefreshTokenInput = {
  refreshToken: Scalars['String']['input'];
};

export type SignInWithRefreshTokenResult = {
  __typename?: 'SignInWithRefreshTokenResult';
  accessToken: Scalars['String']['output'];
  baseUser?: Maybe<BaseUserType>;
};

export type SignUpWithEmailInput = {
  birthDate: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gender: GenderType;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpWithPhoneInput = {
  birthDate: Scalars['DateTime']['input'];
  firstName: Scalars['String']['input'];
  gender: GenderType;
  lastName: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type SigninWithEmailInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum UserErrors {
  UserNotFound = 'USER_NOT_FOUND'
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


export type Sign_In_With_EmailMutation = { __typename?: 'Mutation', signInWithEmail: { __typename?: 'SignInWithEmailResult', refreshToken?: string | null, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, birthDate: any, gender: GenderType, createdAt: any, updatedAt: any } } };

export type Sign_Up_With_Refresh_TokenMutationVariables = Exact<{
  signUpWithEmailInput: SignUpWithEmailInput;
}>;


export type Sign_Up_With_Refresh_TokenMutation = { __typename?: 'Mutation', signUpWithEmail: boolean };

export type Sign_Up_With_Refresh_Token_CookieMutationVariables = Exact<{ [key: string]: never; }>;


export type Sign_Up_With_Refresh_Token_CookieMutation = { __typename?: 'Mutation', signInWithRefreshTokenCookie: { __typename?: 'SignInWithRefreshTokenResult', accessToken: string } };


export const Sign_Up_With_EmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_UP_WITH_EMAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpWithEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpWithEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpWithEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpWithEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpWithEmailInput"}}}]}]}}]} as unknown as DocumentNode<Sign_Up_With_EmailMutation, Sign_Up_With_EmailMutationVariables>;
export const Verify_EmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VERIFY_EMAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verifyEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"verifyEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verifyEmailInput"}}}]}]}}]} as unknown as DocumentNode<Verify_EmailMutation, Verify_EmailMutationVariables>;
export const Sign_In_With_EmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_IN_WITH_EMAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInWithEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SigninWithEmailInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshTokenMode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RefreshTokenMode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInWithEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInWithEmailInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"refreshTokenMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshTokenMode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<Sign_In_With_EmailMutation, Sign_In_With_EmailMutationVariables>;
export const Sign_Up_With_Refresh_TokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_UP_WITH_REFRESH_TOKEN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpWithEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpWithEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpWithEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpWithEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpWithEmailInput"}}}]}]}}]} as unknown as DocumentNode<Sign_Up_With_Refresh_TokenMutation, Sign_Up_With_Refresh_TokenMutationVariables>;
export const Sign_Up_With_Refresh_Token_CookieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_UP_WITH_REFRESH_TOKEN_COOKIE"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithRefreshTokenCookie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<Sign_Up_With_Refresh_Token_CookieMutation, Sign_Up_With_Refresh_Token_CookieMutationVariables>;