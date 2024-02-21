/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `AuthMethod` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `AuthMethod` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AuthMethod" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AuthMethod_userId_key" ON "AuthMethod"("userId");

-- AddForeignKey
ALTER TABLE "AuthMethod" ADD CONSTRAINT "AuthMethod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "BaseUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
