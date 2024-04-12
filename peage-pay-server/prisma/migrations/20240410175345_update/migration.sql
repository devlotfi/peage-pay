/*
  Warnings:

  - You are about to drop the column `pinHash` on the `BaseUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BaseUser" DROP COLUMN "pinHash";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "pinHash" TEXT;
