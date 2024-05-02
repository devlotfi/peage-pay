-- CreateEnum
CREATE TYPE "TollStatus" AS ENUM ('NORMAL_TRAFFIC', 'MODERATE_TRAFFIC', 'HIGH_TRAFFIC', 'OUT_OF_SERVICE');

-- CreateEnum
CREATE TYPE "SectionStatus" AS ENUM ('NORMAL_TRAFFIC', 'MODERATE_TRAFFIC', 'HIGH_TRAFFIC', 'BLOCKED');

-- CreateEnum
CREATE TYPE "AutomaticGateVariant" AS ENUM ('TICKET_PRINTER', 'RFID_READER', 'QR_CODE_READER');

-- CreateEnum
CREATE TYPE "Month" AS ENUM ('JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER');

-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY');

-- CreateEnum
CREATE TYPE "TollDirection" AS ENUM ('INBOUND', 'OUTBOUND');

-- CreateTable
CREATE TABLE "AuthMethod" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "AuthMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailAuthMethod" (
    "authMethodId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "verifiedAt" TIMESTAMP(3),

    CONSTRAINT "EmailAuthMethod_pkey" PRIMARY KEY ("authMethodId")
);

-- CreateTable
CREATE TABLE "GoogleAuthMethod" (
    "authMethodId" TEXT NOT NULL,
    "googleId" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "GoogleAuthMethod_pkey" PRIMARY KEY ("authMethodId")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRefreshToken" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserRefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RfidTag" (
    "id" TEXT NOT NULL,
    "baseUserId" TEXT NOT NULL,
    "rfid" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RfidTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "days" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSubscription" (
    "baseUserId" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,

    CONSTRAINT "UserSubscription_pkey" PRIMARY KEY ("baseUserId","subscriptionId")
);

-- CreateTable
CREATE TABLE "BaseUser" (
    "id" TEXT NOT NULL,
    "currentTripId" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BaseUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "baseUserId" TEXT NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "pinHash" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("baseUserId")
);

-- CreateTable
CREATE TABLE "GeneralAdmin" (
    "baseUserId" TEXT NOT NULL,

    CONSTRAINT "GeneralAdmin_pkey" PRIMARY KEY ("baseUserId")
);

-- CreateTable
CREATE TABLE "HumanRessourcesAdmin" (
    "baseUserId" TEXT NOT NULL,

    CONSTRAINT "HumanRessourcesAdmin_pkey" PRIMARY KEY ("baseUserId")
);

-- CreateTable
CREATE TABLE "Moderator" (
    "baseUserId" TEXT NOT NULL,

    CONSTRAINT "Moderator_pkey" PRIMARY KEY ("baseUserId")
);

-- CreateTable
CREATE TABLE "TollAdmin" (
    "baseUserId" TEXT NOT NULL,
    "tollId" TEXT,

    CONSTRAINT "TollAdmin_pkey" PRIMARY KEY ("baseUserId")
);

-- CreateTable
CREATE TABLE "GateAdmin" (
    "baseUserId" TEXT NOT NULL,
    "tollId" TEXT,

    CONSTRAINT "GateAdmin_pkey" PRIMARY KEY ("baseUserId")
);

-- CreateTable
CREATE TABLE "Wilaya" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Wilaya_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Highway" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Highway_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TollNetwork" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TollNetwork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Toll" (
    "id" TEXT NOT NULL,
    "wilayaId" TEXT NOT NULL,
    "tollNetworkId" TEXT NOT NULL,
    "highwayId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "inboundStatus" "TollStatus" NOT NULL DEFAULT 'OUT_OF_SERVICE',
    "outboundStatus" "TollStatus" NOT NULL DEFAULT 'OUT_OF_SERVICE',
    "longitude" DECIMAL(65,30) NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Toll_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "fromTollId" TEXT NOT NULL,
    "toTollId" TEXT NOT NULL,
    "fromStatus" "SectionStatus" NOT NULL DEFAULT 'NORMAL_TRAFFIC',
    "toStatus" "SectionStatus" NOT NULL DEFAULT 'NORMAL_TRAFFIC',
    "distance" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("fromTollId","toTollId")
);

-- CreateTable
CREATE TABLE "TollDistance" (
    "fromTollId" TEXT NOT NULL,
    "toTollId" TEXT NOT NULL,
    "distance" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "TollDistance_pkey" PRIMARY KEY ("fromTollId","toTollId")
);

-- CreateTable
CREATE TABLE "AutomaticGateRefreshToken" (
    "id" TEXT NOT NULL,
    "automaticGateId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AutomaticGateRefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AutomaticGate" (
    "id" TEXT NOT NULL,
    "tollId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "variant" "AutomaticGateVariant" NOT NULL,
    "direction" "TollDirection" NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AutomaticGate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "entryTollId" TEXT NOT NULL,
    "exitTollId" TEXT NOT NULL,
    "baseUserId" TEXT NOT NULL,
    "entryTimeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entryTollPrice" DECIMAL(65,30) NOT NULL,
    "exitTimeStamp" TIMESTAMP(3) NOT NULL,
    "exitTollPrice" DECIMAL(65,30) NOT NULL,
    "distance" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "entryTollId" TEXT NOT NULL,
    "exitTollId" TEXT,
    "entryTimeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entryTollPrice" DECIMAL(65,30) NOT NULL,
    "exitTimeStamp" TIMESTAMP(3),
    "exitTollPrice" DECIMAL(65,30),
    "distance" DECIMAL(65,30),

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TollPrice" (
    "tollId" TEXT NOT NULL,
    "priceId" TEXT NOT NULL,
    "tollDirection" "TollDirection" NOT NULL,

    CONSTRAINT "TollPrice_pkey" PRIMARY KEY ("tollId","priceId")
);

-- CreateTable
CREATE TABLE "Price" (
    "id" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "startTimestamp" TIMESTAMP(3) NOT NULL,
    "endTimestamp" TIMESTAMP(3) NOT NULL,
    "priority" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyPrice" (
    "priceId" TEXT NOT NULL,

    CONSTRAINT "DailyPrice_pkey" PRIMARY KEY ("priceId")
);

-- CreateTable
CREATE TABLE "WeeklyPrice" (
    "priceId" TEXT NOT NULL,
    "days" "DayOfWeek"[],

    CONSTRAINT "WeeklyPrice_pkey" PRIMARY KEY ("priceId")
);

-- CreateTable
CREATE TABLE "MonthlyPrice" (
    "priceId" TEXT NOT NULL,
    "months" "Month"[],
    "startDay" INTEGER NOT NULL,
    "endDay" INTEGER NOT NULL,

    CONSTRAINT "MonthlyPrice_pkey" PRIMARY KEY ("priceId")
);

-- CreateTable
CREATE TABLE "YearlyPrice" (
    "priceId" TEXT NOT NULL,
    "months" "Month"[],
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YearlyPrice_pkey" PRIMARY KEY ("priceId")
);

-- CreateTable
CREATE TABLE "CustomPrice" (
    "priceId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomPrice_pkey" PRIMARY KEY ("priceId")
);

-- CreateTable
CREATE TABLE "DefaultPrice" (
    "id" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL DEFAULT 0,

    CONSTRAINT "DefaultPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deposit" (
    "id" TEXT NOT NULL,
    "baseUserId" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Deposit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Code" (
    "id" TEXT NOT NULL,
    "codeHash" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Code_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthMethod_userId_key" ON "AuthMethod"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "EmailAuthMethod_email_key" ON "EmailAuthMethod"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GoogleAuthMethod_googleId_key" ON "GoogleAuthMethod"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "GoogleAuthMethod_email_key" ON "GoogleAuthMethod"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_userId_key" ON "VerificationToken"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserRefreshToken_tokenHash_key" ON "UserRefreshToken"("tokenHash");

-- CreateIndex
CREATE UNIQUE INDEX "RfidTag_rfid_key" ON "RfidTag"("rfid");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_name_key" ON "Subscription"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BaseUser_currentTripId_key" ON "BaseUser"("currentTripId");

-- CreateIndex
CREATE UNIQUE INDEX "Wilaya_name_key" ON "Wilaya"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Wilaya_code_key" ON "Wilaya"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Highway_name_key" ON "Highway"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Highway_code_key" ON "Highway"("code");

-- CreateIndex
CREATE UNIQUE INDEX "TollNetwork_name_key" ON "TollNetwork"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Toll_name_key" ON "Toll"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AutomaticGateRefreshToken_automaticGateId_key" ON "AutomaticGateRefreshToken"("automaticGateId");

-- CreateIndex
CREATE UNIQUE INDEX "AutomaticGate_name_tollId_key" ON "AutomaticGate"("name", "tollId");

-- CreateIndex
CREATE UNIQUE INDEX "TollPrice_priceId_key" ON "TollPrice"("priceId");

-- CreateIndex
CREATE UNIQUE INDEX "Code_codeHash_key" ON "Code"("codeHash");

-- AddForeignKey
ALTER TABLE "AuthMethod" ADD CONSTRAINT "AuthMethod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailAuthMethod" ADD CONSTRAINT "EmailAuthMethod_authMethodId_fkey" FOREIGN KEY ("authMethodId") REFERENCES "AuthMethod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoogleAuthMethod" ADD CONSTRAINT "GoogleAuthMethod_authMethodId_fkey" FOREIGN KEY ("authMethodId") REFERENCES "AuthMethod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationToken" ADD CONSTRAINT "VerificationToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRefreshToken" ADD CONSTRAINT "UserRefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RfidTag" ADD CONSTRAINT "RfidTag_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaseUser" ADD CONSTRAINT "BaseUser_currentTripId_fkey" FOREIGN KEY ("currentTripId") REFERENCES "Trip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralAdmin" ADD CONSTRAINT "GeneralAdmin_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HumanRessourcesAdmin" ADD CONSTRAINT "HumanRessourcesAdmin_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Moderator" ADD CONSTRAINT "Moderator_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollAdmin" ADD CONSTRAINT "TollAdmin_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollAdmin" ADD CONSTRAINT "TollAdmin_tollId_fkey" FOREIGN KEY ("tollId") REFERENCES "Toll"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GateAdmin" ADD CONSTRAINT "GateAdmin_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GateAdmin" ADD CONSTRAINT "GateAdmin_tollId_fkey" FOREIGN KEY ("tollId") REFERENCES "Toll"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Toll" ADD CONSTRAINT "Toll_wilayaId_fkey" FOREIGN KEY ("wilayaId") REFERENCES "Wilaya"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Toll" ADD CONSTRAINT "Toll_highwayId_fkey" FOREIGN KEY ("highwayId") REFERENCES "Highway"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Toll" ADD CONSTRAINT "Toll_tollNetworkId_fkey" FOREIGN KEY ("tollNetworkId") REFERENCES "TollNetwork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_fromTollId_fkey" FOREIGN KEY ("fromTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_toTollId_fkey" FOREIGN KEY ("toTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollDistance" ADD CONSTRAINT "TollDistance_fromTollId_fkey" FOREIGN KEY ("fromTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollDistance" ADD CONSTRAINT "TollDistance_toTollId_fkey" FOREIGN KEY ("toTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AutomaticGateRefreshToken" ADD CONSTRAINT "AutomaticGateRefreshToken_automaticGateId_fkey" FOREIGN KEY ("automaticGateId") REFERENCES "AutomaticGate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AutomaticGate" ADD CONSTRAINT "AutomaticGate_tollId_fkey" FOREIGN KEY ("tollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_entryTollId_fkey" FOREIGN KEY ("entryTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_exitTollId_fkey" FOREIGN KEY ("exitTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_entryTollId_fkey" FOREIGN KEY ("entryTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_exitTollId_fkey" FOREIGN KEY ("exitTollId") REFERENCES "Toll"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollPrice" ADD CONSTRAINT "TollPrice_tollId_fkey" FOREIGN KEY ("tollId") REFERENCES "Toll"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollPrice" ADD CONSTRAINT "TollPrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyPrice" ADD CONSTRAINT "DailyPrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyPrice" ADD CONSTRAINT "WeeklyPrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyPrice" ADD CONSTRAINT "MonthlyPrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YearlyPrice" ADD CONSTRAINT "YearlyPrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomPrice" ADD CONSTRAINT "CustomPrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposit" ADD CONSTRAINT "Deposit_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
