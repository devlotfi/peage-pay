-- CreateEnum
CREATE TYPE "AutomaticGateVariant" AS ENUM ('TICKET_PRINTER', 'RFID_READER', 'QR_CODE_READER');

-- AlterTable
ALTER TABLE "AutomaticGate" ADD COLUMN     "variant" "AutomaticGateVariant" NOT NULL DEFAULT 'RFID_READER';
