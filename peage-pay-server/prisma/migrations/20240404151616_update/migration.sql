-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_exitTollId_fkey";

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "exitTollId" DROP NOT NULL,
ALTER COLUMN "exitTimeStamp" DROP NOT NULL,
ALTER COLUMN "exitTollPrice" DROP NOT NULL,
ALTER COLUMN "distance" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_exitTollId_fkey" FOREIGN KEY ("exitTollId") REFERENCES "Toll"("id") ON DELETE SET NULL ON UPDATE CASCADE;
