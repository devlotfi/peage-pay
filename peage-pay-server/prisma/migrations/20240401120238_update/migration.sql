/*
  Warnings:

  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "VerificationToken" DROP CONSTRAINT "VerificationToken_userId_fkey";

-- DropTable
DROP TABLE "VerificationToken";

-- CreateTable
CREATE TABLE "UserVerificationToken" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserVerificationToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserVerificationToken_userId_key" ON "UserVerificationToken"("userId");

-- AddForeignKey
ALTER TABLE "UserVerificationToken" ADD CONSTRAINT "UserVerificationToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
