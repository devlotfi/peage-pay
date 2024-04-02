-- DropForeignKey
ALTER TABLE "Price" DROP CONSTRAINT "Price_tollId_fkey";

-- CreateTable
CREATE TABLE "TollPrice" (
    "tollId" TEXT NOT NULL,
    "priceId" TEXT NOT NULL,
    "distance" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "TollPrice_pkey" PRIMARY KEY ("tollId","priceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "TollPrice_tollId_key" ON "TollPrice"("tollId");

-- CreateIndex
CREATE UNIQUE INDEX "TollPrice_priceId_key" ON "TollPrice"("priceId");

-- AddForeignKey
ALTER TABLE "TollPrice" ADD CONSTRAINT "TollPrice_tollId_fkey" FOREIGN KEY ("tollId") REFERENCES "Toll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollPrice" ADD CONSTRAINT "TollPrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
