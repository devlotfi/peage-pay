/*
  Warnings:

  - Added the required column `tollNetworkId` to the `Toll` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Toll" ADD COLUMN     "tollNetworkId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TollNetwork" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TollNetwork_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TollNetwork_name_key" ON "TollNetwork"("name");

-- AddForeignKey
ALTER TABLE "Toll" ADD CONSTRAINT "Toll_tollNetworkId_fkey" FOREIGN KEY ("tollNetworkId") REFERENCES "TollNetwork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
