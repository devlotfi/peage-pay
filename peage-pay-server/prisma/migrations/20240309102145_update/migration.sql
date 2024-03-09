/*
  Warnings:

  - The values [Active,OutOfSercvice] on the enum `LaneStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [Cash,MobileApp,TollBadge] on the enum `PaymentMethod` will be removed. If these variants are still used in the database, this will fail.
  - The values [Override,Add,Subsctract,AddPercentage,SubscractPercentage] on the enum `PriceType` will be removed. If these variants are still used in the database, this will fail.
  - The values [Active,Overload,OutOfSercvice] on the enum `TollStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [Lightweight,Truck,Bus,Taxi] on the enum `VehicleType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LaneStatus_new" AS ENUM ('ACTIVE', 'OUT_OF_SERVICE');
ALTER TABLE "Lane" ALTER COLUMN "status" TYPE "LaneStatus_new" USING ("status"::text::"LaneStatus_new");
ALTER TYPE "LaneStatus" RENAME TO "LaneStatus_old";
ALTER TYPE "LaneStatus_new" RENAME TO "LaneStatus";
DROP TYPE "LaneStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PaymentMethod_new" AS ENUM ('CASH', 'MOBILE_APP', 'TOLL_BADGE');
ALTER TABLE "Lane" ALTER COLUMN "paymentMethod" TYPE "PaymentMethod_new" USING ("paymentMethod"::text::"PaymentMethod_new");
ALTER TYPE "PaymentMethod" RENAME TO "PaymentMethod_old";
ALTER TYPE "PaymentMethod_new" RENAME TO "PaymentMethod";
DROP TYPE "PaymentMethod_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PriceType_new" AS ENUM ('OVERRIDE', 'ADD', 'SUBSCTRACT', 'ADD_PERCENTAGE', 'SUBSCTRACT_PERCENTAGE');
ALTER TABLE "Price" ALTER COLUMN "priceType" TYPE "PriceType_new" USING ("priceType"::text::"PriceType_new");
ALTER TYPE "PriceType" RENAME TO "PriceType_old";
ALTER TYPE "PriceType_new" RENAME TO "PriceType";
DROP TYPE "PriceType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "TollStatus_new" AS ENUM ('ACTIVE', 'OVERLOAD', 'OUT_OF_SERVICE');
ALTER TABLE "Toll" ALTER COLUMN "status" TYPE "TollStatus_new" USING ("status"::text::"TollStatus_new");
ALTER TYPE "TollStatus" RENAME TO "TollStatus_old";
ALTER TYPE "TollStatus_new" RENAME TO "TollStatus";
DROP TYPE "TollStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "VehicleType_new" AS ENUM ('LIGHTWEIGHT', 'TRUCK', 'BUS', 'TAXI');
ALTER TYPE "VehicleType" RENAME TO "VehicleType_old";
ALTER TYPE "VehicleType_new" RENAME TO "VehicleType";
DROP TYPE "VehicleType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Toll" ALTER COLUMN "status" SET DEFAULT 'OUT_OF_SERVICE';
