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

export type Delete_Base_UserMutationVariables = Exact<{
  deleteBaseUserInput: IdInput;
}>;


export type Delete_Base_UserMutation = { __typename?: 'Mutation', deleteBaseUser: boolean };

export type Add_Rfid_TagMutationVariables = Exact<{
  addRfidTagInput: AddRfidTagInput;
}>;


export type Add_Rfid_TagMutation = { __typename?: 'Mutation', addRfidTag: { __typename?: 'RfidTagType', id: string, rfid: string, registrationNumber: string, baseUserId: string, createdAt: any, updatedAt: any } };

export type Delete_Rfid_TagMutationVariables = Exact<{
  deleteRfidTagInput: IdInput;
}>;


export type Delete_Rfid_TagMutation = { __typename?: 'Mutation', deleteRfidTag: boolean };

export type Moderator_StatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type Moderator_StatisticsQuery = { __typename?: 'Query', moderatorStatistics: { __typename?: 'ModeratorStatistics', userCount: number, rfidTagCount: number } };

export type Rfid_Tag_By_RfidQueryVariables = Exact<{
  rfidTagByRfidInput: RfidTagByRfidInput;
}>;


export type Rfid_Tag_By_RfidQuery = { __typename?: 'Query', rfidTagByRfid?: { __typename?: 'RfidTagType', id: string, rfid: string, registrationNumber: string, createdAt: any, updatedAt: any, baseUserId: string, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } } | null };

export type Base_User_ListQueryVariables = Exact<{
  baseUserListInput: BaseUserListInput;
}>;


export type Base_User_ListQuery = { __typename?: 'Query', baseUserList: { __typename?: 'BaseUserListResult', count: number, list: Array<{ __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any, roles: Array<BaseUserRolesType> }> } };

export type Base_User_By_IdQueryVariables = Exact<{
  baseUserByIdInput: IdInput;
}>;


export type Base_User_By_IdQuery = { __typename?: 'Query', baseUserById?: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, roles: Array<BaseUserRolesType>, createdAt: any, updatedAt: any } | null };

export type Rfid_Tag_ListQueryVariables = Exact<{
  rfidTagListInput: RfidTagListInput;
}>;


export type Rfid_Tag_ListQuery = { __typename?: 'Query', rfidTagList: { __typename?: 'RfidTagListResult', count: number, list: Array<{ __typename?: 'RfidTagType', id: string, rfid: string, registrationNumber: string, baseUserId: string, createdAt: any, updatedAt: any }> } };


export const Delete_Base_UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_BASE_USER"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteBaseUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBaseUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteBaseUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteBaseUserInput"}}}]}]}}]} as unknown as DocumentNode<Delete_Base_UserMutation, Delete_Base_UserMutationVariables>;
export const Add_Rfid_TagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_RFID_TAG"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addRfidTagInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddRfidTagInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addRfidTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addRfidTagInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addRfidTagInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rfid"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"baseUserId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Add_Rfid_TagMutation, Add_Rfid_TagMutationVariables>;
export const Delete_Rfid_TagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_RFID_TAG"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteRfidTagInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRfidTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteRfidTagInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteRfidTagInput"}}}]}]}}]} as unknown as DocumentNode<Delete_Rfid_TagMutation, Delete_Rfid_TagMutationVariables>;
export const Moderator_StatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MODERATOR_STATISTICS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moderatorStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCount"}},{"kind":"Field","name":{"kind":"Name","value":"rfidTagCount"}}]}}]}}]} as unknown as DocumentNode<Moderator_StatisticsQuery, Moderator_StatisticsQueryVariables>;
export const Rfid_Tag_By_RfidDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RFID_TAG_BY_RFID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rfidTagByRfidInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RfidTagByRfidInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rfidTagByRfid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"rfidTagByRfidInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rfidTagByRfidInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rfid"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"baseUserId"}},{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Rfid_Tag_By_RfidQuery, Rfid_Tag_By_RfidQueryVariables>;
export const Base_User_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BASE_USER_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"baseUserListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BaseUserListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUserList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"baseUserListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"baseUserListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]}}]} as unknown as DocumentNode<Base_User_ListQuery, Base_User_ListQueryVariables>;
export const Base_User_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BASE_USER_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"baseUserByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUserById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"baseUserByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"baseUserByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Base_User_By_IdQuery, Base_User_By_IdQueryVariables>;
export const Rfid_Tag_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RFID_TAG_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rfidTagListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RfidTagListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rfidTagList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"rfidTagListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rfidTagListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rfid"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"baseUserId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Rfid_Tag_ListQuery, Rfid_Tag_ListQueryVariables>;