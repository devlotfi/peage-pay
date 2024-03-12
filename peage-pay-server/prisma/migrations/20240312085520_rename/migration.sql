/*
  Warnings:

  - You are about to drop the `AdjacentTollDistance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AdjacentTollDistance" DROP CONSTRAINT "AdjacentTollDistance_fromTollId_fkey";

-- DropForeignKey
ALTER TABLE "AdjacentTollDistance" DROP CONSTRAINT "AdjacentTollDistance_toTollId_fkey";

-- DropTable
DROP TABLE "AdjacentTollDistance";

-- CreateTable
CREATE TABLE "GraphTollDistance" (
    "fromTollId" TEXT NOT NULL,
    "toTollId" TEXT NOT NULL,
    "distance" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "GraphTollDistance_pkey" PRIMARY KEY ("fromTollId","toTollId")
);

-- AddForeignKey
ALTER TABLE "GraphTollDistance" ADD CONSTRAINT "GraphTollDistance_fromTollId_fkey" FOREIGN KEY ("fromTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GraphTollDistance" ADD CONSTRAINT "GraphTollDistance_toTollId_fkey" FOREIGN KEY ("toTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
