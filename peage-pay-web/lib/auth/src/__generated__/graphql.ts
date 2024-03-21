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

export type AddHighwayInput = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AddHumanRessourcesAdminRoleInput = {
  baseUserId: Scalars['String']['input'];
};

export type AddSectionInput = {
  distance: Scalars['Float']['input'];
  fromTollId: Scalars['String']['input'];
  status: SectionStatusType;
  toTollId: Scalars['String']['input'];
};

export type AddSubscriptionInput = {
  days: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type AddTollInput = {
  highwayId: Scalars['String']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  tollNetworkId: Scalars['String']['input'];
  wilayaId: Scalars['String']['input'];
};

export type AddTollNetworkInput = {
  name: Scalars['String']['input'];
};

export enum AuthErrors {
  EmailAlreadyVerified = 'EMAIL_ALREADY_VERIFIED',
  EmailAuthNotFound = 'EMAIL_AUTH_NOT_FOUND',
  EmailVerificationAttemptsExceeded = 'EMAIL_VERIFICATION_ATTEMPTS_EXCEEDED',
  InvalidEmailOrPassword = 'INVALID_EMAIL_OR_PASSWORD',
  PasswordResetAttemptsExceeded = 'PASSWORD_RESET_ATTEMPTS_EXCEEDED',
  PhoneAuthNotFound = 'PHONE_AUTH_NOT_FOUND',
  SignInWithEmaIlAttemptsExceeded = 'SIGN_IN_WITH_EMAIl_ATTEMPTS_EXCEEDED',
  VerificationRequestPending = 'VERIFICATION_REQUEST_PENDING'
}

export type BaseUserByIdInput = {
  baseUserId: Scalars['String']['input'];
};

export enum BaseUserErrors {
  BaseUserNotFound = 'BASE_USER_NOT_FOUND',
  BaseUserWithEmailExists = 'BASE_USER_WITH_EMAIL_EXISTS',
  BaseUserWithPhoneExists = 'BASE_USER_WITH_PHONE_EXISTS',
  HumanRessourcesAdminRoleAlreadyAssigned = 'HUMAN_RESSOURCES_ADMIN_ROLE_ALREADY_ASSIGNED',
  InsufficientPrivileges = 'INSUFFICIENT_PRIVILEGES'
}

export type BaseUserListInput = {
  firstNameSearch?: InputMaybe<Scalars['String']['input']>;
  idSearch?: InputMaybe<Scalars['String']['input']>;
  lastNameSearch?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
};

export type BaseUserListResult = {
  __typename?: 'BaseUserListResult';
  count: Scalars['Float']['output'];
  list: Array<BaseUserType>;
};

export enum BaseUserRolesType {
  GateAdmin = 'GATE_ADMIN',
  GeneralAdmin = 'GENERAL_ADMIN',
  HumanRessourcesAdmin = 'HUMAN_RESSOURCES_ADMIN',
  Moderator = 'MODERATOR',
  TollAdmin = 'TOLL_ADMIN',
  User = 'USER'
}

export enum BaseUserSearchFields {
  FirstNameSearch = 'firstNameSearch',
  IdSearch = 'idSearch',
  LastNameSearch = 'lastNameSearch'
}

export type BaseUserType = {
  __typename?: 'BaseUserType';
  createdAt: Scalars['DateTime']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  roles: Array<BaseUserRolesType>;
  updatedAt: Scalars['DateTime']['output'];
};

export type DeleteHighwayInput = {
  highwayId: Scalars['String']['input'];
};

export type DeleteSectionInput = {
  fromTollId: Scalars['String']['input'];
  toTollId: Scalars['String']['input'];
};

export type DeleteSubscriptionInput = {
  subscriptionId: Scalars['String']['input'];
};

export type DeleteTollInput = {
  tollId: Scalars['String']['input'];
};

export type DeleteTollNetworkInput = {
  tollNetworkId: Scalars['String']['input'];
};

export type EditHighwayInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  highwayId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EditSectionInput = {
  distance: Scalars['Float']['input'];
  fromTollId: Scalars['String']['input'];
  status: SectionStatusType;
  toTollId: Scalars['String']['input'];
};

export type EditSubscriptionInput = {
  days?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  subscriptionId: Scalars['String']['input'];
};

export type EditTollInput = {
  highwayId?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<TollStatusType>;
  tollId: Scalars['String']['input'];
  wilayaId?: InputMaybe<Scalars['String']['input']>;
};

export type EditTollNetworkInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  tollNetworkId: Scalars['String']['input'];
};

export type FullTollListInput = {
  tollNetworkId: Scalars['String']['input'];
};

export type GenerateTollDistancesInput = {
  tollNetworkId: Scalars['String']['input'];
};

export type HighwayByIdInput = {
  highwayId: Scalars['String']['input'];
};

export enum HighwayErrors {
  HighwayExists = 'HIGHWAY_EXISTS'
}

export type HighwayListInput = {
  codeSearch?: InputMaybe<Scalars['String']['input']>;
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
};

export type HighwayListResult = {
  __typename?: 'HighwayListResult';
  count: Scalars['Float']['output'];
  list: Array<HighwayType>;
};

export enum HighwaySearchFields {
  CodeSearch = 'codeSearch',
  IdSearch = 'idSearch',
  NameSearch = 'nameSearch'
}

export type HighwayType = {
  __typename?: 'HighwayType';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addHighway: HighwayType;
  addHumanRessoucesAdminRole: Scalars['Boolean']['output'];
  addSection: SectionType;
  addSubscription: SubscriptionType;
  addToll: TollType;
  addTollNetwork: TollNetworkType;
  deleteHighway: Scalars['Boolean']['output'];
  deleteSection: Scalars['Boolean']['output'];
  deleteSubscription: Scalars['Boolean']['output'];
  deleteToll: Scalars['Boolean']['output'];
  deleteTollNetwork: Scalars['Boolean']['output'];
  editHighway: HighwayType;
  editSection: SectionType;
  editSubscription: SubscriptionType;
  editToll: TollType;
  editTollNetwork: TollNetworkType;
  generateTollDistances: Scalars['Boolean']['output'];
  removeHumanRessoucesAdminRole: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  sendPasswordResetEmail: Scalars['Boolean']['output'];
  signInWithEmail: SignInResult;
  signInWithGoogle: SignInResult;
  signOut: Scalars['Boolean']['output'];
  signOutWithRefreshTokenCookie: Scalars['Boolean']['output'];
  signUpWithEmail: Scalars['Boolean']['output'];
  signUpWithPhone: SignUpWithPhoneResult;
  verifyEmail: Scalars['Boolean']['output'];
};


export type MutationAddHighwayArgs = {
  addHighwayInput: AddHighwayInput;
};


export type MutationAddHumanRessoucesAdminRoleArgs = {
  addHumanRessoucesAdminRoleInput: AddHumanRessourcesAdminRoleInput;
};


export type MutationAddSectionArgs = {
  addSectionInput: AddSectionInput;
};


export type MutationAddSubscriptionArgs = {
  addSubscriptionInput: AddSubscriptionInput;
};


export type MutationAddTollArgs = {
  addTollInput: AddTollInput;
};


export type MutationAddTollNetworkArgs = {
  addTollNetworkInput: AddTollNetworkInput;
};


export type MutationDeleteHighwayArgs = {
  deleteHighwayInput: DeleteHighwayInput;
};


export type MutationDeleteSectionArgs = {
  deleteSectionInput: DeleteSectionInput;
};


export type MutationDeleteSubscriptionArgs = {
  deleteSubscriptionInput: DeleteSubscriptionInput;
};


export type MutationDeleteTollArgs = {
  deleteTollInput: DeleteTollInput;
};


export type MutationDeleteTollNetworkArgs = {
  deleteTollNetworkInput: DeleteTollNetworkInput;
};


export type MutationEditHighwayArgs = {
  editHighwayInput: EditHighwayInput;
};


export type MutationEditSectionArgs = {
  editSectionInput: EditSectionInput;
};


export type MutationEditSubscriptionArgs = {
  editSubscriptionInput: EditSubscriptionInput;
};


export type MutationEditTollArgs = {
  editTollInput: EditTollInput;
};


export type MutationEditTollNetworkArgs = {
  editTollNetworkInput: EditTollNetworkInput;
};


export type MutationGenerateTollDistancesArgs = {
  generateTollDistancesInput: GenerateTollDistancesInput;
};


export type MutationRemoveHumanRessoucesAdminRoleArgs = {
  removeHumanRessoucesAdminRoleInput: RemoveHumanRessourcesAdminRoleInput;
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


export type MutationSignUpWithPhoneArgs = {
  signUpWithPhoneInput: SignUpWithPhoneInput;
};


export type MutationVerifyEmailArgs = {
  verifyEmailInput: VerifyEmailInput;
};

export type Query = {
  __typename?: 'Query';
  baseUserById?: Maybe<BaseUserType>;
  baseUserList: BaseUserListResult;
  fullTollList: Array<TollType>;
  highwayById?: Maybe<HighwayType>;
  highwayList: HighwayListResult;
  lol: Scalars['String']['output'];
  sectionListForToll: SectionListResult;
  sectionListForTollNetwork: Array<SectionType>;
  signInWithRefreshToken: SignInWithRefreshTokenResult;
  signInWithRefreshTokenCookie: SignInWithRefreshTokenResult;
  subscriptionById?: Maybe<SubscriptionType>;
  subscriptionList: SubscriptionListResult;
  tollById: TollType;
  tollList: TollListResult;
  tollNetworkById: TollNetworkType;
  tollNetworkList: TollNetworkListResult;
  wilayaById: WilayaType;
  wilayaList: WilayaListResult;
};


export type QueryBaseUserByIdArgs = {
  baseUserByIdInput: BaseUserByIdInput;
};


export type QueryBaseUserListArgs = {
  baseUserListInput: BaseUserListInput;
};


export type QueryFullTollListArgs = {
  fullTollListInput: FullTollListInput;
};


export type QueryHighwayByIdArgs = {
  highwayByIdInput: HighwayByIdInput;
};


export type QueryHighwayListArgs = {
  highwayListInput: HighwayListInput;
};


export type QuerySectionListForTollArgs = {
  sectionListForTollInput: SectionListForTollInput;
};


export type QuerySectionListForTollNetworkArgs = {
  sectionListForTollNetworkInput: SectionListForTollNetworkInput;
};


export type QuerySignInWithRefreshTokenArgs = {
  signInWithRefreshTokenInput: SignInWithRefreshTokenInput;
};


export type QuerySubscriptionByIdArgs = {
  subscriptionByIdInput: SubscriptionByIdInput;
};


export type QuerySubscriptionListArgs = {
  subscriptionListInput: SubscriptionListInput;
};


export type QueryTollByIdArgs = {
  tollByIdInput: TollByIdInput;
};


export type QueryTollListArgs = {
  tollListInput: TollListInput;
};


export type QueryTollNetworkByIdArgs = {
  tollNetworkByIdInput: TollNetworkByIdInput;
};


export type QueryTollNetworkListArgs = {
  tollNetworkListInput: TollNetworkListInput;
};


export type QueryWilayaByIdArgs = {
  wilayaByIdInput: WilayaByIdInput;
};


export type QueryWilayaListArgs = {
  wilayaListInput: WilayaListInput;
};

export enum RefreshTokenMode {
  Cookie = 'COOKIE',
  PlainText = 'PLAIN_TEXT'
}

export type RemoveHumanRessourcesAdminRoleInput = {
  baseUserId: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type SectionListForTollInput = {
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
  tollId: Scalars['String']['input'];
};

export type SectionListForTollNetworkInput = {
  tollNetworkId: Scalars['String']['input'];
};

export type SectionListResult = {
  __typename?: 'SectionListResult';
  count: Scalars['Float']['output'];
  list: Array<SectionType>;
};

export enum SectionStatusType {
  Blocked = 'BLOCKED',
  HighTraffic = 'HIGH_TRAFFIC',
  ModerateTraffic = 'MODERATE_TRAFFIC',
  NormalTraffic = 'NORMAL_TRAFFIC'
}

export type SectionType = {
  __typename?: 'SectionType';
  distance: Scalars['Float']['output'];
  fromToll: TollType;
  fromTollId: Scalars['String']['output'];
  status: SectionStatusType;
  toToll: TollType;
  toTollId: Scalars['String']['output'];
};

export type SendResetPasswordEmailInput = {
  email: Scalars['String']['input'];
};

export type SignInResult = {
  __typename?: 'SignInResult';
  accessToken: Scalars['String']['output'];
  baseUser: BaseUserType;
  refreshToken?: Maybe<Scalars['String']['output']>;
  roles: Array<BaseUserRolesType>;
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
  roles: Array<BaseUserRolesType>;
};

export type SignUpWithEmailInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpWithPhoneInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type SignUpWithPhoneResult = {
  __typename?: 'SignUpWithPhoneResult';
  userId: Scalars['String']['output'];
};

export type SigninWithEmailInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SubscriptionByIdInput = {
  subscriptionId: Scalars['String']['input'];
};

export type SubscriptionListInput = {
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
};

export type SubscriptionListResult = {
  __typename?: 'SubscriptionListResult';
  count: Scalars['Float']['output'];
  list: Array<SubscriptionType>;
};

export enum SubscriptionSearchFields {
  IdSearch = 'idSearch',
  NameSearch = 'nameSearch'
}

export type SubscriptionType = {
  __typename?: 'SubscriptionType';
  createdAt: Scalars['DateTime']['output'];
  days: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum TokenErrors {
  AccessTokenNotProvided = 'ACCESS_TOKEN_NOT_PROVIDED',
  InvalidAccessToken = 'INVALID_ACCESS_TOKEN',
  InvalidGoogleOauthToken = 'INVALID_GOOGLE_OAUTH_TOKEN',
  InvalidRefreshToken = 'INVALID_REFRESH_TOKEN',
  InvalidVerificationToken = 'INVALID_VERIFICATION_TOKEN',
  RefreshTokenNotProvided = 'REFRESH_TOKEN_NOT_PROVIDED',
  VerificationTokenExpired = 'VERIFICATION_TOKEN_EXPIRED',
  VerificationTokenNotFound = 'VERIFICATION_TOKEN_NOT_FOUND'
}

export type TollByIdInput = {
  tollId: Scalars['String']['input'];
};

export enum TollErrors {
  TollExists = 'TOLL_EXISTS'
}

export type TollListInput = {
  highwayCodeSearch?: InputMaybe<Scalars['String']['input']>;
  highwayNameSearch?: InputMaybe<Scalars['String']['input']>;
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  skip: Scalars['Float']['input'];
  statusSearch?: InputMaybe<TollStatusType>;
  take: Scalars['Float']['input'];
  tollNetworkId: Scalars['String']['input'];
  wilayaCodeSearch?: InputMaybe<Scalars['String']['input']>;
  wilayaNameSearch?: InputMaybe<Scalars['String']['input']>;
};

export type TollListResult = {
  __typename?: 'TollListResult';
  count: Scalars['Float']['output'];
  list: Array<TollType>;
};

export type TollNetworkByIdInput = {
  tollNetworkId: Scalars['String']['input'];
};

export type TollNetworkListInput = {
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
};

export type TollNetworkListResult = {
  __typename?: 'TollNetworkListResult';
  count: Scalars['Float']['output'];
  list: Array<TollNetworkType>;
};

export enum TollNetworkSearchFields {
  IdSearch = 'idSearch',
  NameSearch = 'nameSearch'
}

export type TollNetworkType = {
  __typename?: 'TollNetworkType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum TollSearchFields {
  HighwayCodeSearch = 'highwayCodeSearch',
  HighwayNameSearch = 'highwayNameSearch',
  IdSearch = 'idSearch',
  NameSearch = 'nameSearch',
  WilayaCodeSearch = 'wilayaCodeSearch',
  WilayaNameSearch = 'wilayaNameSearch'
}

export enum TollStatusType {
  HighTraffic = 'HIGH_TRAFFIC',
  ModerateTraffic = 'MODERATE_TRAFFIC',
  NormalTraffic = 'NORMAL_TRAFFIC',
  OutOfService = 'OUT_OF_SERVICE'
}

export type TollType = {
  __typename?: 'TollType';
  createdAt: Scalars['DateTime']['output'];
  highway: HighwayType;
  highwayId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  status: TollStatusType;
  tollNetwork: TollNetworkType;
  tollNetworkId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  wilaya: WilayaType;
  wilayaId: Scalars['String']['output'];
};

export type VerifyEmailInput = {
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type WilayaByIdInput = {
  wilayaId: Scalars['String']['input'];
};

export type WilayaListInput = {
  codeSearch?: InputMaybe<Scalars['String']['input']>;
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
};

export type WilayaListResult = {
  __typename?: 'WilayaListResult';
  count: Scalars['Float']['output'];
  list: Array<WilayaType>;
};

export enum WilayaSearchFields {
  CodeSearch = 'codeSearch',
  IdSearch = 'idSearch',
  NameSearch = 'nameSearch'
}

export type WilayaType = {
  __typename?: 'WilayaType';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Sign_Up_With_EmailMutationVariables = Exact<{
  signUpWithEmailInput: SignUpWithEmailInput;
}>;


export type Sign_Up_With_EmailMutation = { __typename?: 'Mutation', signUpWithEmail: boolean };

export type Verify_EmailMutationVariables = Exact<{
  verifyEmailInput: VerifyEmailInput;
}>;


export type Verify_EmailMutation = { __typename?: 'Mutation', verifyEmail: boolean };

export type Send_Password_Reset_EmailMutationVariables = Exact<{
  sendPasswordResetEmailInput: SendResetPasswordEmailInput;
}>;


export type Send_Password_Reset_EmailMutation = { __typename?: 'Mutation', sendPasswordResetEmail: boolean };

export type Reset_PasswordMutationVariables = Exact<{
  resetPasswordInput: ResetPasswordInput;
}>;


export type Reset_PasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type Sign_In_With_EmailMutationVariables = Exact<{
  signInWithEmailInput: SigninWithEmailInput;
  refreshTokenMode: RefreshTokenMode;
}>;


export type Sign_In_With_EmailMutation = { __typename?: 'Mutation', signInWithEmail: { __typename?: 'SignInResult', accessToken: string, roles: Array<BaseUserRolesType>, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } } };

export type Sign_In_With_GoogleMutationVariables = Exact<{
  signInWithGoogleInput: SignInWithGoogleInput;
  refreshTokenMode: RefreshTokenMode;
}>;


export type Sign_In_With_GoogleMutation = { __typename?: 'Mutation', signInWithGoogle: { __typename?: 'SignInResult', accessToken: string, roles: Array<BaseUserRolesType>, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } } };

export type Sign_Out_With_Refresh_Token_CookieMutationVariables = Exact<{ [key: string]: never; }>;


export type Sign_Out_With_Refresh_Token_CookieMutation = { __typename?: 'Mutation', signOutWithRefreshTokenCookie: boolean };

export type Sign_In_With_Refresh_TokenQueryVariables = Exact<{
  signInWithRefreshTokenInput: SignInWithRefreshTokenInput;
}>;


export type Sign_In_With_Refresh_TokenQuery = { __typename?: 'Query', signInWithRefreshToken: { __typename?: 'SignInWithRefreshTokenResult', accessToken: string, roles: Array<BaseUserRolesType>, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } } };

export type Sign_In_With_Refresh_Token_CookieQueryVariables = Exact<{ [key: string]: never; }>;


export type Sign_In_With_Refresh_Token_CookieQuery = { __typename?: 'Query', signInWithRefreshTokenCookie: { __typename?: 'SignInWithRefreshTokenResult', accessToken: string, roles: Array<BaseUserRolesType>, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } } };


export const Sign_Up_With_EmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_UP_WITH_EMAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpWithEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpWithEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpWithEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpWithEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpWithEmailInput"}}}]}]}}]} as unknown as DocumentNode<Sign_Up_With_EmailMutation, Sign_Up_With_EmailMutationVariables>;
export const Verify_EmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VERIFY_EMAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verifyEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"verifyEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verifyEmailInput"}}}]}]}}]} as unknown as DocumentNode<Verify_EmailMutation, Verify_EmailMutationVariables>;
export const Send_Password_Reset_EmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SEND_PASSWORD_RESET_EMAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sendPasswordResetEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendResetPasswordEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendPasswordResetEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sendPasswordResetEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sendPasswordResetEmailInput"}}}]}]}}]} as unknown as DocumentNode<Send_Password_Reset_EmailMutation, Send_Password_Reset_EmailMutationVariables>;
export const Reset_PasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RESET_PASSWORD"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"resetPasswordInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"resetPasswordInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"resetPasswordInput"}}}]}]}}]} as unknown as DocumentNode<Reset_PasswordMutation, Reset_PasswordMutationVariables>;
export const Sign_In_With_EmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_IN_WITH_EMAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInWithEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SigninWithEmailInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshTokenMode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RefreshTokenMode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInWithEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInWithEmailInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"refreshTokenMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshTokenMode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]} as unknown as DocumentNode<Sign_In_With_EmailMutation, Sign_In_With_EmailMutationVariables>;
export const Sign_In_With_GoogleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_IN_WITH_GOOGLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInWithGoogleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInWithGoogleInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshTokenMode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RefreshTokenMode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithGoogle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInWithGoogleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInWithGoogleInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"refreshTokenMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshTokenMode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]} as unknown as DocumentNode<Sign_In_With_GoogleMutation, Sign_In_With_GoogleMutationVariables>;
export const Sign_Out_With_Refresh_Token_CookieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_OUT_WITH_REFRESH_TOKEN_COOKIE"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signOutWithRefreshTokenCookie"}}]}}]} as unknown as DocumentNode<Sign_Out_With_Refresh_Token_CookieMutation, Sign_Out_With_Refresh_Token_CookieMutationVariables>;
export const Sign_In_With_Refresh_TokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SIGN_IN_WITH_REFRESH_TOKEN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInWithRefreshTokenInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInWithRefreshTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithRefreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInWithRefreshTokenInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInWithRefreshTokenInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]} as unknown as DocumentNode<Sign_In_With_Refresh_TokenQuery, Sign_In_With_Refresh_TokenQueryVariables>;
export const Sign_In_With_Refresh_Token_CookieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SIGN_IN_WITH_REFRESH_TOKEN_COOKIE"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithRefreshTokenCookie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]} as unknown as DocumentNode<Sign_In_With_Refresh_Token_CookieQuery, Sign_In_With_Refresh_Token_CookieQueryVariables>;