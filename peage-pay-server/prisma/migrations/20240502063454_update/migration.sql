-- DropForeignKey
ALTER TABLE "Section" DROP CONSTRAINT "Section_fromTollId_fkey";

-- DropForeignKey
ALTER TABLE "Section" DROP CONSTRAINT "Section_toTollId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_entryTollId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_exitTollId_fkey";

-- DropForeignKey
ALTER TABLE "Trip" DROP CONSTRAINT "Trip_entryTollId_fkey";

-- DropForeignKey
ALTER TABLE "Trip" DROP CONSTRAINT "Trip_exitTollId_fkey";

-- AlterTable
ALTER TABLE "Trip" ALTER COLUMN "exitTollId" DROP NOT NULL,
ALTER COLUMN "exitTimeStamp" DROP NOT NULL,
ALTER COLUMN "exitTollPrice" DROP NOT NULL,
ALTER COLUMN "distance" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_fromTollId_fkey" FOREIGN KEY ("fromTollId") REFERENCES "Toll"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_toTollId_fkey" FOREIGN KEY ("toTollId") REFERENCES "Toll"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_entryTollId_fkey" FOREIGN KEY ("entryTollId") REFERENCES "Toll"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_exitTollId_fkey" FOREIGN KEY ("exitTollId") REFERENCES "Toll"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_entryTollId_fkey" FOREIGN KEY ("entryTollId") REFERENCES "Toll"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_exitTollId_fkey" FOREIGN KEY ("exitTollId") REFERENCES "Toll"("id") ON DELETE CASCADE ON UPDATE CASCADE;
