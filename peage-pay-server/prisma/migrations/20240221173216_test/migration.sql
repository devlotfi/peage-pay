/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `EmailAuthMethod` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[googleId]` on the table `GoogleAuthMethod` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `GoogleAuthMethod` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `PhoneAuthMethod` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `EmailAuthMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordHash` to the `EmailAuthMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verifiedAt` to the `EmailAuthMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `GoogleAuthMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `googleId` to the `GoogleAuthMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `PhoneAuthMethod` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmailAuthMethod" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "passwordHash" TEXT NOT NULL,
ADD COLUMN     "verifiedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "GoogleAuthMethod" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "googleId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PhoneAuthMethod" ADD COLUMN     "phoneNumber" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "EmailAuthMethod_email_key" ON "EmailAuthMethod"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GoogleAuthMethod_googleId_key" ON "GoogleAuthMethod"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "GoogleAuthMethod_email_key" ON "GoogleAuthMethod"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PhoneAuthMethod_phoneNumber_key" ON "PhoneAuthMethod"("phoneNumber");
