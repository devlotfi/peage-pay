-- CreateTable
CREATE TABLE "DailyPrice" (
    "priceId" TEXT NOT NULL,

    CONSTRAINT "DailyPrice_pkey" PRIMARY KEY ("priceId")
);

-- CreateTable
CREATE TABLE "WeeklyPrice" (
    "priceId" TEXT NOT NULL,

    CONSTRAINT "WeeklyPrice_pkey" PRIMARY KEY ("priceId")
);

-- CreateTable
CREATE TABLE "MonthlyPrice" (
    "priceId" TEXT NOT NULL,

    CONSTRAINT "MonthlyPrice_pkey" PRIMARY KEY ("priceId")
);

-- CreateTable
CREATE TABLE "YearlyPrice" (
    "priceId" TEXT NOT NULL,

    CONSTRAINT "YearlyPrice_pkey" PRIMARY KEY ("priceId")
);

-- CreateTable
CREATE TABLE "CustomPrice" (
    "priceId" TEXT NOT NULL,

    CONSTRAINT "CustomPrice_pkey" PRIMARY KEY ("priceId")
);

-- AddForeignKey
ALTER TABLE "DailyPrice" ADD CONSTRAINT "DailyPrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyPrice" ADD CONSTRAINT "WeeklyPrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyPrice" ADD CONSTRAINT "MonthlyPrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YearlyPrice" ADD CONSTRAINT "YearlyPrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomPrice" ADD CONSTRAINT "CustomPrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
