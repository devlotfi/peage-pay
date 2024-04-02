/*
  Warnings:

  - A unique constraint covering the columns `[name,tollId]` on the table `AutomaticGate` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "AutomaticGate_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "AutomaticGate_name_tollId_key" ON "AutomaticGate"("name", "tollId");
