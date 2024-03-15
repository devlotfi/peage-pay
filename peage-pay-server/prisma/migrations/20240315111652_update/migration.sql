/*
  Warnings:

  - You are about to drop the column `priceType` on the `Price` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleType` on the `Subscription` table. All the data in the column will be lost.
  - The primary key for the `UserSubscription` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `rfidTagId` on the `UserSubscription` table. All the data in the column will be lost.
  - You are about to drop the `Lane` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PhoneAuthMethod` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[currentTripId]` on the table `BaseUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `endDay` to the `MonthlyPrice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDay` to the `MonthlyPrice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseUserId` to the `RfidTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `days` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDay` to the `YearlyPrice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDay` to the `YearlyPrice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Lane" DROP CONSTRAINT "Lane_tollId_fkey";

-- DropForeignKey
ALTER TABLE "PhoneAuthMethod" DROP CONSTRAINT "PhoneAuthMethod_authMethodId_fkey";

-- DropForeignKey
ALTER TABLE "UserSubscription" DROP CONSTRAINT "UserSubscription_rfidTagId_fkey";

-- DropIndex
DROP INDEX "UserSubscription_rfidTagId_key";

-- AlterTable
ALTER TABLE "BaseUser" ADD COLUMN     "currentTripId" TEXT;

-- AlterTable
ALTER TABLE "MonthlyPrice" ADD COLUMN     "endDay" INTEGER NOT NULL,
ADD COLUMN     "startDay" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Price" DROP COLUMN "priceType";

-- AlterTable
ALTER TABLE "RfidTag" ADD COLUMN     "baseUserId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "vehicleType",
ADD COLUMN     "days" INTEGER NOT NULL,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "UserSubscription" DROP CONSTRAINT "UserSubscription_pkey",
DROP COLUMN "rfidTagId",
ADD CONSTRAINT "UserSubscription_pkey" PRIMARY KEY ("baseUserId", "subscriptionId");

-- AlterTable
ALTER TABLE "WeeklyPrice" ADD COLUMN     "days" INTEGER[];

-- AlterTable
ALTER TABLE "YearlyPrice" ADD COLUMN     "endDay" INTEGER NOT NULL,
ADD COLUMN     "months" INTEGER[],
ADD COLUMN     "startDay" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Lane";

-- DropTable
DROP TABLE "PhoneAuthMethod";

-- DropEnum
DROP TYPE "PriceType";

-- DropEnum
DROP TYPE "VehicleType";

-- CreateIndex
CREATE UNIQUE INDEX "BaseUser_currentTripId_key" ON "BaseUser"("currentTripId");

-- AddForeignKey
ALTER TABLE "RfidTag" ADD CONSTRAINT "RfidTag_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaseUser" ADD CONSTRAINT "BaseUser_currentTripId_fkey" FOREIGN KEY ("currentTripId") REFERENCES "Trip"("id") ON DELETE SET NULL ON UPDATE CASCADE;
