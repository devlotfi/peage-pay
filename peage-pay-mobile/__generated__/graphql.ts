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
  generatePin: Scalars['String']['output'];
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
  sectionListForTollNetwork: Array<SectionType>;
  sectionListForTollNetworkPaginated: SectionListResult;
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


export type QuerySectionListForTollNetworkArgs = {
  sectionListForTollNetworkInput: IdInput;
};


export type QuerySectionListForTollNetworkPaginatedArgs = {
  sectionListForTollNetworkPaginatedInput: SectionListForTollNetworkPaginatedInput;
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

export type SectionListForTollNetworkPaginatedInput = {
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

export type Sign_Up_With_EmailMutationVariables = Exact<{
  signUpWithEmailInput: SignUpWithEmailInput;
}>;


export type Sign_Up_With_EmailMutation = { __typename?: 'Mutation', signUpWithEmail: boolean };

export type Send_Password_Reset_EmailMutationVariables = Exact<{
  sendPasswordResetEmailInput: SendResetPasswordEmailInput;
}>;


export type Send_Password_Reset_EmailMutation = { __typename?: 'Mutation', sendPasswordResetEmail: boolean };

export type Sign_In_With_EmailMutationVariables = Exact<{
  signInWithEmailInput: SigninWithEmailInput;
  refreshTokenMode: RefreshTokenMode;
}>;


export type Sign_In_With_EmailMutation = { __typename?: 'Mutation', signInWithEmail: { __typename?: 'SignInResult', refreshToken?: string | null, accessToken: string, roles: Array<BaseUserRolesType>, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } } };

export type Sign_OutMutationVariables = Exact<{
  signOutInput: SignOutInput;
}>;


export type Sign_OutMutation = { __typename?: 'Mutation', signOut: boolean };

export type Redeem_CodeMutationVariables = Exact<{
  redeemCodeInput: RedeemCodeInput;
}>;


export type Redeem_CodeMutation = { __typename?: 'Mutation', redeemCode: boolean };

export type Deposit_AmountMutationVariables = Exact<{
  depositAmountInput: DepositAmountInput;
}>;


export type Deposit_AmountMutation = { __typename?: 'Mutation', depositAmount: string };

export type Sign_In_With_Refresh_Token_InitialQueryVariables = Exact<{
  signInWithRefreshTokenInput: SignInWithRefreshTokenInput;
}>;


export type Sign_In_With_Refresh_Token_InitialQuery = { __typename?: 'Query', signInWithRefreshToken: { __typename?: 'SignInWithRefreshTokenResult', accessToken: string, roles: Array<BaseUserRolesType>, baseUser: { __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any } } };

export type Sign_In_With_Refresh_Token_CookieQueryVariables = Exact<{ [key: string]: never; }>;


export type Sign_In_With_Refresh_Token_CookieQuery = { __typename?: 'Query', signInWithRefreshTokenCookie: { __typename?: 'SignInWithRefreshTokenResult', accessToken: string } };

export type Deposit_ListQueryVariables = Exact<{ [key: string]: never; }>;


export type Deposit_ListQuery = { __typename?: 'Query', depositList: Array<{ __typename?: 'DepositType', id: string, amount: number, createdAt: any }> };

export type Trip_ListQueryVariables = Exact<{ [key: string]: never; }>;


export type Trip_ListQuery = { __typename?: 'Query', tripList: Array<{ __typename?: 'TripType', id: string, distance?: number | null, entryTimeStamp: any, entryTollPrice: number, exitTimeStamp?: any | null, exitTollPrice?: number | null, entryToll: { __typename?: 'TollType', name: string }, exitToll?: { __typename?: 'TollType', name: string } | null }> };

export type User_InfoQueryVariables = Exact<{ [key: string]: never; }>;


export type User_InfoQuery = { __typename?: 'Query', userInfo: { __typename?: 'UserType', balance: number, baseUser: { __typename?: 'BaseUserType', currentTrip?: { __typename?: 'TripType', entryTimeStamp: any, entryTollId: string, entryTollPrice: number, entryToll: { __typename?: 'TollType', id: string, name: string } } | null } } };

export type Global_Toll_ListQueryVariables = Exact<{ [key: string]: never; }>;


export type Global_Toll_ListQuery = { __typename?: 'Query', globalTollList: Array<{ __typename?: 'TollType', id: string, name: string, longitude: number, latitude: number, wilayaId: string, highwayId: string, tollNetworkId: string, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', id: string, name: string, code: string }, highway: { __typename?: 'HighwayType', id: string, name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', id: string, name: string } }> };

export type Trip_PriceQueryVariables = Exact<{
  tripPriceInput: TripPriceInput;
}>;


export type Trip_PriceQuery = { __typename?: 'Query', tripPrice: { __typename?: 'TripPriceResult', distance: number, fromTollPrice: number, toTollPrice: number } };

export type User_Rfid_Tag_ListQueryVariables = Exact<{ [key: string]: never; }>;


export type User_Rfid_Tag_ListQuery = { __typename?: 'Query', userRfidTagList: Array<{ __typename?: 'RfidTagType', id: string, rfid: string, registrationNumber: string, createdAt: any }> };

export type Generate_PinQueryVariables = Exact<{ [key: string]: never; }>;


export type Generate_PinQuery = { __typename?: 'Query', generatePin: string };

export type Payment_SuccessfulSubscriptionVariables = Exact<{
  paymentSuccessfulInput: IdInput;
}>;


export type Payment_SuccessfulSubscription = { __typename?: 'Subscription', paymentSuccessful: boolean };

export type Payment_FailedSubscriptionVariables = Exact<{
  paymentFailedInput: IdInput;
}>;


export type Payment_FailedSubscription = { __typename?: 'Subscription', paymentFailed: boolean };


export const Sign_Up_With_EmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_UP_WITH_EMAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpWithEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpWithEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpWithEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpWithEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpWithEmailInput"}}}]}]}}]} as unknown as DocumentNode<Sign_Up_With_EmailMutation, Sign_Up_With_EmailMutationVariables>;
export const Send_Password_Reset_EmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SEND_PASSWORD_RESET_EMAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sendPasswordResetEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendResetPasswordEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendPasswordResetEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sendPasswordResetEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sendPasswordResetEmailInput"}}}]}]}}]} as unknown as DocumentNode<Send_Password_Reset_EmailMutation, Send_Password_Reset_EmailMutationVariables>;
export const Sign_In_With_EmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_IN_WITH_EMAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInWithEmailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SigninWithEmailInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshTokenMode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RefreshTokenMode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInWithEmailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInWithEmailInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"refreshTokenMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshTokenMode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]} as unknown as DocumentNode<Sign_In_With_EmailMutation, Sign_In_With_EmailMutationVariables>;
export const Sign_OutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGN_OUT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signOutInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignOutInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signOut"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signOutInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signOutInput"}}}]}]}}]} as unknown as DocumentNode<Sign_OutMutation, Sign_OutMutationVariables>;
export const Redeem_CodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REDEEM_CODE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"redeemCodeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RedeemCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"redeemCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"redeemCodeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"redeemCodeInput"}}}]}]}}]} as unknown as DocumentNode<Redeem_CodeMutation, Redeem_CodeMutationVariables>;
export const Deposit_AmountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DEPOSIT_AMOUNT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"depositAmountInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DepositAmountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depositAmount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depositAmountInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"depositAmountInput"}}}]}]}}]} as unknown as DocumentNode<Deposit_AmountMutation, Deposit_AmountMutationVariables>;
export const Sign_In_With_Refresh_Token_InitialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SIGN_IN_WITH_REFRESH_TOKEN_INITIAL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInWithRefreshTokenInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInWithRefreshTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithRefreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInWithRefreshTokenInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInWithRefreshTokenInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]} as unknown as DocumentNode<Sign_In_With_Refresh_Token_InitialQuery, Sign_In_With_Refresh_Token_InitialQueryVariables>;
export const Sign_In_With_Refresh_Token_CookieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SIGN_IN_WITH_REFRESH_TOKEN_COOKIE"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithRefreshTokenCookie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<Sign_In_With_Refresh_Token_CookieQuery, Sign_In_With_Refresh_Token_CookieQueryVariables>;
export const Deposit_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DEPOSIT_LIST"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depositList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<Deposit_ListQuery, Deposit_ListQueryVariables>;
export const Trip_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TRIP_LIST"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tripList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"entryTimeStamp"}},{"kind":"Field","name":{"kind":"Name","value":"entryTollPrice"}},{"kind":"Field","name":{"kind":"Name","value":"entryToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exitTimeStamp"}},{"kind":"Field","name":{"kind":"Name","value":"exitTollPrice"}},{"kind":"Field","name":{"kind":"Name","value":"exitToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Trip_ListQuery, Trip_ListQueryVariables>;
export const User_InfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"USER_INFO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"baseUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentTrip"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entryTimeStamp"}},{"kind":"Field","name":{"kind":"Name","value":"entryTollId"}},{"kind":"Field","name":{"kind":"Name","value":"entryTollPrice"}},{"kind":"Field","name":{"kind":"Name","value":"entryToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<User_InfoQuery, User_InfoQueryVariables>;
export const Global_Toll_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GLOBAL_TOLL_LIST"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"globalTollList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilayaId"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highwayId"}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetworkId"}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Global_Toll_ListQuery, Global_Toll_ListQueryVariables>;
export const Trip_PriceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TRIP_PRICE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tripPriceInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TripPriceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tripPrice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tripPriceInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tripPriceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"fromTollPrice"}},{"kind":"Field","name":{"kind":"Name","value":"toTollPrice"}}]}}]}}]} as unknown as DocumentNode<Trip_PriceQuery, Trip_PriceQueryVariables>;
export const User_Rfid_Tag_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"USER_RFID_TAG_LIST"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRfidTagList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rfid"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<User_Rfid_Tag_ListQuery, User_Rfid_Tag_ListQueryVariables>;
export const Generate_PinDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GENERATE_PIN"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generatePin"}}]}}]} as unknown as DocumentNode<Generate_PinQuery, Generate_PinQueryVariables>;
export const Payment_SuccessfulDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"PAYMENT_SUCCESSFUL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentSuccessfulInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentSuccessful"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paymentSuccessfulInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentSuccessfulInput"}}}]}]}}]} as unknown as DocumentNode<Payment_SuccessfulSubscription, Payment_SuccessfulSubscriptionVariables>;
export const Payment_FailedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"PAYMENT_FAILED"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentFailedInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentFailed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paymentFailedInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentFailedInput"}}}]}]}}]} as unknown as DocumentNode<Payment_FailedSubscription, Payment_FailedSubscriptionVariables>;