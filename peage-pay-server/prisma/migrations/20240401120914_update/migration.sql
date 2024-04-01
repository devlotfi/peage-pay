/*
  Warnings:

  - You are about to drop the `RefreshToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_userId_fkey";

-- DropTable
DROP TABLE "RefreshToken";

-- CreateTable
CREATE TABLE "UserRefreshToken" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserRefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRefreshToken_userId_key" ON "UserRefreshToken"("userId");

-- AddForeignKey
ALTER TABLE "UserRefreshToken" ADD CONSTRAINT "UserRefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
