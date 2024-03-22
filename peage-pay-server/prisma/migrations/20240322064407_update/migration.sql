/*
  Warnings:

  - You are about to drop the column `pdatedAt` on the `Price` table. All the data in the column will be lost.
  - The `days` column on the `WeeklyPrice` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `updatedAt` to the `Price` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY');

-- DropForeignKey
ALTER TABLE "CustomPrice" DROP CONSTRAINT "CustomPrice_priceId_fkey";

-- DropForeignKey
ALTER TABLE "DailyPrice" DROP CONSTRAINT "DailyPrice_priceId_fkey";

-- DropForeignKey
ALTER TABLE "MonthlyPrice" DROP CONSTRAINT "MonthlyPrice_priceId_fkey";

-- DropForeignKey
ALTER TABLE "WeeklyPrice" DROP CONSTRAINT "WeeklyPrice_priceId_fkey";

-- DropForeignKey
ALTER TABLE "YearlyPrice" DROP CONSTRAINT "YearlyPrice_priceId_fkey";

-- AlterTable
ALTER TABLE "Price" DROP COLUMN "pdatedAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "WeeklyPrice" DROP COLUMN "days",
ADD COLUMN     "days" "DayOfWeek"[];

-- DropEnum
DROP TYPE "LaneStatus";

-- DropEnum
DROP TYPE "PaymentMethod";

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
