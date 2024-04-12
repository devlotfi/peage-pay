/*
  Warnings:

  - You are about to drop the `DepositCode` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DepositCode";

-- CreateTable
CREATE TABLE "Code" (
    "id" TEXT NOT NULL,
    "codeHash" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Code_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Code_codeHash_key" ON "Code"("codeHash");
