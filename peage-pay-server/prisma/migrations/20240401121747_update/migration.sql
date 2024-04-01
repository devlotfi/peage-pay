-- CreateTable
CREATE TABLE "AutomaticGateRefreshToken" (
    "id" TEXT NOT NULL,
    "automaticGateId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AutomaticGateRefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AutomaticGateRefreshToken_automaticGateId_key" ON "AutomaticGateRefreshToken"("automaticGateId");

-- AddForeignKey
ALTER TABLE "AutomaticGateRefreshToken" ADD CONSTRAINT "AutomaticGateRefreshToken_automaticGateId_fkey" FOREIGN KEY ("automaticGateId") REFERENCES "AutomaticGate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
