/*
  Warnings:

  - You are about to drop the column `birthDate` on the `BaseUser` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `BaseUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BaseUser" DROP COLUMN "birthDate",
DROP COLUMN "gender";

-- DropEnum
DROP TYPE "Gender";
