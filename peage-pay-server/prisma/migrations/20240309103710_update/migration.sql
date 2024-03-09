/*
  Warnings:

  - The primary key for the `UserSubscription` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[name]` on the table `AutomaticGate` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[number]` on the table `Lane` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Toll` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rfidTagId]` on the table `UserSubscription` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rfidTagId` to the `UserSubscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "vehicleType" "VehicleType" NOT NULL DEFAULT 'LIGHTWEIGHT';

-- AlterTable
ALTER TABLE "UserSubscription" DROP CONSTRAINT "UserSubscription_pkey",
ADD COLUMN     "rfidTagId" TEXT NOT NULL,
ADD CONSTRAINT "UserSubscription_pkey" PRIMARY KEY ("baseUserId", "subscriptionId", "rfidTagId");

-- CreateTable
CREATE TABLE "RfidTag" (
    "id" TEXT NOT NULL,
    "rfid" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RfidTag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RfidTag_rfid_key" ON "RfidTag"("rfid");

-- CreateIndex
CREATE UNIQUE INDEX "AutomaticGate_name_key" ON "AutomaticGate"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Lane_number_key" ON "Lane"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Toll_name_key" ON "Toll"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserSubscription_rfidTagId_key" ON "UserSubscription"("rfidTagId");

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_rfidTagId_fkey" FOREIGN KEY ("rfidTagId") REFERENCES "RfidTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
