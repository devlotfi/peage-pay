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

export type AddSubscriptionInput = {
  name: Scalars['String']['input'];
  vehicleType: VehicleTypeType;
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

export enum BaseUserErrors {
  BaseUserNotFound = 'BASE_USER_NOT_FOUND',
  BaseUserWithEmailExists = 'BASE_USER_WITH_EMAIL_EXISTS',
  BaseUserWithPhoneExists = 'BASE_USER_WITH_PHONE_EXISTS',
  InsufficientPrivileges = 'INSUFFICIENT_PRIVILEGES'
}

export enum BaseUserRolesType {
  GateAdmin = 'GATE_ADMIN',
  GeneralAdmin = 'GENERAL_ADMIN',
  HumanRessourcesAdmin = 'HUMAN_RESSOURCES_ADMIN',
  Moderator = 'MODERATOR',
  TollAdmin = 'TOLL_ADMIN',
  User = 'USER'
}

export type BaseUserType = {
  __typename?: 'BaseUserType';
  createdAt: Scalars['DateTime']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
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
  id: Scalars['String']['input'];
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
  name?: InputMaybe<Scalars['String']['input']>;
  subscriptionId: Scalars['String']['input'];
  vehicleType: VehicleTypeType;
};

export type EditTollInput = {
  highwayId: Scalars['String']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  status: TollStatusType;
  tollId: Scalars['String']['input'];
  tollNetworkId: Scalars['String']['input'];
  wilayaId: Scalars['String']['input'];
};

export type EditTollNetworkInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  tollNetworkId: Scalars['String']['input'];
};

export type GraphTollDistanceListInput = {
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
  tollId?: InputMaybe<Scalars['String']['input']>;
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
  addSubscription: SubscriptionType;
  addToll: TollType;
  addTollNetwork: TollNetworkType;
  deleteGraphTollDistance: GraphTollDistanceType;
  deleteHighway: Scalars['Boolean']['output'];
  deleteSubscription: Scalars['Boolean']['output'];
  deleteToll: Scalars['Boolean']['output'];
  deleteTollNetwork: Scalars['Boolean']['output'];
  editHighway: HighwayType;
  editSubscription: SubscriptionType;
  editToll: TollType;
  editTollNetwork: TollNetworkType;
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
  graphTollDistanceList: Array<GraphTollDistanceType>;
  highwayList: Array<HighwayType>;
  highwaybyId?: Maybe<HighwayType>;
  lol: Scalars['String']['output'];
  signInWithRefreshToken: SignInWithRefreshTokenResult;
  signInWithRefreshTokenCookie: SignInWithRefreshTokenResult;
  subscriptionById?: Maybe<SubscriptionType>;
  subscriptionList: Array<SubscriptionType>;
  tollById: TollType;
  tollList: Array<TollType>;
  tollNetworkById: TollNetworkType;
  tollNetworkList: Array<TollNetworkType>;
  wilayaList: Array<WilayaType>;
};


export type QueryGraphTollDistanceListArgs = {
  graphTollDistanceListInput: GraphTollDistanceListInput;
};


export type QueryHighwayListArgs = {
  highwayListInput: HighwayListInput;
};


export type QueryHighwaybyIdArgs = {
  highwayByIdInput: HighwayByIdInput;
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

export enum SubscriptionSearchFields {
  IdSearch = 'idSearch',
  NameSearch = 'nameSearch'
}

export type SubscriptionType = {
  __typename?: 'SubscriptionType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  vehicleType: VehicleTypeType;
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
  skip?: InputMaybe<Scalars['Float']['input']>;
  statusSearch?: InputMaybe<TollStatusType>;
  take: Scalars['Float']['input'];
  tollNetworkId: Scalars['String']['input'];
  wilayaCodeSearch?: InputMaybe<Scalars['Float']['input']>;
  wilayaNameSearch?: InputMaybe<Scalars['String']['input']>;
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
  StatusSearch = 'statusSearch',
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

export enum VehicleTypeType {
  Bus = 'BUS',
  Lightweight = 'LIGHTWEIGHT',
  Taxi = 'TAXI',
  Truck = 'TRUCK'
}

export type VerifyEmailInput = {
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type WilayaType = {
  __typename?: 'WilayaType';
  code: Scalars['Float']['output'];
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


export type Add_SubscriptionMutation = { __typename?: 'Mutation', addSubscription: { __typename?: 'SubscriptionType', id: string, name: string, vehicleType: VehicleTypeType, createdAt: any, updatedAt: any } };

export type Edit_SubscriptionMutationVariables = Exact<{
  editSubscriptionInput: EditSubscriptionInput;
}>;


export type Edit_SubscriptionMutation = { __typename?: 'Mutation', editSubscription: { __typename?: 'SubscriptionType', id: string, name: string, vehicleType: VehicleTypeType, createdAt: any, updatedAt: any } };

export type Delete_SubscriptionMutationVariables = Exact<{
  deleteSubscriptionInput: DeleteSubscriptionInput;
}>;


export type Delete_SubscriptionMutation = { __typename?: 'Mutation', deleteSubscription: boolean };

export type Add_TollMutationVariables = Exact<{
  addTollInput: AddTollInput;
}>;


export type Add_TollMutation = { __typename?: 'Mutation', addToll: { __typename?: 'TollType', id: string, name: string, status: TollStatusType, longitude: number, latitude: number, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', name: string, code: number }, highway: { __typename?: 'HighwayType', name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', name: string } } };

export type Edit_TollMutationVariables = Exact<{
  editTollInput: EditTollInput;
}>;


export type Edit_TollMutation = { __typename?: 'Mutation', editToll: { __typename?: 'TollType', id: string, name: string, status: TollStatusType, longitude: number, latitude: number, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', name: string, code: number }, highway: { __typename?: 'HighwayType', name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', name: string } } };

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

export type Highway_ListQueryVariables = Exact<{
  highwayListInput: HighwayListInput;
}>;


export type Highway_ListQuery = { __typename?: 'Query', highwayList: Array<{ __typename?: 'HighwayType', id: string, name: string, code: string, createdAt: any, updatedAt: any }> };

export type Highway_By_IdQueryVariables = Exact<{
  highwayByIdInput: HighwayByIdInput;
}>;


export type Highway_By_IdQuery = { __typename?: 'Query', highwaybyId?: { __typename?: 'HighwayType', code: string, id: string, name: string, createdAt: any, updatedAt: any } | null };

export type Subscription_ListQueryVariables = Exact<{
  subscriptionListInput: SubscriptionListInput;
}>;


export type Subscription_ListQuery = { __typename?: 'Query', subscriptionList: Array<{ __typename?: 'SubscriptionType', id: string, name: string, createdAt: any, updatedAt: any }> };

export type Subscription_By_IdQueryVariables = Exact<{
  subscriptionByIdInput: SubscriptionByIdInput;
}>;


export type Subscription_By_IdQuery = { __typename?: 'Query', subscriptionById?: { __typename?: 'SubscriptionType', id: string, name: string, vehicleType: VehicleTypeType, createdAt: any, updatedAt: any } | null };

export type Toll_ListQueryVariables = Exact<{
  tollListInput: TollListInput;
}>;


export type Toll_ListQuery = { __typename?: 'Query', tollList: Array<{ __typename?: 'TollType', id: string, name: string, status: TollStatusType, longitude: number, latitude: number, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', name: string, code: number }, highway: { __typename?: 'HighwayType', name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', name: string } }> };

export type Toll_By_IdQueryVariables = Exact<{
  tollByIdInput: TollByIdInput;
}>;


export type Toll_By_IdQuery = { __typename?: 'Query', tollById: { __typename?: 'TollType', id: string, name: string, status: TollStatusType, longitude: number, latitude: number, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', name: string, code: number }, highway: { __typename?: 'HighwayType', name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', name: string } } };

export type Toll_Network_ListQueryVariables = Exact<{
  tollNetworkListInput: TollNetworkListInput;
}>;


export type Toll_Network_ListQuery = { __typename?: 'Query', tollNetworkList: Array<{ __typename?: 'TollNetworkType', id: string, name: string, createdAt: any, updatedAt: any }> };

export type Toll_Network_By_IdQueryVariables = Exact<{
  tollNetworkByIdInput: TollNetworkByIdInput;
}>;


export type Toll_Network_By_IdQuery = { __typename?: 'Query', tollNetworkById: { __typename?: 'TollNetworkType', id: string, name: string, createdAt: any, updatedAt: any } };


export const Add_HighwayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_HIGHWAY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addHighwayInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddHighwayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addHighway"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addHighwayInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addHighwayInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Add_HighwayMutation, Add_HighwayMutationVariables>;
export const Edit_HighwayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_HIGHWAY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editHighwayInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditHighwayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editHighway"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editHighwayInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editHighwayInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Edit_HighwayMutation, Edit_HighwayMutationVariables>;
export const Delete_HighwayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_HIGHWAY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteHighwayInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteHighwayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteHighway"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteHighwayInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteHighwayInput"}}}]}]}}]} as unknown as DocumentNode<Delete_HighwayMutation, Delete_HighwayMutationVariables>;
export const Add_SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_SUBSCRIPTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addSubscriptionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addSubscriptionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addSubscriptionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"vehicleType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Add_SubscriptionMutation, Add_SubscriptionMutationVariables>;
export const Edit_SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_SUBSCRIPTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editSubscriptionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editSubscriptionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editSubscriptionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"vehicleType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Edit_SubscriptionMutation, Edit_SubscriptionMutationVariables>;
export const Delete_SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_SUBSCRIPTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSubscriptionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteSubscriptionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSubscriptionInput"}}}]}]}}]} as unknown as DocumentNode<Delete_SubscriptionMutation, Delete_SubscriptionMutationVariables>;
export const Add_TollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_TOLL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddTollInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addTollInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Add_TollMutation, Add_TollMutationVariables>;
export const Edit_TollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_TOLL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditTollInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editToll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editTollInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Edit_TollMutation, Edit_TollMutationVariables>;
export const Delete_TollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_TOLL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteTollInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteToll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTollInput"}}}]}]}}]} as unknown as DocumentNode<Delete_TollMutation, Delete_TollMutationVariables>;
export const Add_Toll_NetworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_TOLL_NETWORK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addTollNetworkInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddTollNetworkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTollNetwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addTollNetworkInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addTollNetworkInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Add_Toll_NetworkMutation, Add_Toll_NetworkMutationVariables>;
export const Edit_Toll_NetworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_TOLL_NETWORK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editTollNetworkInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditTollNetworkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editTollNetwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editTollNetworkInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editTollNetworkInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Edit_Toll_NetworkMutation, Edit_Toll_NetworkMutationVariables>;
export const Delete_Toll_NetworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_TOLL_NETWORK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTollNetworkInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteTollNetworkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTollNetwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteTollNetworkInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTollNetworkInput"}}}]}]}}]} as unknown as DocumentNode<Delete_Toll_NetworkMutation, Delete_Toll_NetworkMutationVariables>;
export const Highway_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HIGHWAY_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"highwayListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HighwayListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"highwayList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"highwayListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"highwayListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Highway_ListQuery, Highway_ListQueryVariables>;
export const Highway_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HIGHWAY_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"highwayByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HighwayByIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"highwaybyId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"highwayByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"highwayByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Highway_By_IdQuery, Highway_By_IdQueryVariables>;
export const Subscription_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SUBSCRIPTION_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscriptionListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptionList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscriptionListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Subscription_ListQuery, Subscription_ListQueryVariables>;
export const Subscription_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SUBSCRIPTION_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscriptionByIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptionById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscriptionByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"vehicleType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Subscription_By_IdQuery, Subscription_By_IdQueryVariables>;
export const Toll_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TollListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Toll_ListQuery, Toll_ListQueryVariables>;
export const Toll_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TollByIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Toll_By_IdQuery, Toll_By_IdQueryVariables>;
export const Toll_Network_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_NETWORK_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollNetworkListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TollNetworkListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollNetworkList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollNetworkListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollNetworkListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Toll_Network_ListQuery, Toll_Network_ListQueryVariables>;
export const Toll_Network_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_NETWORK_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollNetworkByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TollNetworkByIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollNetworkById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollNetworkByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollNetworkByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Toll_Network_By_IdQuery, Toll_Network_By_IdQueryVariables>;