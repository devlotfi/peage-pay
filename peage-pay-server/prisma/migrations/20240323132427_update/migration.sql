/*
  Warnings:

  - You are about to drop the column `endDay` on the `YearlyPrice` table. All the data in the column will be lost.
  - You are about to drop the column `startDay` on the `YearlyPrice` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `YearlyPrice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `YearlyPrice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MonthlyPrice" ADD COLUMN     "months" "Month"[];

-- AlterTable
ALTER TABLE "YearlyPrice" DROP COLUMN "endDay",
DROP COLUMN "startDay",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
