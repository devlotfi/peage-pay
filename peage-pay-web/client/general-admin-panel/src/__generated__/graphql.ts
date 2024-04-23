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

export type ChangeTollStatusInput = {
  inboundStatus: TollStatusType;
  outboundStatus: TollStatusType;
  tollId: Scalars['String']['input'];
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
  fromStatus: SectionStatusType;
  fromTollId: Scalars['String']['input'];
  toStatus: SectionStatusType;
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
  inboundStatus?: InputMaybe<TollStatusType>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  outboundStatus?: InputMaybe<TollStatusType>;
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
  changeTollStatus: Scalars['Boolean']['output'];
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


export type MutationChangeTollStatusArgs = {
  changeTollStatusInput: ChangeTollStatusInput;
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
  depositList: Array<DepositType>;
  fullTollList: Array<TollType>;
  gateAdminById?: Maybe<GateAdminType>;
  gateAdminInfo?: Maybe<GateAdminType>;
  gateAdminList: GateAdminListResult;
  highwayById?: Maybe<HighwayType>;
  highwayList: HighwayListResult;
  lol: Scalars['String']['output'];
  moderatorList: ModeratorListResult;
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
  tollById: TollType;
  tollDistanceList: TollDistanceListResult;
  tollList: TollListResult;
  tollNetworkById: TollNetworkType;
  tollNetworkList: TollNetworkListResult;
  tollPrice: Scalars['Boolean']['output'];
  tripList: Array<TripType>;
  userInfo: UserType;
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
  tollPriceInput: IdInput;
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

export enum SectionStatusType {
  Blocked = 'BLOCKED',
  HighTraffic = 'HIGH_TRAFFIC',
  ModerateTraffic = 'MODERATE_TRAFFIC',
  NormalTraffic = 'NORMAL_TRAFFIC'
}

export type SectionType = {
  __typename?: 'SectionType';
  distance: Scalars['Float']['output'];
  fromStatus: SectionStatusType;
  fromToll: TollType;
  fromTollId: Scalars['String']['output'];
  toStatus: SectionStatusType;
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
  inboundStatus: TollStatusType;
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  outboundStatus: TollStatusType;
  tollNetwork: TollNetworkType;
  tollNetworkId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  wilaya: WilayaType;
  wilayaId: Scalars['String']['output'];
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
  baseUser?: Maybe<BaseUserType>;
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

export type Add_HighwayMutationVariables = Exact<{
  addHighwayInput: AddHighwayInput;
}>;


export type Add_HighwayMutation = { __typename?: 'Mutation', addHighway: { __typename?: 'HighwayType', id: string, name: string, code: string, createdAt: any, updatedAt: any } };

export type Edit_HighwayMutationVariables = Exact<{
  editHighwayInput: EditHighwayInput;
}>;


export type Edit_HighwayMutation = { __typename?: 'Mutation', editHighway: { __typename?: 'HighwayType', id: string, name: string, code: string, createdAt: any, updatedAt: any } };

export type Delete_HighwayMutationVariables = Exact<{
  deleteHighwayInput: IdInput;
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
  deleteSubscriptionInput: IdInput;
}>;


export type Delete_SubscriptionMutation = { __typename?: 'Mutation', deleteSubscription: boolean };

export type Add_TollMutationVariables = Exact<{
  addTollInput: AddTollInput;
}>;


export type Add_TollMutation = { __typename?: 'Mutation', addToll: { __typename?: 'TollType', id: string, name: string, inboundStatus: TollStatusType, outboundStatus: TollStatusType, longitude: number, latitude: number, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', id: string, name: string, code: string }, highway: { __typename?: 'HighwayType', id: string, name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', id: string, name: string } } };

export type Edit_TollMutationVariables = Exact<{
  editTollInput: EditTollInput;
}>;


export type Edit_TollMutation = { __typename?: 'Mutation', editToll: { __typename?: 'TollType', id: string, name: string, inboundStatus: TollStatusType, outboundStatus: TollStatusType, longitude: number, latitude: number, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', id: string, name: string, code: string }, highway: { __typename?: 'HighwayType', id: string, name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', id: string, name: string } } };

export type Delete_TollMutationVariables = Exact<{
  deleteTollInput: IdInput;
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
  deleteTollNetworkInput: IdInput;
}>;


export type Delete_Toll_NetworkMutation = { __typename?: 'Mutation', deleteTollNetwork: boolean };

export type Add_SectionMutationVariables = Exact<{
  addSectionInput: AddSectionInput;
}>;


export type Add_SectionMutation = { __typename?: 'Mutation', addSection: { __typename?: 'SectionType', fromTollId: string, toTollId: string, distance: number, fromStatus: SectionStatusType, toStatus: SectionStatusType } };

export type Edit_SectionMutationVariables = Exact<{
  editSectionInput: EditSectionInput;
}>;


export type Edit_SectionMutation = { __typename?: 'Mutation', editSection: { __typename?: 'SectionType', fromTollId: string, toTollId: string, fromStatus: SectionStatusType, toStatus: SectionStatusType } };

export type Delete_SectionMutationVariables = Exact<{
  deleteSectionInput: DeleteSectionInput;
}>;


export type Delete_SectionMutation = { __typename?: 'Mutation', deleteSection: boolean };

export type Add_Human_Ressources_Admin_RoleMutationVariables = Exact<{
  addHumanRessoucesAdminRoleInput: IdInput;
}>;


export type Add_Human_Ressources_Admin_RoleMutation = { __typename?: 'Mutation', addHumanRessoucesAdminRole: boolean };

export type Remove_Human_Ressources_Admin_RoleMutationVariables = Exact<{
  removeHumanRessoucesAdminRoleInput: IdInput;
}>;


export type Remove_Human_Ressources_Admin_RoleMutation = { __typename?: 'Mutation', removeHumanRessoucesAdminRole: boolean };

export type Add_Global_PriceMutationVariables = Exact<{
  addPriceInput: AddGlobalPriceInput;
}>;


export type Add_Global_PriceMutation = { __typename?: 'Mutation', addGlobalPrice: boolean };

export type Delete_Global_PriceMutationVariables = Exact<{
  deletePriceInput: IdInput;
}>;


export type Delete_Global_PriceMutation = { __typename?: 'Mutation', deleteGlobalPrice: boolean };

export type Generate_Toll_DistancesMutationVariables = Exact<{
  generateTollDistancesInput: IdInput;
}>;


export type Generate_Toll_DistancesMutation = { __typename?: 'Mutation', generateTollDistances: boolean };

export type Highway_ListQueryVariables = Exact<{
  highwayListInput: HighwayListInput;
}>;


export type Highway_ListQuery = { __typename?: 'Query', highwayList: { __typename?: 'HighwayListResult', count: number, list: Array<{ __typename?: 'HighwayType', id: string, name: string, code: string, createdAt: any, updatedAt: any }> } };

export type Highway_By_IdQueryVariables = Exact<{
  highwayByIdInput: IdInput;
}>;


export type Highway_By_IdQuery = { __typename?: 'Query', highwayById?: { __typename?: 'HighwayType', code: string, id: string, name: string, createdAt: any, updatedAt: any } | null };

export type Subscription_ListQueryVariables = Exact<{
  subscriptionListInput: SubscriptionListInput;
}>;


export type Subscription_ListQuery = { __typename?: 'Query', subscriptionList: { __typename?: 'SubscriptionListResult', count: number, list: Array<{ __typename?: 'SubscriptionType', id: string, name: string, days: number, price: number, createdAt: any, updatedAt: any }> } };

export type Subscription_By_IdQueryVariables = Exact<{
  subscriptionByIdInput: IdInput;
}>;


export type Subscription_By_IdQuery = { __typename?: 'Query', subscriptionById?: { __typename?: 'SubscriptionType', id: string, name: string, days: number, price: number, createdAt: any, updatedAt: any } | null };

export type Full_Toll_ListQueryVariables = Exact<{
  fullTollListInput: IdInput;
}>;


export type Full_Toll_ListQuery = { __typename?: 'Query', fullTollList: Array<{ __typename?: 'TollType', id: string, name: string, inboundStatus: TollStatusType, outboundStatus: TollStatusType, longitude: number, latitude: number, wilayaId: string, highwayId: string, tollNetworkId: string, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', id: string, name: string, code: string }, highway: { __typename?: 'HighwayType', id: string, name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', id: string, name: string } }> };

export type Toll_ListQueryVariables = Exact<{
  tollListInput: TollListInput;
}>;


export type Toll_ListQuery = { __typename?: 'Query', tollList: { __typename?: 'TollListResult', count: number, list: Array<{ __typename?: 'TollType', id: string, name: string, inboundStatus: TollStatusType, outboundStatus: TollStatusType, longitude: number, latitude: number, wilayaId: string, highwayId: string, tollNetworkId: string, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', id: string, name: string, code: string }, highway: { __typename?: 'HighwayType', id: string, name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', id: string, name: string } }> } };

export type Toll_By_IdQueryVariables = Exact<{
  tollByIdInput: IdInput;
}>;


export type Toll_By_IdQuery = { __typename?: 'Query', tollById: { __typename?: 'TollType', id: string, name: string, inboundStatus: TollStatusType, outboundStatus: TollStatusType, longitude: number, latitude: number, wilayaId: string, highwayId: string, tollNetworkId: string, createdAt: any, updatedAt: any, wilaya: { __typename?: 'WilayaType', id: string, name: string, code: string }, highway: { __typename?: 'HighwayType', id: string, name: string, code: string }, tollNetwork: { __typename?: 'TollNetworkType', id: string, name: string } } };

export type Toll_Network_ListQueryVariables = Exact<{
  tollNetworkListInput: TollNetworkListInput;
}>;


export type Toll_Network_ListQuery = { __typename?: 'Query', tollNetworkList: { __typename?: 'TollNetworkListResult', count: number, list: Array<{ __typename?: 'TollNetworkType', id: string, name: string, createdAt: any, updatedAt: any }> } };

export type Toll_Network_By_IdQueryVariables = Exact<{
  tollNetworkByIdInput: IdInput;
}>;


export type Toll_Network_By_IdQuery = { __typename?: 'Query', tollNetworkById: { __typename?: 'TollNetworkType', id: string, name: string, createdAt: any, updatedAt: any } };

export type Wilaya_ListQueryVariables = Exact<{
  wilayaListInput: WilayaListInput;
}>;


export type Wilaya_ListQuery = { __typename?: 'Query', wilayaList: { __typename?: 'WilayaListResult', count: number, list: Array<{ __typename?: 'WilayaType', id: string, name: string, code: string }> } };

export type Wilaya_By_IdQueryVariables = Exact<{
  wilayaByIdInput: IdInput;
}>;


export type Wilaya_By_IdQuery = { __typename?: 'Query', wilayaById: { __typename?: 'WilayaType', id: string, name: string, code: string } };

export type Section_List_For_Toll_NetworkQueryVariables = Exact<{
  sectionListForTollNetworkInput: IdInput;
}>;


export type Section_List_For_Toll_NetworkQuery = { __typename?: 'Query', sectionListForTollNetwork: Array<{ __typename?: 'SectionType', distance: number, fromStatus: SectionStatusType, toStatus: SectionStatusType, fromToll: { __typename?: 'TollType', id: string, name: string, latitude: number, longitude: number }, toToll: { __typename?: 'TollType', id: string, name: string, latitude: number, longitude: number } }> };

export type Section_List_For_TollQueryVariables = Exact<{
  sectionListForTollInput: SectionListForTollInput;
}>;


export type Section_List_For_TollQuery = { __typename?: 'Query', sectionListForToll: { __typename?: 'SectionListResult', count: number, list: Array<{ __typename?: 'SectionType', distance: number, fromStatus: SectionStatusType, toStatus: SectionStatusType, fromToll: { __typename?: 'TollType', id: string, name: string }, toToll: { __typename?: 'TollType', id: string, name: string } }> } };

export type Section_By_IdsQueryVariables = Exact<{
  sectionByIdsInput: SectionByIdsInput;
}>;


export type Section_By_IdsQuery = { __typename?: 'Query', sectionByIds?: { __typename?: 'SectionType', distance: number, fromStatus: SectionStatusType, toStatus: SectionStatusType, fromToll: { __typename?: 'TollType', id: string, name: string }, toToll: { __typename?: 'TollType', id: string, name: string } } | null };

export type Base_User_ListQueryVariables = Exact<{
  baseUserListInput: BaseUserListInput;
}>;


export type Base_User_ListQuery = { __typename?: 'Query', baseUserList: { __typename?: 'BaseUserListResult', count: number, list: Array<{ __typename?: 'BaseUserType', id: string, firstName: string, lastName: string, createdAt: any, updatedAt: any, roles: Array<BaseUserRolesType> }> } };

export type Daily_Price_Global_ListQueryVariables = Exact<{
  priceListInput: PaginationInput;
}>;


export type Daily_Price_Global_ListQuery = { __typename?: 'Query', dailyPriceGlobalList: { __typename?: 'DailyPriceListResult', count: number, list: Array<{ __typename?: 'DailyPriceType', priceId: string, price: { __typename?: 'PriceType', id: string, value: number, priority: number, startTimestamp: any, endTimestamp: any, createdAt: any, updatedAt: any } }> } };

export type Weekly_Price_Global_ListQueryVariables = Exact<{
  priceListInput: PaginationInput;
}>;


export type Weekly_Price_Global_ListQuery = { __typename?: 'Query', weeklyPriceGlobalList: { __typename?: 'WeeklyPriceListResult', count: number, list: Array<{ __typename?: 'WeeklyPriceType', days: Array<DayOfWeekType>, priceId: string, price: { __typename?: 'PriceType', id: string, value: number, priority: number, startTimestamp: any, endTimestamp: any, createdAt: any, updatedAt: any } }> } };

export type Monthly_Price_Global_ListQueryVariables = Exact<{
  priceListInput: PaginationInput;
}>;


export type Monthly_Price_Global_ListQuery = { __typename?: 'Query', monthlyPriceGlobalList: { __typename?: 'MonthlyPriceListResult', count: number, list: Array<{ __typename?: 'MonthlyPriceType', startDay: number, endDay: number, months: Array<MonthType>, priceId: string, price: { __typename?: 'PriceType', id: string, value: number, priority: number, startTimestamp: any, endTimestamp: any, createdAt: any, updatedAt: any } }> } };

export type Yearly_Price_Global_ListQueryVariables = Exact<{
  priceListInput: PaginationInput;
}>;


export type Yearly_Price_Global_ListQuery = { __typename?: 'Query', yearlyPriceGlobalList: { __typename?: 'YearlyPriceListResult', count: number, list: Array<{ __typename?: 'YearlyPriceType', startDate: any, endDate: any, priceId: string, price: { __typename?: 'PriceType', id: string, value: number, priority: number, startTimestamp: any, endTimestamp: any, createdAt: any, updatedAt: any } }> } };

export type Custom_Price_Global_ListQueryVariables = Exact<{
  priceListInput: PaginationInput;
}>;


export type Custom_Price_Global_ListQuery = { __typename?: 'Query', customPriceGlobalList: { __typename?: 'CustomPriceListResult', count: number, list: Array<{ __typename?: 'CustomPriceType', priceId: string, startDate: any, endDate: any, price: { __typename?: 'PriceType', id: string, value: number, priority: number, startTimestamp: any, endTimestamp: any, createdAt: any, updatedAt: any } }> } };

export type Toll_Distance_ListQueryVariables = Exact<{
  tollDistanceListInput: TollDistanceListInput;
}>;


export type Toll_Distance_ListQuery = { __typename?: 'Query', tollDistanceList: { __typename?: 'TollDistanceListResult', count: number, list: Array<{ __typename?: 'TollDistanceType', distance: number, fromToll: { __typename?: 'TollType', id: string, name: string }, toToll: { __typename?: 'TollType', id: string, name: string } }> } };


export const Add_HighwayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_HIGHWAY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addHighwayInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddHighwayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addHighway"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addHighwayInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addHighwayInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Add_HighwayMutation, Add_HighwayMutationVariables>;
export const Edit_HighwayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_HIGHWAY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editHighwayInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditHighwayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editHighway"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editHighwayInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editHighwayInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Edit_HighwayMutation, Edit_HighwayMutationVariables>;
export const Delete_HighwayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_HIGHWAY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteHighwayInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteHighway"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteHighwayInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteHighwayInput"}}}]}]}}]} as unknown as DocumentNode<Delete_HighwayMutation, Delete_HighwayMutationVariables>;
export const Add_SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_SUBSCRIPTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addSubscriptionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addSubscriptionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addSubscriptionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Add_SubscriptionMutation, Add_SubscriptionMutationVariables>;
export const Edit_SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_SUBSCRIPTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editSubscriptionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editSubscriptionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editSubscriptionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Edit_SubscriptionMutation, Edit_SubscriptionMutationVariables>;
export const Delete_SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_SUBSCRIPTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSubscriptionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteSubscriptionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSubscriptionInput"}}}]}]}}]} as unknown as DocumentNode<Delete_SubscriptionMutation, Delete_SubscriptionMutationVariables>;
export const Add_TollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_TOLL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddTollInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addTollInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"inboundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"outboundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Add_TollMutation, Add_TollMutationVariables>;
export const Edit_TollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_TOLL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditTollInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editToll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editTollInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"inboundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"outboundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Edit_TollMutation, Edit_TollMutationVariables>;
export const Delete_TollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_TOLL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteToll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTollInput"}}}]}]}}]} as unknown as DocumentNode<Delete_TollMutation, Delete_TollMutationVariables>;
export const Add_Toll_NetworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_TOLL_NETWORK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addTollNetworkInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddTollNetworkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTollNetwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addTollNetworkInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addTollNetworkInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Add_Toll_NetworkMutation, Add_Toll_NetworkMutationVariables>;
export const Edit_Toll_NetworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_TOLL_NETWORK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editTollNetworkInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditTollNetworkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editTollNetwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editTollNetworkInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editTollNetworkInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Edit_Toll_NetworkMutation, Edit_Toll_NetworkMutationVariables>;
export const Delete_Toll_NetworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_TOLL_NETWORK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTollNetworkInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTollNetwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteTollNetworkInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTollNetworkInput"}}}]}]}}]} as unknown as DocumentNode<Delete_Toll_NetworkMutation, Delete_Toll_NetworkMutationVariables>;
export const Add_SectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_SECTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addSectionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddSectionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addSectionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addSectionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fromTollId"}},{"kind":"Field","name":{"kind":"Name","value":"toTollId"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"fromStatus"}},{"kind":"Field","name":{"kind":"Name","value":"toStatus"}}]}}]}}]} as unknown as DocumentNode<Add_SectionMutation, Add_SectionMutationVariables>;
export const Edit_SectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EDIT_SECTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editSectionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditSectionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editSectionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editSectionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fromTollId"}},{"kind":"Field","name":{"kind":"Name","value":"toTollId"}},{"kind":"Field","name":{"kind":"Name","value":"fromStatus"}},{"kind":"Field","name":{"kind":"Name","value":"toStatus"}}]}}]}}]} as unknown as DocumentNode<Edit_SectionMutation, Edit_SectionMutationVariables>;
export const Delete_SectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_SECTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSectionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSectionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteSectionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSectionInput"}}}]}]}}]} as unknown as DocumentNode<Delete_SectionMutation, Delete_SectionMutationVariables>;
export const Add_Human_Ressources_Admin_RoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_HUMAN_RESSOURCES_ADMIN_ROLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addHumanRessoucesAdminRoleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addHumanRessoucesAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addHumanRessoucesAdminRoleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addHumanRessoucesAdminRoleInput"}}}]}]}}]} as unknown as DocumentNode<Add_Human_Ressources_Admin_RoleMutation, Add_Human_Ressources_Admin_RoleMutationVariables>;
export const Remove_Human_Ressources_Admin_RoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REMOVE_HUMAN_RESSOURCES_ADMIN_ROLE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeHumanRessoucesAdminRoleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeHumanRessoucesAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"removeHumanRessoucesAdminRoleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeHumanRessoucesAdminRoleInput"}}}]}]}}]} as unknown as DocumentNode<Remove_Human_Ressources_Admin_RoleMutation, Remove_Human_Ressources_Admin_RoleMutationVariables>;
export const Add_Global_PriceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_GLOBAL_PRICE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addPriceInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddGlobalPriceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addGlobalPrice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addPriceInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addPriceInput"}}}]}]}}]} as unknown as DocumentNode<Add_Global_PriceMutation, Add_Global_PriceMutationVariables>;
export const Delete_Global_PriceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_GLOBAL_PRICE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deletePriceInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteGlobalPrice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deletePriceInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deletePriceInput"}}}]}]}}]} as unknown as DocumentNode<Delete_Global_PriceMutation, Delete_Global_PriceMutationVariables>;
export const Generate_Toll_DistancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GENERATE_TOLL_DISTANCES"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"generateTollDistancesInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateTollDistances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"generateTollDistancesInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"generateTollDistancesInput"}}}]}]}}]} as unknown as DocumentNode<Generate_Toll_DistancesMutation, Generate_Toll_DistancesMutationVariables>;
export const Highway_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HIGHWAY_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"highwayListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HighwayListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"highwayList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"highwayListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"highwayListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Highway_ListQuery, Highway_ListQueryVariables>;
export const Highway_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HIGHWAY_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"highwayByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"highwayById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"highwayByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"highwayByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Highway_By_IdQuery, Highway_By_IdQueryVariables>;
export const Subscription_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SUBSCRIPTION_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscriptionListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptionList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscriptionListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Subscription_ListQuery, Subscription_ListQueryVariables>;
export const Subscription_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SUBSCRIPTION_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptionById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscriptionByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Subscription_By_IdQuery, Subscription_By_IdQueryVariables>;
export const Full_Toll_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FULL_TOLL_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullTollListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullTollList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fullTollListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullTollListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"inboundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"outboundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilayaId"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highwayId"}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetworkId"}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Full_Toll_ListQuery, Full_Toll_ListQueryVariables>;
export const Toll_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TollListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"inboundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"outboundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilayaId"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highwayId"}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetworkId"}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Toll_ListQuery, Toll_ListQueryVariables>;
export const Toll_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"inboundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"outboundStatus"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"wilayaId"}},{"kind":"Field","name":{"kind":"Name","value":"wilaya"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highwayId"}},{"kind":"Field","name":{"kind":"Name","value":"highway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tollNetworkId"}},{"kind":"Field","name":{"kind":"Name","value":"tollNetwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Toll_By_IdQuery, Toll_By_IdQueryVariables>;
export const Toll_Network_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_NETWORK_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollNetworkListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TollNetworkListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollNetworkList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollNetworkListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollNetworkListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Toll_Network_ListQuery, Toll_Network_ListQueryVariables>;
export const Toll_Network_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_NETWORK_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollNetworkByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollNetworkById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollNetworkByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollNetworkByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Toll_Network_By_IdQuery, Toll_Network_By_IdQueryVariables>;
export const Wilaya_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WILAYA_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wilayaListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WilayaListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wilayaList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"wilayaListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wilayaListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]} as unknown as DocumentNode<Wilaya_ListQuery, Wilaya_ListQueryVariables>;
export const Wilaya_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WILAYA_BY_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wilayaByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wilayaById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"wilayaByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wilayaByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Wilaya_By_IdQuery, Wilaya_By_IdQueryVariables>;
export const Section_List_For_Toll_NetworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SECTION_LIST_FOR_TOLL_NETWORK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sectionListForTollNetworkInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sectionListForTollNetwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sectionListForTollNetworkInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sectionListForTollNetworkInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"fromStatus"}},{"kind":"Field","name":{"kind":"Name","value":"toStatus"}},{"kind":"Field","name":{"kind":"Name","value":"fromToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"toToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]} as unknown as DocumentNode<Section_List_For_Toll_NetworkQuery, Section_List_For_Toll_NetworkQueryVariables>;
export const Section_List_For_TollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SECTION_LIST_FOR_TOLL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sectionListForTollInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SectionListForTollInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sectionListForToll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sectionListForTollInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sectionListForTollInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"fromStatus"}},{"kind":"Field","name":{"kind":"Name","value":"toStatus"}},{"kind":"Field","name":{"kind":"Name","value":"fromToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"toToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Section_List_For_TollQuery, Section_List_For_TollQueryVariables>;
export const Section_By_IdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SECTION_BY_IDS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sectionByIdsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SectionByIdsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sectionByIds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sectionByIdsInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sectionByIdsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"fromStatus"}},{"kind":"Field","name":{"kind":"Name","value":"toStatus"}},{"kind":"Field","name":{"kind":"Name","value":"fromToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"toToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Section_By_IdsQuery, Section_By_IdsQueryVariables>;
export const Base_User_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BASE_USER_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"baseUserListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BaseUserListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseUserList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"baseUserListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"baseUserListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]}}]} as unknown as DocumentNode<Base_User_ListQuery, Base_User_ListQueryVariables>;
export const Daily_Price_Global_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DAILY_PRICE_GLOBAL_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyPriceGlobalList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"priceListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceId"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"startTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"endTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Daily_Price_Global_ListQuery, Daily_Price_Global_ListQueryVariables>;
export const Weekly_Price_Global_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WEEKLY_PRICE_GLOBAL_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weeklyPriceGlobalList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"priceListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"priceId"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"startTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"endTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Weekly_Price_Global_ListQuery, Weekly_Price_Global_ListQueryVariables>;
export const Monthly_Price_Global_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MONTHLY_PRICE_GLOBAL_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthlyPriceGlobalList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"priceListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDay"}},{"kind":"Field","name":{"kind":"Name","value":"endDay"}},{"kind":"Field","name":{"kind":"Name","value":"months"}},{"kind":"Field","name":{"kind":"Name","value":"priceId"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"startTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"endTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Monthly_Price_Global_ListQuery, Monthly_Price_Global_ListQueryVariables>;
export const Yearly_Price_Global_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"YEARLY_PRICE_GLOBAL_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"yearlyPriceGlobalList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"priceListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"priceId"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"startTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"endTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Yearly_Price_Global_ListQuery, Yearly_Price_Global_ListQueryVariables>;
export const Custom_Price_Global_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CUSTOM_PRICE_GLOBAL_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customPriceGlobalList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"priceListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceId"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"startTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"endTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Custom_Price_Global_ListQuery, Custom_Price_Global_ListQueryVariables>;
export const Toll_Distance_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TOLL_DISTANCE_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tollDistanceListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TollDistanceListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tollDistanceList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tollDistanceListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tollDistanceListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"fromToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"toToll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Toll_Distance_ListQuery, Toll_Distance_ListQueryVariables>;