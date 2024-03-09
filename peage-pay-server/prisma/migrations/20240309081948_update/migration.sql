-- CreateTable
CREATE TABLE "AdjacentTollDistance" (
    "fromTollId" TEXT NOT NULL,
    "toTollId" TEXT NOT NULL,
    "distance" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "AdjacentTollDistance_pkey" PRIMARY KEY ("fromTollId","toTollId")
);

-- AddForeignKey
ALTER TABLE "AdjacentTollDistance" ADD CONSTRAINT "AdjacentTollDistance_fromTollId_fkey" FOREIGN KEY ("fromTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdjacentTollDistance" ADD CONSTRAINT "AdjacentTollDistance_toTollId_fkey" FOREIGN KEY ("toTollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
