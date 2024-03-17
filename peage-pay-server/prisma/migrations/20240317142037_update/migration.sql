/*
  Warnings:

  - The `status` column on the `Toll` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `status` on the `Section` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TrafficStatus" AS ENUM ('NORMAL_TRAFFIC', 'MODERATE_TRAFFIC', 'HIGH_TRAFFIC', 'OUT_OF_SERVICE');

-- AlterTable
ALTER TABLE "Section" DROP COLUMN "status",
ADD COLUMN     "status" "TrafficStatus" NOT NULL;

-- AlterTable
ALTER TABLE "Toll" DROP COLUMN "status",
ADD COLUMN     "status" "TrafficStatus" NOT NULL DEFAULT 'OUT_OF_SERVICE';

-- DropEnum
DROP TYPE "SectionStatus";

-- DropEnum
DROP TYPE "TollStatus";
