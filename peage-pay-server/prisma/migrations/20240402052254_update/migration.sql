/*
  Warnings:

  - You are about to drop the column `status` on the `Section` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Toll` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Section" DROP COLUMN "status",
ADD COLUMN     "fromStatus" "SectionStatus" NOT NULL DEFAULT 'NORMAL_TRAFFIC',
ADD COLUMN     "toStatus" "SectionStatus" NOT NULL DEFAULT 'NORMAL_TRAFFIC';

-- AlterTable
ALTER TABLE "Toll" DROP COLUMN "status",
ADD COLUMN     "inboundStatus" "TollStatus" NOT NULL DEFAULT 'OUT_OF_SERVICE',
ADD COLUMN     "outboundStatus" "TollStatus" NOT NULL DEFAULT 'OUT_OF_SERVICE';
