-- DropForeignKey
ALTER TABLE "TollDistance" DROP CONSTRAINT "TollDistance_fromTollId_fkey";

-- DropForeignKey
ALTER TABLE "TollDistance" DROP CONSTRAINT "TollDistance_toTollId_fkey";

-- AddForeignKey
ALTER TABLE "TollDistance" ADD CONSTRAINT "TollDistance_fromTollId_fkey" FOREIGN KEY ("fromTollId") REFERENCES "Toll"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollDistance" ADD CONSTRAINT "TollDistance_toTollId_fkey" FOREIGN KEY ("toTollId") REFERENCES "Toll"("id") ON DELETE CASCADE ON UPDATE CASCADE;
