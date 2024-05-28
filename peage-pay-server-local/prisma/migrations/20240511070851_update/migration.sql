/*
  Warnings:

  - You are about to drop the column `fromStatus` on the `Section` table. All the data in the column will be lost.
  - You are about to drop the column `toStatus` on the `Section` table. All the data in the column will be lost.
  - You are about to drop the column `inboundStatus` on the `Toll` table. All the data in the column will be lost.
  - You are about to drop the column `outboundStatus` on the `Toll` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Section" DROP COLUMN "fromStatus",
DROP COLUMN "toStatus";

-- AlterTable
ALTER TABLE "Toll" DROP COLUMN "inboundStatus",
DROP COLUMN "outboundStatus";

-- DropEnum
DROP TYPE "SectionStatus";

-- DropEnum
DROP TYPE "TollStatus";
