-- CreateEnum
CREATE TYPE "VehicleType" AS ENUM ('Lightweight', 'Truck', 'Bus', 'Taxi');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('Cash', 'MobileApp', 'TollBadge');

-- CreateEnum
CREATE TYPE "LaneStatus" AS ENUM ('Active', 'OutOfSercvice');

-- CreateEnum
CREATE TYPE "PriceType" AS ENUM ('Override', 'Add', 'Subsctract', 'AddPercentage', 'SubscractPercentage');

-- AlterTable
ALTER TABLE "GateAdmin" ADD COLUMN     "tollId" TEXT;

-- AlterTable
ALTER TABLE "TollAdmin" ADD COLUMN     "tollId" TEXT;

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
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
CREATE TABLE "Wilaya" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" INTEGER NOT NULL,

    CONSTRAINT "Wilaya_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Toll" (
    "id" TEXT NOT NULL,
    "wilayaId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Toll_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TollDistance" (
    "fromTollId" TEXT NOT NULL,
    "toTollId" TEXT NOT NULL,
    "distance" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "TollDistance_pkey" PRIMARY KEY ("fromTollId","toTollId")
);

-- CreateTable
CREATE TABLE "Lane" (
    "id" TEXT NOT NULL,
    "tollId" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "status" "LaneStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lane_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AutomaticGate" (
    "id" TEXT NOT NULL,
    "tollId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
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
    "exitTollId" TEXT NOT NULL,
    "entryTimeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entryTollPrice" DECIMAL(65,30) NOT NULL,
    "exitTimeStamp" TIMESTAMP(3) NOT NULL,
    "exitTollPrice" DECIMAL(65,30) NOT NULL,
    "distance" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Price" (
    "id" TEXT NOT NULL,
    "tollId" TEXT,
    "value" DECIMAL(65,30) NOT NULL,
    "startTimestamp" TIMESTAMP(3) NOT NULL,
    "endTimestamp" TIMESTAMP(3) NOT NULL,
    "priceType" "PriceType" NOT NULL,
    "priority" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefaultPrice" (
    "id" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "DefaultPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReloadCode" (
    "id" TEXT NOT NULL,
    "codeHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReloadCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_name_key" ON "Subscription"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Wilaya_name_key" ON "Wilaya"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Wilaya_code_key" ON "Wilaya"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ReloadCode_codeHash_key" ON "ReloadCode"("codeHash");

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollAdmin" ADD CONSTRAINT "TollAdmin_tollId_fkey" FOREIGN KEY ("tollId") REFERENCES "Toll"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GateAdmin" ADD CONSTRAINT "GateAdmin_tollId_fkey" FOREIGN KEY ("tollId") REFERENCES "Toll"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Toll" ADD CONSTRAINT "Toll_wilayaId_fkey" FOREIGN KEY ("wilayaId") REFERENCES "Wilaya"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollDistance" ADD CONSTRAINT "TollDistance_fromTollId_fkey" FOREIGN KEY ("fromTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollDistance" ADD CONSTRAINT "TollDistance_toTollId_fkey" FOREIGN KEY ("toTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lane" ADD CONSTRAINT "Lane_tollId_fkey" FOREIGN KEY ("tollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AutomaticGate" ADD CONSTRAINT "AutomaticGate_tollId_fkey" FOREIGN KEY ("tollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_entryTollId_fkey" FOREIGN KEY ("entryTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_exitTollId_fkey" FOREIGN KEY ("exitTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_entryTollId_fkey" FOREIGN KEY ("entryTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_exitTollId_fkey" FOREIGN KEY ("exitTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_tollId_fkey" FOREIGN KEY ("tollId") REFERENCES "Toll"("id") ON DELETE SET NULL ON UPDATE CASCADE;
