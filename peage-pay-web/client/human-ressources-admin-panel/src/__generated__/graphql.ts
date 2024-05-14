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

export type AddAutomaticGateInput = {
  direction: TollDirectionType;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  variant: AutomaticGateVariantType;
};

export type AddCustomPriceInput = {
  endDate: Scalars['DateTime']['input'];
  endTimestamp: Scalars['DateTime']['input'];
  priority: Scalars['Float']['input'];
  startDate: Scalars['DateTime']['input'];
  startTimestamp: Scalars['DateTime']['input'];
  value: Scalars['Float']['input'];
};

export type AddDailyPriceInput = {
  endTimestamp: Scalars['DateTime']['input'];
  priority: Scalars['Float']['input'];
  startTimestamp: Scalars['DateTime']['input'];
  value: Scalars['Float']['input'];
};

export type AddGlobalPriceInput = {
  addCustomPriceInput?: InputMaybe<AddCustomPriceInput>;
  addDailyPriceInput?: InputMaybe<AddDailyPriceInput>;
  addMonthlyPriceInput?: InputMaybe<AddMonthlyPriceInput>;
  addWeeklyPriceInput?: InputMaybe<AddWeeklyPriceInput>;
  addYearlyPriceInput?: InputMaybe<AddYearlyPriceInput>;
};

export type AddHighwayInput = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AddLocalDailyPriceInput = {
  direction: TollDirectionType;
  endTimestamp: Scalars['DateTime']['input'];
  priority: Scalars['Float']['input'];
  startTimestamp: Scalars['DateTime']['input'];
  value: Scalars['Float']['input'];
};

export type AddLocalMonthlyPriceInput = {
  direction: TollDirectionType;
  endDay: Scalars['Float']['input'];
  endTimestamp: Scalars['DateTime']['input'];
  months: Array<MonthType>;
  priority: Scalars['Float']['input'];
  startDay: Scalars['Float']['input'];
  startTimestamp: Scalars['DateTime']['input'];
  value: Scalars['Float']['input'];
};

export type AddLocalPriceInput = {
  addCustomPriceInput?: InputMaybe<AddLocalYearlyPriceInput>;
  addDailyPriceInput?: InputMaybe<AddLocalDailyPriceInput>;
  addMonthlyPriceInput?: InputMaybe<AddLocalMonthlyPriceInput>;
  addWeeklyPriceInput?: InputMaybe<AddLocalWeeklyPriceInput>;
  addYearlyPriceInput?: InputMaybe<AddLocalYearlyPriceInput>;
};

export type AddLocalWeeklyPriceInput = {
  days: Array<DayOfWeekType>;
  direction: TollDirectionType;
  endTimestamp: Scalars['DateTime']['input'];
  priority: Scalars['Float']['input'];
  startTimestamp: Scalars['DateTime']['input'];
  value: Scalars['Float']['input'];
};

export type AddLocalYearlyPriceInput = {
  direction: TollDirectionType;
  endDate: Scalars['DateTime']['input'];
  endTimestamp: Scalars['DateTime']['input'];
  priority: Scalars['Float']['input'];
  startDate: Scalars['DateTime']['input'];
  startTimestamp: Scalars['DateTime']['input'];
  value: Scalars['Float']['input'];
};

export type AddMonthlyPriceInput = {
  endDay: Scalars['Float']['input'];
  endTimestamp: Scalars['DateTime']['input'];
  months: Array<MonthType>;
  priority: Scalars['Float']['input'];
  startDay: Scalars['Float']['input'];
  startTimestamp: Scalars['DateTime']['input'];
  value: Scalars['Float']['input'];
};

export type AddRfidTagInput = {
  baseUserId: Scalars['String']['input'];
  registrationNumber: Scalars['String']['input'];
  rfid: Scalars['String']['input'];
};

export type AddSectionInput = {
  distance: Scalars['Float']['input'];
  fromTollId: Scalars['String']['input'];
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

export type AddWeeklyPriceInput = {
  days: Array<DayOfWeekType>;
  endTimestamp: Scalars['DateTime']['input'];
  priority: Scalars['Float']['input'];
  startTimestamp: Scalars['DateTime']['input'];
  value: Scalars['Float']['input'];
};

export type AddYearlyPriceInput = {
  endDate: Scalars['DateTime']['input'];
  endTimestamp: Scalars['DateTime']['input'];
  priority: Scalars['Float']['input'];
  startDate: Scalars['DateTime']['input'];
  startTimestamp: Scalars['DateTime']['input'];
  value: Scalars['Float']['input'];
};

export enum AuthErrors {
  EmailAlreadyVerified = 'EMAIL_ALREADY_VERIFIED',
  EmailVerificationAttemptsExceeded = 'EMAIL_VERIFICATION_ATTEMPTS_EXCEEDED',
  InvalidEmailOrPassword = 'INVALID_EMAIL_OR_PASSWORD',
  PasswordResetAttemptsExceeded = 'PASSWORD_RESET_ATTEMPTS_EXCEEDED',
  SignInWithEmaIlAttemptsExceeded = 'SIGN_IN_WITH_EMAIl_ATTEMPTS_EXCEEDED',
  VerificationRequestPending = 'VERIFICATION_REQUEST_PENDING'
}

export type AutomaticGateListInput = {
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
  tollId: Scalars['String']['input'];
};

export type AutomaticGateListResult = {
  __typename?: 'AutomaticGateListResult';
  count: Scalars['Float']['output'];
  list: Array<AutomaticGateType>;
};

export enum AutomaticGateSearchFields {
  IdSearch = 'idSearch',
  NameSearch = 'nameSearch'
}

export type AutomaticGateType = {
  __typename?: 'AutomaticGateType';
  createdAt: Scalars['DateTime']['output'];
  direction: TollDirectionType;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  toll: TollType;
  tollId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  variant: AutomaticGateVariantType;
};

export enum AutomaticGateVariantType {
  QrCodeReader = 'QR_CODE_READER',
  RfidReader = 'RFID_READER',
  TicketPrinter = 'TICKET_PRINTER'
}

export enum BaseUserErrors {
  InsufficientPrivileges = 'INSUFFICIENT_PRIVILEGES',
  TollNotAssigned = 'TOLL_NOT_ASSIGNED'
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
  currentTrip?: Maybe<TripType>;
  currentTripId?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  roles: Array<BaseUserRolesType>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ChangeTollInput = {
  baseUserId: Scalars['String']['input'];
  tollId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomPriceListResult = {
  __typename?: 'CustomPriceListResult';
  count: Scalars['Float']['output'];
  list: Array<CustomPriceType>;
};

export type CustomPriceType = {
  __typename?: 'CustomPriceType';
  endDate: Scalars['DateTime']['output'];
  price: PriceType;
  priceId: Scalars['ID']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type DailyPriceListResult = {
  __typename?: 'DailyPriceListResult';
  count: Scalars['Float']['output'];
  list: Array<DailyPriceType>;
};

export type DailyPriceType = {
  __typename?: 'DailyPriceType';
  price: PriceType;
  priceId: Scalars['ID']['output'];
};

export enum DayOfWeekType {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type DefinePinInput = {
  pin: Scalars['String']['input'];
};

export type DeleteSectionInput = {
  fromTollId: Scalars['String']['input'];
  toTollId: Scalars['String']['input'];
};

export type DepositAmountInput = {
  amount: Scalars['Float']['input'];
};

export type DepositType = {
  __typename?: 'DepositType';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
};

export type EditAutomaticGateInput = {
  automaticGateId: Scalars['String']['input'];
  direction?: InputMaybe<TollDirectionType>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  variant?: InputMaybe<AutomaticGateVariantType>;
};

export type EditDefaultPriceInput = {
  value: Scalars['Float']['input'];
};

export type EditHighwayInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  highwayId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EditSectionInput = {
  distance: Scalars['Float']['input'];
  fromTollId: Scalars['String']['input'];
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
  tollId: Scalars['String']['input'];
  wilayaId?: InputMaybe<Scalars['String']['input']>;
};

export type EditTollNetworkInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  tollNetworkId: Scalars['String']['input'];
};

export type GateAdminListInput = {
  firstNameSearch?: InputMaybe<Scalars['String']['input']>;
  idSearch?: InputMaybe<Scalars['String']['input']>;
  lastNameSearch?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
  tollNameSearch?: InputMaybe<Scalars['String']['input']>;
};

export type GateAdminListResult = {
  __typename?: 'GateAdminListResult';
  count: Scalars['Float']['output'];
  list: Array<GateAdminType>;
};

export type GateAdminType = {
  __typename?: 'GateAdminType';
  baseUser: BaseUserType;
  baseUserId: Scalars['String']['output'];
  toll?: Maybe<TollType>;
  tollId?: Maybe<Scalars['String']['output']>;
};

export type GeneralAdminStatistics = {
  __typename?: 'GeneralAdminStatistics';
  highwayCount: Scalars['Float']['output'];
  humanRessourcesAdminCount: Scalars['Float']['output'];
  subscriptionsCount: Scalars['Float']['output'];
  tollNetworksCount: Scalars['Float']['output'];
};

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

export type HumanRessourcesAdminStatistics = {
  __typename?: 'HumanRessourcesAdminStatistics';
  gateAdminCount: Scalars['Float']['output'];
  moderatorCount: Scalars['Float']['output'];
  tollAdminCount: Scalars['Float']['output'];
  userCount: Scalars['Float']['output'];
};

export type IdInput = {
  id: Scalars['String']['input'];
};

export type ModeratorListInput = {
  firstNameSearch?: InputMaybe<Scalars['String']['input']>;
  idSearch?: InputMaybe<Scalars['String']['input']>;
  lastNameSearch?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
};

export type ModeratorListResult = {
  __typename?: 'ModeratorListResult';
  count: Scalars['Float']['output'];
  list: Array<ModeratorType>;
};

export type ModeratorStatistics = {
  __typename?: 'ModeratorStatistics';
  rfidTagCount: Scalars['Float']['output'];
  userCount: Scalars['Float']['output'];
};

export type ModeratorType = {
  __typename?: 'ModeratorType';
  baseUser: BaseUserType;
  baseUserId: Scalars['String']['output'];
};

export enum MonthType {
  April = 'APRIL',
  August = 'AUGUST',
  December = 'DECEMBER',
  February = 'FEBRUARY',
  January = 'JANUARY',
  July = 'JULY',
  June = 'JUNE',
  March = 'MARCH',
  May = 'MAY',
  November = 'NOVEMBER',
  October = 'OCTOBER',
  September = 'SEPTEMBER'
}

export type MonthlyPriceListResult = {
  __typename?: 'MonthlyPriceListResult';
  count: Scalars['Float']['output'];
  list: Array<MonthlyPriceType>;
};

export type MonthlyPriceType = {
  __typename?: 'MonthlyPriceType';
  endDay: Scalars['Int']['output'];
  months: Array<MonthType>;
  price: PriceType;
  priceId: Scalars['ID']['output'];
  startDay: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAutomaticGate: AutomaticGateType;
  addGateAdminRole: Scalars['Boolean']['output'];
  addGlobalPrice: Scalars['Boolean']['output'];
  addHighway: HighwayType;
  addHumanRessoucesAdminRole: Scalars['Boolean']['output'];
  addLocalPrice: Scalars['Boolean']['output'];
  addModeratorRole: Scalars['Boolean']['output'];
  addRfidTag: RfidTagType;
  addSection: SectionType;
  addSubscription: SubscriptionType;
  addToll: TollType;
  addTollAdminRole: Scalars['Boolean']['output'];
  addTollNetwork: TollNetworkType;
  changeGateAdminToll: Scalars['Boolean']['output'];
  changeTollAdminToll: Scalars['Boolean']['output'];
  definePin: Scalars['Boolean']['output'];
  deleteAutomaticGate: Scalars['Boolean']['output'];
  deleteBaseUser: Scalars['Boolean']['output'];
  deleteGlobalPrice: Scalars['Boolean']['output'];
  deleteHighway: Scalars['Boolean']['output'];
  deleteLocalPrice: Scalars['Boolean']['output'];
  deleteRfidTag: Scalars['Boolean']['output'];
  deleteSection: Scalars['Boolean']['output'];
  deleteSubscription: Scalars['Boolean']['output'];
  deleteToll: Scalars['Boolean']['output'];
  deleteTollNetwork: Scalars['Boolean']['output'];
  depositAmount: Scalars['String']['output'];
  editAutomaticGate: AutomaticGateType;
  editDefaultPrice: Scalars['Boolean']['output'];
  editHighway: HighwayType;
  editSection: SectionType;
  editSubscription: SubscriptionType;
  editToll: TollType;
  editTollNetwork: TollNetworkType;
  endTripRfid: Scalars['Boolean']['output'];
  generateCodes: Array<Scalars['String']['output']>;
  generateTicket: TicketType;
  generateTollDistances: Scalars['Boolean']['output'];
  redeemCode: Scalars['Boolean']['output'];
  removeGateAdminRole: Scalars['Boolean']['output'];
  removeHumanRessoucesAdminRole: Scalars['Boolean']['output'];
  removeModeratorRole: Scalars['Boolean']['output'];
  removeTollAdminRole: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  sendPasswordResetEmail: Scalars['Boolean']['output'];
  signInAutomaticGate: SignInAutomaticGateResult;
  signInWithEmail: SignInResult;
  signInWithGoogle: SignInResult;
  signOut: Scalars['Boolean']['output'];
  signOutAutomaticGate: Scalars['Boolean']['output'];
  signOutWithRefreshTokenCookie: Scalars['Boolean']['output'];
  signUpWithEmail: Scalars['Boolean']['output'];
  startTripRfid: Scalars['Boolean']['output'];
  validateTicket: TicketType;
  verifyEmail: Scalars['Boolean']['output'];
};


export type MutationAddAutomaticGateArgs = {
  addAutomaticGateInput: AddAutomaticGateInput;
};


export type MutationAddGateAdminRoleArgs = {
  addGateAdminRoleInput: IdInput;
};


export type MutationAddGlobalPriceArgs = {
  addPriceInput: AddGlobalPriceInput;
};


export type MutationAddHighwayArgs = {
  addHighwayInput: AddHighwayInput;
};


export type MutationAddHumanRessoucesAdminRoleArgs = {
  addHumanRessoucesAdminRoleInput: IdInput;
};


export type MutationAddLocalPriceArgs = {
  addPriceInput: AddLocalPriceInput;
};


export type MutationAddModeratorRoleArgs = {
  addModeratorRoleInput: IdInput;
};


export type MutationAddRfidTagArgs = {
  addRfidTagInput: AddRfidTagInput;
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


export type MutationAddTollAdminRoleArgs = {
  addTollAdminRoleInput: IdInput;
};


export type MutationAddTollNetworkArgs = {
  addTollNetworkInput: AddTollNetworkInput;
};


export type MutationChangeGateAdminTollArgs = {
  changeGateAdminTollInput: ChangeTollInput;
};


export type MutationChangeTollAdminTollArgs = {
  changeTollAdminTollInput: ChangeTollInput;
};


export type MutationDefinePinArgs = {
  definePinInput: DefinePinInput;
};


export type MutationDeleteAutomaticGateArgs = {
  deleteAutomaticGateInput: IdInput;
};


export type MutationDeleteBaseUserArgs = {
  deleteBaseUserInput: IdInput;
};


export type MutationDeleteGlobalPriceArgs = {
  deletePriceInput: IdInput;
};


export type MutationDeleteHighwayArgs = {
  deleteHighwayInput: IdInput;
};


export type MutationDeleteLocalPriceArgs = {
  deletePriceInput: IdInput;
};


export type MutationDeleteRfidTagArgs = {
  deleteRfidTagInput: IdInput;
};


export type MutationDeleteSectionArgs = {
  deleteSectionInput: DeleteSectionInput;
};


export type MutationDeleteSubscriptionArgs = {
  deleteSubscriptionInput: IdInput;
};


export type MutationDeleteTollArgs = {
  deleteTollInput: IdInput;
};


export type MutationDeleteTollNetworkArgs = {
  deleteTollNetworkInput: IdInput;
};


export type MutationDepositAmountArgs = {
  depositAmountInput: DepositAmountInput;
};


export type MutationEditAutomaticGateArgs = {
  editAutomaticGateInput: EditAutomaticGateInput;
};


export type MutationEditDefaultPriceArgs = {
  editDefaultPriceInput: EditDefaultPriceInput;
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


export type MutationEndTripRfidArgs = {
  endTripRfidInput: RfidInput;
};


export type MutationGenerateTollDistancesArgs = {
  generateTollDistancesInput: IdInput;
};


export type MutationRedeemCodeArgs = {
  redeemCodeInput: RedeemCodeInput;
};


export type MutationRemoveGateAdminRoleArgs = {
  removeGateAdminRoleInput: IdInput;
};


export type MutationRemoveHumanRessoucesAdminRoleArgs = {
  removeHumanRessoucesAdminRoleInput: IdInput;
};


export type MutationRemoveModeratorRoleArgs = {
  removeModeratorRoleInput: IdInput;
};


export type MutationRemoveTollAdminRoleArgs = {
  removeTollAdminRoleInput: IdInput;
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationSendPasswordResetEmailArgs = {
  sendPasswordResetEmailInput: SendResetPasswordEmailInput;
};


export type MutationSignInAutomaticGateArgs = {
  signInAutomaticGateInput: SignInAutomaticGateInput;
};


export type MutationSignInWithEmailArgs = {
  refreshTokenMode: RefreshTokenMode;
  signInWithEmailInput: SigninWithEmailInput;
};


export type MutationSignInWithGoogleArgs = {
  refreshTokenMode: RefreshTokenMode;
  signInWithGoogleInput: SignInWithGoogleInput;
};


export type MutationSignOutArgs = {
  signOutInput: SignOutInput;
};


export type MutationSignUpWithEmailArgs = {
  signUpWithEmailInput: SignUpWithEmailInput;
};


export type MutationStartTripRfidArgs = {
  startTripRfidInput: RfidInput;
};


export type MutationValidateTicketArgs = {
  validateTicketInput: IdInput;
};


export type MutationVerifyEmailArgs = {
  verifyEmailInput: VerifyEmailInput;
};

export type PaginationInput = {
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
};

export enum PaymentSubscriptionMessages {
  PaymentFailed = 'PAYMENT_FAILED',
  PaymentSuccessful = 'PAYMENT_SUCCESSFUL'
}

export enum PriceErrors {
  CannotDeleteGlobalPrice = 'CANNOT_DELETE_GLOBAL_PRICE',
  CannotDeleteLocalPrice = 'CANNOT_DELETE_LOCAL_PRICE',
  PriceNotFound = 'PRICE_NOT_FOUND',
  TollNotManaged = 'TOLL_NOT_MANAGED'
}

export type PriceType = {
  __typename?: 'PriceType';
  createdAt: Scalars['DateTime']['output'];
  endTimestamp: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  priority: Scalars['Float']['output'];
  startTimestamp: Scalars['DateTime']['output'];
  tollPrice?: Maybe<TollPriceType>;
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['Float']['output'];
};

export enum PrismaErrors {
  ForeignKeyConstraintViolation = 'FOREIGN_KEY_CONSTRAINT_VIOLATION',
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  NotFound = 'NOT_FOUND',
  UniqueConstraintViolation = 'UNIQUE_CONSTRAINT_VIOLATION'
}

export type Query = {
  __typename?: 'Query';
  automaticGateById?: Maybe<AutomaticGateType>;
  automaticGateList: AutomaticGateListResult;
  baseUserById?: Maybe<BaseUserType>;
  baseUserList: BaseUserListResult;
  customPriceGlobalList: CustomPriceListResult;
  customPriceLocalList: CustomPriceListResult;
  dailyPriceGlobalList: DailyPriceListResult;
  dailyPriceLocalList: DailyPriceListResult;
  defaultPrice?: Maybe<Scalars['Float']['output']>;
  depositList: Array<DepositType>;
  fullTollList: Array<TollType>;
  gateAdminById?: Maybe<GateAdminType>;
  gateAdminInfo?: Maybe<GateAdminType>;
  gateAdminList: GateAdminListResult;
  generalAdminStatistics: GeneralAdminStatistics;
  globalSectionList: Array<SectionType>;
  globalTollList: Array<TollType>;
  highwayById?: Maybe<HighwayType>;
  highwayList: HighwayListResult;
  humanRessourcesAdminStatistics: HumanRessourcesAdminStatistics;
  lol: Scalars['String']['output'];
  moderatorList: ModeratorListResult;
  moderatorStatistics: ModeratorStatistics;
  monthlyPriceGlobalList: MonthlyPriceListResult;
  monthlyPriceLocalList: MonthlyPriceListResult;
  rfidTagByRfid?: Maybe<RfidTagType>;
  rfidTagList: RfidTagListResult;
  sectionByIds?: Maybe<SectionType>;
  sectionListForToll: SectionListResult;
  sectionListForTollNetwork: Array<SectionType>;
  signInAutomaticGateRefreshToken: SignInAutomaticGateResult;
  signInWithRefreshToken: SignInWithRefreshTokenResult;
  signInWithRefreshTokenCookie: SignInWithRefreshTokenResult;
  subscriptionById?: Maybe<SubscriptionType>;
  subscriptionList: SubscriptionListResult;
  ticketInfo: TicketType;
  tollAdminById?: Maybe<TollAdminType>;
  tollAdminInfo?: Maybe<TollAdminType>;
  tollAdminList: TollAdminListResult;
  tollAdminStatistics: TollAdminStatistics;
  tollById: TollType;
  tollDistance: Scalars['Float']['output'];
  tollDistanceList: TollDistanceListResult;
  tollList: TollListResult;
  tollNetworkById: TollNetworkType;
  tollNetworkList: TollNetworkListResult;
  tollPrice: Scalars['Float']['output'];
  tripList: Array<TripType>;
  tripPrice: TripPriceResult;
  userInfo: UserType;
  userRfidTagList: Array<RfidTagType>;
  weeklyPriceGlobalList: WeeklyPriceListResult;
  weeklyPriceLocalList: WeeklyPriceListResult;
  wilayaById: WilayaType;
  wilayaList: WilayaListResult;
  yearlyPriceGlobalList: YearlyPriceListResult;
  yearlyPriceLocalList: YearlyPriceListResult;
};


export type QueryAutomaticGateByIdArgs = {
  automaticGateByIdInput: IdInput;
};


export type QueryAutomaticGateListArgs = {
  automaticGateListInput: AutomaticGateListInput;
};


export type QueryBaseUserByIdArgs = {
  baseUserByIdInput: IdInput;
};


export type QueryBaseUserListArgs = {
  baseUserListInput: BaseUserListInput;
};


export type QueryCustomPriceGlobalListArgs = {
  priceListInput: PaginationInput;
};


export type QueryCustomPriceLocalListArgs = {
  priceListInput: PaginationInput;
};


export type QueryDailyPriceGlobalListArgs = {
  priceListInput: PaginationInput;
};


export type QueryDailyPriceLocalListArgs = {
  priceListInput: PaginationInput;
};


export type QueryFullTollListArgs = {
  fullTollListInput: IdInput;
};


export type QueryGateAdminByIdArgs = {
  gateAdminByIdInput: IdInput;
};


export type QueryGateAdminListArgs = {
  gateAdminListInput: GateAdminListInput;
};


export type QueryHighwayByIdArgs = {
  highwayByIdInput: IdInput;
};


export type QueryHighwayListArgs = {
  highwayListInput: HighwayListInput;
};


export type QueryModeratorListArgs = {
  moderatorListInput: ModeratorListInput;
};


export type QueryMonthlyPriceGlobalListArgs = {
  priceListInput: PaginationInput;
};


export type QueryMonthlyPriceLocalListArgs = {
  priceListInput: PaginationInput;
};


export type QueryRfidTagByRfidArgs = {
  rfidTagByRfidInput: RfidTagByRfidInput;
};


export type QueryRfidTagListArgs = {
  rfidTagListInput: RfidTagListInput;
};


export type QuerySectionByIdsArgs = {
  sectionByIdsInput: SectionByIdsInput;
};


export type QuerySectionListForTollArgs = {
  sectionListForTollInput: SectionListForTollInput;
};


export type QuerySectionListForTollNetworkArgs = {
  sectionListForTollNetworkInput: IdInput;
};


export type QuerySignInAutomaticGateRefreshTokenArgs = {
  signInAutomaticGateRefreshTokenInput: SignInAutomaticGateRefreshTokenInput;
};


export type QuerySignInWithRefreshTokenArgs = {
  signInWithRefreshTokenInput: SignInWithRefreshTokenInput;
};


export type QuerySubscriptionByIdArgs = {
  subscriptionByIdInput: IdInput;
};


export type QuerySubscriptionListArgs = {
  subscriptionListInput: SubscriptionListInput;
};


export type QueryTicketInfoArgs = {
  ticketInfoInput: IdInput;
};


export type QueryTollAdminByIdArgs = {
  tollAdminByIdInput: IdInput;
};


export type QueryTollAdminListArgs = {
  tollAdminListInput: TollAdminListInput;
};


export type QueryTollByIdArgs = {
  tollByIdInput: IdInput;
};


export type QueryTollDistanceArgs = {
  tollDistanceInput: TollDistanceInput;
};


export type QueryTollDistanceListArgs = {
  tollDistanceListInput: TollDistanceListInput;
};


export type QueryTollListArgs = {
  tollListInput: TollListInput;
};


export type QueryTollNetworkByIdArgs = {
  tollNetworkByIdInput: IdInput;
};


export type QueryTollNetworkListArgs = {
  tollNetworkListInput: TollNetworkListInput;
};


export type QueryTollPriceArgs = {
  tollPriceInput: TollPriceInput;
};


export type QueryTripPriceArgs = {
  tripPriceInput: TripPriceInput;
};


export type QueryWeeklyPriceGlobalListArgs = {
  priceListInput: PaginationInput;
};


export type QueryWeeklyPriceLocalListArgs = {
  priceListInput: PaginationInput;
};


export type QueryWilayaByIdArgs = {
  wilayaByIdInput: IdInput;
};


export type QueryWilayaListArgs = {
  wilayaListInput: WilayaListInput;
};


export type QueryYearlyPriceGlobalListArgs = {
  priceListInput: PaginationInput;
};


export type QueryYearlyPriceLocalListArgs = {
  priceListInput: PaginationInput;
};

export type RedeemCodeInput = {
  code: Scalars['String']['input'];
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

export type RfidInput = {
  rfid: Scalars['String']['input'];
};

export type RfidTagByRfidInput = {
  rfid: Scalars['String']['input'];
};

export type RfidTagListInput = {
  baseUserId: Scalars['String']['input'];
  idSearch?: InputMaybe<Scalars['String']['input']>;
  registrationNumberSearch?: InputMaybe<Scalars['String']['input']>;
  rfidSearch?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
};

export type RfidTagListResult = {
  __typename?: 'RfidTagListResult';
  count: Scalars['Float']['output'];
  list: Array<RfidTagType>;
};

export enum RfidTagSearchFields {
  IdSearch = 'idSearch',
  RegistrationNumberSearch = 'registrationNumberSearch',
  RfidSearch = 'rfidSearch'
}

export type RfidTagType = {
  __typename?: 'RfidTagType';
  baseUser: BaseUserType;
  baseUserId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  registrationNumber: Scalars['String']['output'];
  rfid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SectionByIdsInput = {
  fromTollId: Scalars['String']['input'];
  toTollId: Scalars['String']['input'];
};

export type SectionListForTollInput = {
  id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
};

export type SectionListResult = {
  __typename?: 'SectionListResult';
  count: Scalars['Float']['output'];
  list: Array<SectionType>;
};

export type SectionType = {
  __typename?: 'SectionType';
  distance: Scalars['Float']['output'];
  fromToll: TollType;
  fromTollId: Scalars['String']['output'];
  toToll: TollType;
  toTollId: Scalars['String']['output'];
};

export type SendResetPasswordEmailInput = {
  email: Scalars['String']['input'];
};

export type SignInAutomaticGateInput = {
  automaticGateId: Scalars['String']['input'];
  password: Scalars['String']['input'];
  tollId: Scalars['String']['input'];
};

export type SignInAutomaticGateRefreshTokenInput = {
  refreshToken: Scalars['String']['input'];
};

export type SignInAutomaticGateResult = {
  __typename?: 'SignInAutomaticGateResult';
  accessToken: Scalars['String']['output'];
  automaticGate: AutomaticGateType;
  refreshToken: Scalars['String']['output'];
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

export type SignOutInput = {
  refreshToken: Scalars['String']['input'];
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

export type Subscription = {
  __typename?: 'Subscription';
  paymentFailed: Scalars['Boolean']['output'];
  paymentSuccessful: Scalars['Boolean']['output'];
};


export type SubscriptionPaymentFailedArgs = {
  paymentFailedInput: IdInput;
};


export type SubscriptionPaymentSuccessfulArgs = {
  paymentSuccessfulInput: IdInput;
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

export type TicketType = {
  __typename?: 'TicketType';
  distance?: Maybe<Scalars['Float']['output']>;
  entryTimeStamp: Scalars['DateTime']['output'];
  entryToll: TollType;
  entryTollId: Scalars['String']['output'];
  entryTollPrice: Scalars['Float']['output'];
  exitTimeStamp?: Maybe<Scalars['DateTime']['output']>;
  exitToll?: Maybe<TollType>;
  exitTollId?: Maybe<Scalars['String']['output']>;
  exitTollPrice?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  used: Scalars['Boolean']['output'];
};

export enum TokenErrors {
  AccessTokenNotProvided = 'ACCESS_TOKEN_NOT_PROVIDED',
  InvalidAccessToken = 'INVALID_ACCESS_TOKEN',
  InvalidGoogleOauthToken = 'INVALID_GOOGLE_OAUTH_TOKEN',
  InvalidRefreshToken = 'INVALID_REFRESH_TOKEN',
  InvalidVerificationToken = 'INVALID_VERIFICATION_TOKEN',
  RefreshTokenNotProvided = 'REFRESH_TOKEN_NOT_PROVIDED',
  VerificationTokenExpired = 'VERIFICATION_TOKEN_EXPIRED'
}

export type TollAdminListInput = {
  firstNameSearch?: InputMaybe<Scalars['String']['input']>;
  idSearch?: InputMaybe<Scalars['String']['input']>;
  lastNameSearch?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
  tollNameSearch?: InputMaybe<Scalars['String']['input']>;
};

export type TollAdminListResult = {
  __typename?: 'TollAdminListResult';
  count: Scalars['Float']['output'];
  list: Array<TollAdminType>;
};

export type TollAdminStatistics = {
  __typename?: 'TollAdminStatistics';
  automaticGateCount: Scalars['Float']['output'];
  localGateAdminCount: Scalars['Float']['output'];
  qrCodeReaderCount: Scalars['Float']['output'];
  rfidReaderCount: Scalars['Float']['output'];
  ticketPrinterCount: Scalars['Float']['output'];
};

export type TollAdminType = {
  __typename?: 'TollAdminType';
  baseUser: BaseUserType;
  baseUserId: Scalars['String']['output'];
  toll?: Maybe<TollType>;
  tollId?: Maybe<Scalars['String']['output']>;
};

export enum TollDirectionType {
  Inbound = 'INBOUND',
  Outbound = 'OUTBOUND'
}

export type TollDistanceInput = {
  fromTollId: Scalars['String']['input'];
  toTollId: Scalars['String']['input'];
};

export type TollDistanceListInput = {
  id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
};

export type TollDistanceListResult = {
  __typename?: 'TollDistanceListResult';
  count: Scalars['Float']['output'];
  list: Array<TollDistanceType>;
};

export type TollDistanceType = {
  __typename?: 'TollDistanceType';
  distance: Scalars['Float']['output'];
  fromToll: TollType;
  fromTollId: Scalars['String']['output'];
  toToll: TollType;
  toTollId: Scalars['String']['output'];
};

export type TollListInput = {
  highwayCodeSearch?: InputMaybe<Scalars['String']['input']>;
  highwayNameSearch?: InputMaybe<Scalars['String']['input']>;
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take: Scalars['Float']['input'];
  tollNetworkId?: InputMaybe<Scalars['String']['input']>;
  wilayaCodeSearch?: InputMaybe<Scalars['String']['input']>;
  wilayaNameSearch?: InputMaybe<Scalars['String']['input']>;
};

export type TollListResult = {
  __typename?: 'TollListResult';
  count: Scalars['Float']['output'];
  list: Array<TollType>;
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

export type TollPriceInput = {
  direction: TollDirectionType;
  tollId: Scalars['String']['input'];
};

export type TollPriceType = {
  __typename?: 'TollPriceType';
  direction: TollDirectionType;
  priceId: Scalars['String']['output'];
  tollId: Scalars['String']['output'];
};

export enum TollSearchFields {
  HighwayCodeSearch = 'highwayCodeSearch',
  HighwayNameSearch = 'highwayNameSearch',
  IdSearch = 'idSearch',
  NameSearch = 'nameSearch',
  WilayaCodeSearch = 'wilayaCodeSearch',
  WilayaNameSearch = 'wilayaNameSearch'
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
  tollNetwork: TollNetworkType;
  tollNetworkId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  wilaya: WilayaType;
  wilayaId: Scalars['String']['output'];
};

export type TripPriceInput = {
  fromTollId: Scalars['String']['input'];
  toTollId: Scalars['String']['input'];
};

export type TripPriceResult = {
  __typename?: 'TripPriceResult';
  distance: Scalars['Float']['output'];
  fromTollPrice: Scalars['Float']['output'];
  toTollPrice: Scalars['Float']['output'];
};

export type TripType = {
  __typename?: 'TripType';
  baseUserId: Scalars['String']['output'];
  distance?: Maybe<Scalars['Float']['output']>;
  entryTimeStamp: Scalars['DateTime']['output'];
  entryToll: TollType;
  entryTollId: Scalars['String']['output'];
  entryTollPrice: Scalars['Float']['output'];
  exitTimeStamp?: Maybe<Scalars['DateTime']['output']>;
  exitToll?: Maybe<TollType>;
  exitTollId?: Maybe<Scalars['String']['output']>;
  exitTollPrice?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
};

export type UserType = {
  __typename?: 'UserType';
  balance: Scalars['Float']['output'];
  baseUser: BaseUserType;
  baseUserId: Scalars['String']['output'];
};

export type VerifyEmailInput = {
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type WeeklyPriceListResult = {
  __typename?: 'WeeklyPriceListResult';
  count: Scalars['Float']['output'];
  list: Array<WeeklyPriceType>;
};

export type WeeklyPriceType = {
  __typename?: 'WeeklyPriceType';
  days: Array<DayOfWeekType>;
  price: PriceType;
  priceId: Scalars['ID']['output'];
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

export type YearlyPriceListResult = {
  __typename?: 'YearlyPriceListResult';
  count: Scalars['Float']['output'];
  list: Array<YearlyPriceType>;
};

export type YearlyPriceType = {
  __typename?: 'YearlyPriceType';
  endDate: Scalars['DateTime']['output'];
  price: PriceType;
  priceId: Scalars['ID']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type Add_Toll_Admin_RoleMutationVariables = Exact<{
  addTollAdminRoleInput: IdInput;
}>;


export type Add_Toll_Admin_RoleMutation = { __typename?: 'Mutation', addTollAdminRole: boolean };

export type Remove_Toll_Admin_RoleMutationVariables = Exact<{
  removeTollAdminRoleInput: IdInput;
}>;


export type Remove_Toll_Admin_RoleMutation = { __typename?: 'Mutation', removeTollAdminRole: boolean };

export type Change_Toll_Admin_TollMutationVariables = Exact<{
  changeTollAdminTollInput: ChangeTollInput;
}>;


export type Change_Toll_Admin_TollMutation = { __typename?: 'Mutation', changeTollAdminToll: boolean };

export type Add_Gate_Admin_RoleMutationVariables = Exact<{
  addGateAdminRoleInput: IdInput;
}>;


export type Add_Gate_Admin_RoleMutation = { __typename?: 'Mutation', addGateAdminRole: boolean };

export type Remove_Gate_Admin_RoleMutationVariables = Exact<{
  removeGateAdminRoleInput: IdInput;
}>;


export type Remove_Gate_Admin_RoleMutation = { __typename?: 'Mutation', removeGateAdminRole: boolean };

export type Change_Gate_Admin_TollMutationVariables = Exact<{
  changeGateAdminTollInput: ChangeTollInput;
}>;


export type Change_Gate_Admin_TollMutation = { __typename?: 'Mutation', changeGateAdminToll: boolean };

export type Add_Moderator_RoleMutationVariables = Exact<{
  addModeratorRoleInput: IdInput;
}>;


export type Add_Moderator_RoleMutation = { __typename?: 'Mutation', addModeratorRole: boolean };

export type Remove_Moderator_RoleMutationVariables = Exact<{
  removeModeratorRoleInput: IdInput;
}>;


export type Remove_Moderator_RoleMutation = { __typename?: 'Mutation', removeModeratorRole: boolean };

export type Human_Ressources_Admin_StatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type Human_Ressources_Admin_StatisticsQuery = { __typename?: 'Query', humanRessourcesAdminStatistics: { __typename?: 'HumanRessourcesAdminStatistics', userCount: number, tollAdminCount: number, gateAdminCount: number, moderatorCount: number } };

export type Base_User_ListQueryVariables = Exact<{
  baseUserListInput: BaseUserListInput;
}>;


export type Base_User_ListQuery = { __typename?: 'Query', baseUserList: { __typename?: 'BaseUserListResult', count: number, list: Array<{ __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any, roles: Array<BaseUserRolesType> }> } };

export type Toll_Admin_ListQueryVariables = Exact<{
  tollAdminListInput: TollAdminListInput;
}>;


export type Toll_Admin_ListQuery = { __typename?: 'Query', tollAdminList: { __typename?: 'TollAdminListResult', count: number, list: Array<{ __typename?: 'TollAdminType', baseUserId: string, toll?: { __typename?: 'TollType', id: string, name: string } | null, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } }> } };

export type Toll_Admin_By_IdQueryVariables = Exact<{
  tollAdminByIdInput: IdInput;
}>;


export type Toll_Admin_By_IdQuery = { __typename?: 'Query', tollAdminById?: { __typename?: 'TollAdminType', baseUserId: string, toll?: { __typename?: 'TollType', id: string, name: string } | null, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } } | null };

export type Gate_Admin_ListQueryVariables = Exact<{
  gateAdminListInput: GateAdminListInput;
}>;


export type Gate_Admin_ListQuery = { __typename?: 'Query', gateAdminList: { __typename?: 'GateAdminListResult', count: number, list: Array<{ __typename?: 'GateAdminType', baseUserId: string, toll?: { __typename?: 'TollType', id: string, name: string } | null, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } }> } };

export type Gate_Admin_By_IdQueryVariables = Exact<{
  gateAdminByIdInput: IdInput;
}>;


export type Gate_Admin_By_IdQuery = { __typename?: 'Query', gateAdminById?: { __typename?: 'GateAdminType', baseUserId: string, toll?: { __typename?: 'TollType', id: string, name: string } | null, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } } | null };

export type Moderator_ListQueryVariables = Exact<{
  moderatorListInput: ModeratorListInput;
}>;


export type Moderator_ListQuery = { __typename?: 'Query', moderatorList: { __typename?: 'ModeratorListResult', count: number, list: Array<{ __typename?: 'ModeratorType', baseUserId: string, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } }> } };


export const Add_Toll_Admin_RoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_TOLL_ADMIN_ROLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addTollAdminRoleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTollAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addTollAdminRoleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addTollAdminRoleInput"}}}]}]}}]} as unknown as DocumentNode<Add_Toll_Admin_RoleMutation, Add_Toll_Admin_RoleMutationVariables>;
export const Remove_Toll_Admin_RoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REMOVE_TOLL_ADMIN_ROLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeTollAdminRoleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeTollAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"removeTollAdminRoleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeTollAdminRoleInput"}}}]}]}}]} as unknown as DocumentNode<Remove_Toll_Admin_RoleMutation, Remove_Toll_Admin_RoleMutationVariables>;
export const Change_Toll_Admin_TollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CHANGE_TOLL_ADMIN_TOLL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"changeTollAdminTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeTollInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeTollAdminToll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"changeTollAdminTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"changeTollAdminTollInput"}}}]}]}}]} as unknown as DocumentNode<Change_Toll_Admin_TollMutation, Change_Toll_Admin_TollMutationVariables>;
export const Add_Gate_Admin_RoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_GATE_ADMIN_ROLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addGateAdminRoleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addGateAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addGateAdminRoleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addGateAdminRoleInput"}}}]}]}}]} as unknown as DocumentNode<Add_Gate_Admin_RoleMutation, Add_Gate_Admin_RoleMutationVariables>;
export const Remove_Gate_Admin_RoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REMOVE_GATE_ADMIN_ROLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeGateAdminRoleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeGateAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"removeGateAdminRoleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeGateAdminRoleInput"}}}]}]}}]} as unknown as DocumentNode<Remove_Gate_Admin_RoleMutation, Remove_Gate_Admin_RoleMutationVariables>;
export const Change_Gate_Admin_TollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CHANGE_GATE_ADMIN_TOLL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"changeGateAdminTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeTollInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeGateAdminToll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"changeGateAdminTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"changeGateAdminTollInput"}}}]}]}}]} as unknown as DocumentNode<Change_Gate_Admin_TollMutation, Change_Gate_Admin_TollMutationVariables>;
export const Add_Moderator_RoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_MODERATOR_ROLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addModeratorRoleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addModeratorRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addModeratorRoleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addModeratorRoleInput"}}}]}]}}]} as unknown as DocumentNode<Add_Moderator_RoleMutation, Add_Moderator_RoleMutationVariables>;
export const Remove_Moderator_RoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REMOVE_MODERATOR_ROLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeModeratorRoleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeModeratorRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"removeModeratorRoleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeModeratorRoleInput"}}}]}]}}]} as unknown as DocumentNode<Remove_Moderator_RoleMutation, Remove_Moderator_RoleMutationVariables>;
export const Human_Ressources_Admin_StatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HUMAN_RESSOURCES_ADMIN_STATISTICS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"humanRessourcesAdminStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCount"}},{"kind":"Field","name":{"kind":"Name","value":"tollAdminCount"}},{"kind":"Field","name":{"kind":"Name","value":"gateAdminCount"}},{"kind":"Field","name":{"kind":"Name","value":"moderatorCount"}}]}}]}}]} as unknown as DocumentNode<Human_Ressources_Admin_StatisticsQuery, Human_Ressources_Admin_StatisticsQueryVariables>;
export const Base_User_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BASE_USER_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"baseUserListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BaseUserListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUserList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"baseUserListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"baseUserListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]}}]} as unknown as DocumentNode<Base_User_ListQuery, Base_User_ListQueryVariables>;
export const Toll_Admin_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_ADMIN_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollAdminListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TollAdminListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollAdminList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollAdminListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollAdminListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"baseUserId"}},{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Toll_Admin_ListQuery, Toll_Admin_ListQueryVariables>;
export const Toll_Admin_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_ADMIN_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollAdminByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollAdminById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollAdminByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollAdminByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"baseUserId"}},{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Toll_Admin_By_IdQuery, Toll_Admin_By_IdQueryVariables>;
export const Gate_Admin_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GATE_ADMIN_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gateAdminListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GateAdminListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gateAdminList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gateAdminListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gateAdminListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"baseUserId"}},{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Gate_Admin_ListQuery, Gate_Admin_ListQueryVariables>;
export const Gate_Admin_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GATE_ADMIN_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gateAdminByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gateAdminById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gateAdminByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gateAdminByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"baseUserId"}},{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Gate_Admin_By_IdQuery, Gate_Admin_By_IdQueryVariables>;
export const Moderator_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MODERATOR_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"moderatorListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModeratorListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moderatorList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"moderatorListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"moderatorListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUserId"}},{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Moderator_ListQuery, Moderator_ListQueryVariables>;