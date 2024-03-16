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

export type AddGraphTollDistanceInput = {
  distance: Scalars['Float']['input'];
  fromTollId: Scalars['String']['input'];
  toTollId: Scalars['String']['input'];
};

export type AddHighwayInput = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AddHumanRessourcesAdminRoleInput = {
  baseUserId: Scalars['String']['input'];
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

export type DeleteGraphTollDistanceInput = {
  fromTollId: Scalars['String']['input'];
  toTollId: Scalars['String']['input'];
};

export type DeleteHighwayInput = {
  highwayId: Scalars['String']['input'];
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

export type GraphTollDistanceListForTollInput = {
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
  tollId: Scalars['String']['input'];
};

export type GraphTollDistanceListForTollNetworkInput = {
  tollNetworkId: Scalars['String']['input'];
};

export type GraphTollDistanceListResult = {
  __typename?: 'GraphTollDistanceListResult';
  count: Scalars['Float']['output'];
  list: Array<GraphTollDistanceType>;
};

export type GraphTollDistanceType = {
  __typename?: 'GraphTollDistanceType';
  distance: Scalars['Float']['output'];
  fromToll: TollType;
  fromTollId: Scalars['String']['output'];
  toToll: TollType;
  toTollId: Scalars['String']['output'];
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
  addGraphTollDistance: GraphTollDistanceType;
  addHighway: HighwayType;
  addHumanRessoucesAdminRole: Scalars['Boolean']['output'];
  addSubscription: SubscriptionType;
  addToll: TollType;
  addTollNetwork: TollNetworkType;
  deleteGraphTollDistance: Scalars['Boolean']['output'];
  deleteHighway: Scalars['Boolean']['output'];
  deleteSubscription: Scalars['Boolean']['output'];
  deleteToll: Scalars['Boolean']['output'];
  deleteTollNetwork: Scalars['Boolean']['output'];
  editHighway: HighwayType;
  editSubscription: SubscriptionType;
  editToll: TollType;
  editTollNetwork: TollNetworkType;
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


export type MutationAddGraphTollDistanceArgs = {
  addGraphTollDistanceInput: AddGraphTollDistanceInput;
};


export type MutationAddHighwayArgs = {
  addHighwayInput: AddHighwayInput;
};


export type MutationAddHumanRessoucesAdminRoleArgs = {
  addHumanRessoucesAdminRoleInput: AddHumanRessourcesAdminRoleInput;
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


export type MutationDeleteGraphTollDistanceArgs = {
  deleteGraphTollDistanceInput: DeleteGraphTollDistanceInput;
};


export type MutationDeleteHighwayArgs = {
  deleteHighwayInput: DeleteHighwayInput;
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


export type MutationEditSubscriptionArgs = {
  editSubscriptionInput: EditSubscriptionInput;
};


export type MutationEditTollArgs = {
  editTollInput: EditTollInput;
};


export type MutationEditTollNetworkArgs = {
  editTollNetworkInput: EditTollNetworkInput;
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
  graphTollDistanceListForToll: GraphTollDistanceListResult;
  graphTollDistanceListForTollNetwork: Array<GraphTollDistanceType>;
  highwayById?: Maybe<HighwayType>;
  highwayList: HighwayListResult;
  lol: Scalars['String']['output'];
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


export type QueryGraphTollDistanceListForTollArgs = {
  graphTollDistanceListForTollInput: GraphTollDistanceListForTollInput;
};


export type QueryGraphTollDistanceListForTollNetworkArgs = {
  graphTollDistanceListForTollInput: GraphTollDistanceListForTollNetworkInput;
};


export type QueryHighwayByIdArgs = {
  highwayByIdInput: HighwayByIdInput;
};


export type QueryHighwayListArgs = {
  highwayListInput: HighwayListInput;
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
  TollNetworkNameSearch = 'tollNetworkNameSearch',
  WilayaCodeSearch = 'wilayaCodeSearch',
  WilayaNameSearch = 'wilayaNameSearch'
}

export enum TollStatusType {
  Active = 'ACTIVE',
  OutOfService = 'OUT_OF_SERVICE',
  Overload = 'OVERLOAD'
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

export type Add_HighwayMutationVariables = Exact<{
  addHighwayInput: AddHighwayInput;
}>;


export type Add_HighwayMutation = { __typename?: 'Mutation', addHighway: { __typename?: 'HighwayType', id: string, name: string, code: string, createdAt: any, updatedAt: any } };

export type Edit_HighwayMutationVariables = Exact<{
  editHighwayInput: EditHighwayInput;
}>;


export type Edit_HighwayMutation = { __typename?: 'Mutation', editHighway: { __typename?: 'HighwayType', id: string, name: string, code: string, createdAt: any, updatedAt: any } };

export type Delete_HighwayMutationVariables = Exact<{
  deleteHighwayInput: DeleteHighwayInput;
}>;


export type Delete_HighwayMutation = { __typename?: 'Mutation', deleteHighway: boolean };

export type Add_SubscriptionMutationVariables = Exact<{
  addSubscriptionInput: AddSubscriptionInput;
}>;


export type Add_SubscriptionMutation = { __typename?: 'Mutation', addSubscription: { __typename?: 'SubscriptionType', id: string, name: string, days: number, price: number, createdAt: any, updatedAt: any } };

export type Edit_SubscriptionMutationVariables = Exact<{
  editSubscriptionInput: EditSubscriptionInput;
}>;


export type Edit_SubscriptionMutation = { __typename?: 'Mutation', editSubscription: { __typename?: 'SubscriptionType', id: string, name: string, days: number, price: number, createdAt: any, updatedAt: any } };

export type Delete_SubscriptionMutationVariables = Exact<{
  deleteSubscriptionInput: DeleteSubscriptionInput;
}>;


export type Delete_SubscriptionMutation = { __typename?: 'Mutation', deleteSubscription: boolean };

export type Add_TollMutationVariables = Exact<{
  addTollInput: AddTollInput;
}>;


export type Add_TollMutation = { __typename?: 'Mutation', addToll: { __typename?: 'TollType', id: string, name: string, status: TollStatusType, longitude: number, latitude: number, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', id: string, name: string, code: string }, highway: { __typename?: 'HighwayType', id: string, name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', id: string, name: string } } };

export type Edit_TollMutationVariables = Exact<{
  editTollInput: EditTollInput;
}>;


export type Edit_TollMutation = { __typename?: 'Mutation', editToll: { __typename?: 'TollType', id: string, name: string, status: TollStatusType, longitude: number, latitude: number, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', id: string, name: string, code: string }, highway: { __typename?: 'HighwayType', id: string, name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', id: string, name: string } } };

export type Delete_TollMutationVariables = Exact<{
  deleteTollInput: DeleteTollInput;
}>;


export type Delete_TollMutation = { __typename?: 'Mutation', deleteToll: boolean };

export type Add_Toll_NetworkMutationVariables = Exact<{
  addTollNetworkInput: AddTollNetworkInput;
}>;


export type Add_Toll_NetworkMutation = { __typename?: 'Mutation', addTollNetwork: { __typename?: 'TollNetworkType', id: string, name: string, createdAt: any, updatedAt: any } };

export type Edit_Toll_NetworkMutationVariables = Exact<{
  editTollNetworkInput: EditTollNetworkInput;
}>;


export type Edit_Toll_NetworkMutation = { __typename?: 'Mutation', editTollNetwork: { __typename?: 'TollNetworkType', id: string, name: string, createdAt: any, updatedAt: any } };

export type Delete_Toll_NetworkMutationVariables = Exact<{
  deleteTollNetworkInput: DeleteTollNetworkInput;
}>;


export type Delete_Toll_NetworkMutation = { __typename?: 'Mutation', deleteTollNetwork: boolean };

export type Add_Graph_Toll_DistanceMutationVariables = Exact<{
  addGraphTollDistanceInput: AddGraphTollDistanceInput;
}>;


export type Add_Graph_Toll_DistanceMutation = { __typename?: 'Mutation', addGraphTollDistance: { __typename?: 'GraphTollDistanceType', fromTollId: string, toTollId: string, distance: number } };

export type Delete_Graph_Toll_DistanceMutationVariables = Exact<{
  deleteGraphTollDistanceInput: DeleteGraphTollDistanceInput;
}>;


export type Delete_Graph_Toll_DistanceMutation = { __typename?: 'Mutation', deleteGraphTollDistance: boolean };

export type Add_Human_Ressources_Admin_RoleMutationVariables = Exact<{
  addHumanRessoucesAdminRoleInput: AddHumanRessourcesAdminRoleInput;
}>;


export type Add_Human_Ressources_Admin_RoleMutation = { __typename?: 'Mutation', addHumanRessoucesAdminRole: boolean };

export type Remove_Human_Ressources_Admin_RoleMutationVariables = Exact<{
  removeHumanRessoucesAdminRoleInput: RemoveHumanRessourcesAdminRoleInput;
}>;


export type Remove_Human_Ressources_Admin_RoleMutation = { __typename?: 'Mutation', removeHumanRessoucesAdminRole: boolean };

export type Highway_ListQueryVariables = Exact<{
  highwayListInput: HighwayListInput;
}>;


export type Highway_ListQuery = { __typename?: 'Query', highwayList: { __typename?: 'HighwayListResult', count: number, list: Array<{ __typename?: 'HighwayType', id: string, name: string, code: string, createdAt: any, updatedAt: any }> } };

export type Highway_By_IdQueryVariables = Exact<{
  highwayByIdInput: HighwayByIdInput;
}>;


export type Highway_By_IdQuery = { __typename?: 'Query', highwayById?: { __typename?: 'HighwayType', code: string, id: string, name: string, createdAt: any, updatedAt: any } | null };

export type Subscription_ListQueryVariables = Exact<{
  subscriptionListInput: SubscriptionListInput;
}>;


export type Subscription_ListQuery = { __typename?: 'Query', subscriptionList: { __typename?: 'SubscriptionListResult', count: number, list: Array<{ __typename?: 'SubscriptionType', id: string, name: string, days: number, price: number, createdAt: any, updatedAt: any }> } };

export type Subscription_By_IdQueryVariables = Exact<{
  subscriptionByIdInput: SubscriptionByIdInput;
}>;


export type Subscription_By_IdQuery = { __typename?: 'Query', subscriptionById?: { __typename?: 'SubscriptionType', id: string, name: string, days: number, price: number, createdAt: any, updatedAt: any } | null };

export type Full_Toll_ListQueryVariables = Exact<{
  fullTollListInput: FullTollListInput;
}>;


export type Full_Toll_ListQuery = { __typename?: 'Query', fullTollList: Array<{ __typename?: 'TollType', id: string, name: string, status: TollStatusType, longitude: number, latitude: number, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', id: string, name: string, code: string }, highway: { __typename?: 'HighwayType', id: string, name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', id: string, name: string } }> };

export type Toll_ListQueryVariables = Exact<{
  tollListInput: TollListInput;
}>;


export type Toll_ListQuery = { __typename?: 'Query', tollList: { __typename?: 'TollListResult', count: number, list: Array<{ __typename?: 'TollType', id: string, name: string, status: TollStatusType, longitude: number, latitude: number, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', id: string, name: string, code: string }, highway: { __typename?: 'HighwayType', id: string, name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', id: string, name: string } }> } };

export type Toll_By_IdQueryVariables = Exact<{
  tollByIdInput: TollByIdInput;
}>;


export type Toll_By_IdQuery = { __typename?: 'Query', tollById: { __typename?: 'TollType', id: string, name: string, status: TollStatusType, longitude: number, latitude: number, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', id: string, name: string, code: string }, highway: { __typename?: 'HighwayType', id: string, name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', id: string, name: string } } };

export type Toll_Network_ListQueryVariables = Exact<{
  tollNetworkListInput: TollNetworkListInput;
}>;


export type Toll_Network_ListQuery = { __typename?: 'Query', tollNetworkList: { __typename?: 'TollNetworkListResult', count: number, list: Array<{ __typename?: 'TollNetworkType', id: string, name: string, createdAt: any, updatedAt: any }> } };

export type Toll_Network_By_IdQueryVariables = Exact<{
  tollNetworkByIdInput: TollNetworkByIdInput;
}>;


export type Toll_Network_By_IdQuery = { __typename?: 'Query', tollNetworkById: { __typename?: 'TollNetworkType', id: string, name: string, createdAt: any, updatedAt: any } };

export type Wilaya_ListQueryVariables = Exact<{
  wilayaListInput: WilayaListInput;
}>;


export type Wilaya_ListQuery = { __typename?: 'Query', wilayaList: { __typename?: 'WilayaListResult', count: number, list: Array<{ __typename?: 'WilayaType', id: string, name: string, code: string }> } };

export type Wilaya_By_IdQueryVariables = Exact<{
  wilayaByIdInput: WilayaByIdInput;
}>;


export type Wilaya_By_IdQuery = { __typename?: 'Query', wilayaById: { __typename?: 'WilayaType', id: string, name: string, code: string } };

export type Graph_Toll_Distance_List_For_Toll_NetworkQueryVariables = Exact<{
  graphTollDistanceListForTollInput: GraphTollDistanceListForTollNetworkInput;
}>;


export type Graph_Toll_Distance_List_For_Toll_NetworkQuery = { __typename?: 'Query', graphTollDistanceListForTollNetwork: Array<{ __typename?: 'GraphTollDistanceType', distance: number, fromToll: { __typename?: 'TollType', id: string, name: string, latitude: number, longitude: number }, toToll: { __typename?: 'TollType', id: string, name: string, latitude: number, longitude: number } }> };

export type Graph_Toll_Distance_List_For_TollQueryVariables = Exact<{
  graphTollDistanceListForTollInput: GraphTollDistanceListForTollInput;
}>;


export type Graph_Toll_Distance_List_For_TollQuery = { __typename?: 'Query', graphTollDistanceListForToll: { __typename?: 'GraphTollDistanceListResult', count: number, list: Array<{ __typename?: 'GraphTollDistanceType', distance: number, fromToll: { __typename?: 'TollType', id: string, name: string }, toToll: { __typename?: 'TollType', id: string, name: string } }> } };

export type Base_User_ListQueryVariables = Exact<{
  baseUserListInput: BaseUserListInput;
}>;


export type Base_User_ListQuery = { __typename?: 'Query', baseUserList: { __typename?: 'BaseUserListResult', count: number, list: Array<{ __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any, roles: Array<BaseUserRolesType> }> } };


export const Add_HighwayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_HIGHWAY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addHighwayInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddHighwayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addHighway"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addHighwayInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addHighwayInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Add_HighwayMutation, Add_HighwayMutationVariables>;
export const Edit_HighwayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_HIGHWAY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editHighwayInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditHighwayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editHighway"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editHighwayInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editHighwayInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Edit_HighwayMutation, Edit_HighwayMutationVariables>;
export const Delete_HighwayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_HIGHWAY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteHighwayInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteHighwayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteHighway"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteHighwayInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteHighwayInput"}}}]}]}}]} as unknown as DocumentNode<Delete_HighwayMutation, Delete_HighwayMutationVariables>;
export const Add_SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_SUBSCRIPTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addSubscriptionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addSubscriptionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addSubscriptionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Add_SubscriptionMutation, Add_SubscriptionMutationVariables>;
export const Edit_SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_SUBSCRIPTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editSubscriptionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editSubscriptionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editSubscriptionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Edit_SubscriptionMutation, Edit_SubscriptionMutationVariables>;
export const Delete_SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_SUBSCRIPTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSubscriptionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteSubscriptionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSubscriptionInput"}}}]}]}}]} as unknown as DocumentNode<Delete_SubscriptionMutation, Delete_SubscriptionMutationVariables>;
export const Add_TollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_TOLL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddTollInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addTollInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Add_TollMutation, Add_TollMutationVariables>;
export const Edit_TollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_TOLL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditTollInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editToll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editTollInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Edit_TollMutation, Edit_TollMutationVariables>;
export const Delete_TollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_TOLL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteTollInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteToll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTollInput"}}}]}]}}]} as unknown as DocumentNode<Delete_TollMutation, Delete_TollMutationVariables>;
export const Add_Toll_NetworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_TOLL_NETWORK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addTollNetworkInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddTollNetworkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTollNetwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addTollNetworkInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addTollNetworkInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Add_Toll_NetworkMutation, Add_Toll_NetworkMutationVariables>;
export const Edit_Toll_NetworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_TOLL_NETWORK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editTollNetworkInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditTollNetworkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editTollNetwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editTollNetworkInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editTollNetworkInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Edit_Toll_NetworkMutation, Edit_Toll_NetworkMutationVariables>;
export const Delete_Toll_NetworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_TOLL_NETWORK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTollNetworkInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteTollNetworkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTollNetwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteTollNetworkInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTollNetworkInput"}}}]}]}}]} as unknown as DocumentNode<Delete_Toll_NetworkMutation, Delete_Toll_NetworkMutationVariables>;
export const Add_Graph_Toll_DistanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_GRAPH_TOLL_DISTANCE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addGraphTollDistanceInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddGraphTollDistanceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addGraphTollDistance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addGraphTollDistanceInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addGraphTollDistanceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fromTollId"}},{"kind":"Field","name":{"kind":"Name","value":"toTollId"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}}]}}]}}]} as unknown as DocumentNode<Add_Graph_Toll_DistanceMutation, Add_Graph_Toll_DistanceMutationVariables>;
export const Delete_Graph_Toll_DistanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_GRAPH_TOLL_DISTANCE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteGraphTollDistanceInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteGraphTollDistanceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteGraphTollDistance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteGraphTollDistanceInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteGraphTollDistanceInput"}}}]}]}}]} as unknown as DocumentNode<Delete_Graph_Toll_DistanceMutation, Delete_Graph_Toll_DistanceMutationVariables>;
export const Add_Human_Ressources_Admin_RoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_HUMAN_RESSOURCES_ADMIN_ROLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addHumanRessoucesAdminRoleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddHumanRessourcesAdminRoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addHumanRessoucesAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addHumanRessoucesAdminRoleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addHumanRessoucesAdminRoleInput"}}}]}]}}]} as unknown as DocumentNode<Add_Human_Ressources_Admin_RoleMutation, Add_Human_Ressources_Admin_RoleMutationVariables>;
export const Remove_Human_Ressources_Admin_RoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REMOVE_HUMAN_RESSOURCES_ADMIN_ROLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeHumanRessoucesAdminRoleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveHumanRessourcesAdminRoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeHumanRessoucesAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"removeHumanRessoucesAdminRoleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeHumanRessoucesAdminRoleInput"}}}]}]}}]} as unknown as DocumentNode<Remove_Human_Ressources_Admin_RoleMutation, Remove_Human_Ressources_Admin_RoleMutationVariables>;
export const Highway_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HIGHWAY_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"highwayListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HighwayListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"highwayList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"highwayListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"highwayListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Highway_ListQuery, Highway_ListQueryVariables>;
export const Highway_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HIGHWAY_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"highwayByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HighwayByIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"highwayById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"highwayByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"highwayByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Highway_By_IdQuery, Highway_By_IdQueryVariables>;
export const Subscription_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SUBSCRIPTION_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscriptionListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptionList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscriptionListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Subscription_ListQuery, Subscription_ListQueryVariables>;
export const Subscription_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SUBSCRIPTION_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscriptionByIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptionById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscriptionByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Subscription_By_IdQuery, Subscription_By_IdQueryVariables>;
export const Full_Toll_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FULL_TOLL_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullTollListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FullTollListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullTollList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fullTollListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullTollListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Full_Toll_ListQuery, Full_Toll_ListQueryVariables>;
export const Toll_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TollListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Toll_ListQuery, Toll_ListQueryVariables>;
export const Toll_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TollByIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Toll_By_IdQuery, Toll_By_IdQueryVariables>;
export const Toll_Network_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_NETWORK_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollNetworkListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TollNetworkListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollNetworkList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollNetworkListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollNetworkListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Toll_Network_ListQuery, Toll_Network_ListQueryVariables>;
export const Toll_Network_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_NETWORK_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollNetworkByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TollNetworkByIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollNetworkById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollNetworkByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollNetworkByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Toll_Network_By_IdQuery, Toll_Network_By_IdQueryVariables>;
export const Wilaya_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WILAYA_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wilayaListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WilayaListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wilayaList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"wilayaListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wilayaListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]} as unknown as DocumentNode<Wilaya_ListQuery, Wilaya_ListQueryVariables>;
export const Wilaya_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WILAYA_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wilayaByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WilayaByIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wilayaById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"wilayaByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wilayaByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Wilaya_By_IdQuery, Wilaya_By_IdQueryVariables>;
export const Graph_Toll_Distance_List_For_Toll_NetworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GRAPH_TOLL_DISTANCE_LIST_FOR_TOLL_NETWORK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"graphTollDistanceListForTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GraphTollDistanceListForTollNetworkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graphTollDistanceListForTollNetwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"graphTollDistanceListForTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"graphTollDistanceListForTollInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"fromToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"toToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]} as unknown as DocumentNode<Graph_Toll_Distance_List_For_Toll_NetworkQuery, Graph_Toll_Distance_List_For_Toll_NetworkQueryVariables>;
export const Graph_Toll_Distance_List_For_TollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GRAPH_TOLL_DISTANCE_LIST_FOR_TOLL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"graphTollDistanceListForTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GraphTollDistanceListForTollInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graphTollDistanceListForToll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"graphTollDistanceListForTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"graphTollDistanceListForTollInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"fromToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"toToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Graph_Toll_Distance_List_For_TollQuery, Graph_Toll_Distance_List_For_TollQueryVariables>;
export const Base_User_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BASE_USER_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"baseUserListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BaseUserListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUserList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"baseUserListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"baseUserListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]}}]} as unknown as DocumentNode<Base_User_ListQuery, Base_User_ListQueryVariables>;