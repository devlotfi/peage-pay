/*
  Warnings:

  - You are about to drop the column `distance` on the `TollPrice` table. All the data in the column will be lost.
  - Added the required column `tollDirection` to the `TollPrice` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TollDirection" AS ENUM ('INBOUND', 'OUTBOUND');

-- DropForeignKey
ALTER TABLE "TollPrice" DROP CONSTRAINT "TollPrice_priceId_fkey";

-- DropForeignKey
ALTER TABLE "TollPrice" DROP CONSTRAINT "TollPrice_tollId_fkey";

-- AlterTable
ALTER TABLE "TollPrice" DROP COLUMN "distance",
ADD COLUMN     "tollDirection" "TollDirection" NOT NULL;

-- AddForeignKey
ALTER TABLE "TollPrice" ADD CONSTRAINT "TollPrice_tollId_fkey" FOREIGN KEY ("tollId") REFERENCES "Toll"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollPrice" ADD CONSTRAINT "TollPrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE CASCADE ON UPDATE CASCADE;
