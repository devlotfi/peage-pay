/*
  Warnings:

  - The `months` column on the `YearlyPrice` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Month" AS ENUM ('JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER');

-- AlterTable
ALTER TABLE "YearlyPrice" DROP COLUMN "months",
ADD COLUMN     "months" "Month"[];
