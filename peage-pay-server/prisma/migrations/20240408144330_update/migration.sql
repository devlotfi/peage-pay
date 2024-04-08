/*
  Warnings:

  - A unique constraint covering the columns `[tokenHash]` on the table `UserRefreshToken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserRefreshToken_tokenHash_key" ON "UserRefreshToken"("tokenHash");
