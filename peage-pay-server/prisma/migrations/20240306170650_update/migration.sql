/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Highway` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Highway` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Highway" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Highway_name_key" ON "Highway"("name");
