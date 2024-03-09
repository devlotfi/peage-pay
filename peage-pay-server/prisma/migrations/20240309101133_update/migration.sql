/*
  Warnings:

  - Added the required column `status` to the `Toll` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TollStatus" AS ENUM ('Active', 'Overload', 'OutOfSercvice');

-- AlterTable
ALTER TABLE "Toll" ADD COLUMN     "status" "TollStatus" NOT NULL;
