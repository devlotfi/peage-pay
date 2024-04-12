/*
  Warnings:

  - You are about to drop the `ReloadCode` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ReloadCode";

-- CreateTable
CREATE TABLE "Deposit" (
    "id" TEXT NOT NULL,
    "baseUserId" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Deposit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DepositCode" (
    "id" TEXT NOT NULL,
    "codeHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DepositCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DepositCode_codeHash_key" ON "DepositCode"("codeHash");

-- AddForeignKey
ALTER TABLE "Deposit" ADD CONSTRAINT "Deposit_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
