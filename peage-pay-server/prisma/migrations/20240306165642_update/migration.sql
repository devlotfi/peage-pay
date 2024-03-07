/*
  Warnings:

  - Added the required column `highwayId` to the `Toll` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Toll" ADD COLUMN     "highwayId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Highway" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Highway_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Highway_code_key" ON "Highway"("code");

-- AddForeignKey
ALTER TABLE "Toll" ADD CONSTRAINT "Toll_highwayId_fkey" FOREIGN KEY ("highwayId") REFERENCES "Highway"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
