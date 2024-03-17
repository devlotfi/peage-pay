/*
  Warnings:

  - You are about to drop the `GraphTollDistance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GraphTollDistance" DROP CONSTRAINT "GraphTollDistance_fromTollId_fkey";

-- DropForeignKey
ALTER TABLE "GraphTollDistance" DROP CONSTRAINT "GraphTollDistance_toTollId_fkey";

-- DropTable
DROP TABLE "GraphTollDistance";

-- CreateTable
CREATE TABLE "Section" (
    "fromTollId" TEXT NOT NULL,
    "toTollId" TEXT NOT NULL,
    "distance" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("fromTollId","toTollId")
);

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_fromTollId_fkey" FOREIGN KEY ("fromTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_toTollId_fkey" FOREIGN KEY ("toTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
