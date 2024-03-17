/*
  Warnings:

  - The values [ACTIVE,OVERLOAD] on the enum `TollStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "SectionStatus" AS ENUM ('NORMAL_TRAFFIC', 'MODERATE_TRAFFIC', 'HIGH_TRAFFIC');

-- AlterEnum
BEGIN;
CREATE TYPE "TollStatus_new" AS ENUM ('NORMAL_TRAFFIC', 'MODERATE_TRAFFIC', 'HIGH_TRAFFIC', 'OUT_OF_SERVICE');
ALTER TABLE "Toll" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Toll" ALTER COLUMN "status" TYPE "TollStatus_new" USING ("status"::text::"TollStatus_new");
ALTER TYPE "TollStatus" RENAME TO "TollStatus_old";
ALTER TYPE "TollStatus_new" RENAME TO "TollStatus";
DROP TYPE "TollStatus_old";
ALTER TABLE "Toll" ALTER COLUMN "status" SET DEFAULT 'OUT_OF_SERVICE';
COMMIT;
