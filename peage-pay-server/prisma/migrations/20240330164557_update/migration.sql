-- DropForeignKey
ALTER TABLE "AuthMethod" DROP CONSTRAINT "AuthMethod_userId_fkey";

-- DropForeignKey
ALTER TABLE "EmailAuthMethod" DROP CONSTRAINT "EmailAuthMethod_authMethodId_fkey";

-- DropForeignKey
ALTER TABLE "GateAdmin" DROP CONSTRAINT "GateAdmin_baseUserId_fkey";

-- DropForeignKey
ALTER TABLE "GeneralAdmin" DROP CONSTRAINT "GeneralAdmin_baseUserId_fkey";

-- DropForeignKey
ALTER TABLE "GoogleAuthMethod" DROP CONSTRAINT "GoogleAuthMethod_authMethodId_fkey";

-- DropForeignKey
ALTER TABLE "HumanRessourcesAdmin" DROP CONSTRAINT "HumanRessourcesAdmin_baseUserId_fkey";

-- DropForeignKey
ALTER TABLE "Moderator" DROP CONSTRAINT "Moderator_baseUserId_fkey";

-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "RfidTag" DROP CONSTRAINT "RfidTag_baseUserId_fkey";

-- DropForeignKey
ALTER TABLE "TollAdmin" DROP CONSTRAINT "TollAdmin_baseUserId_fkey";

-- DropForeignKey
ALTER TABLE "Trip" DROP CONSTRAINT "Trip_baseUserId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_baseUserId_fkey";

-- DropForeignKey
ALTER TABLE "UserSubscription" DROP CONSTRAINT "UserSubscription_baseUserId_fkey";

-- DropForeignKey
ALTER TABLE "VerificationToken" DROP CONSTRAINT "VerificationToken_userId_fkey";

-- AddForeignKey
ALTER TABLE "AuthMethod" ADD CONSTRAINT "AuthMethod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailAuthMethod" ADD CONSTRAINT "EmailAuthMethod_authMethodId_fkey" FOREIGN KEY ("authMethodId") REFERENCES "AuthMethod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoogleAuthMethod" ADD CONSTRAINT "GoogleAuthMethod_authMethodId_fkey" FOREIGN KEY ("authMethodId") REFERENCES "AuthMethod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationToken" ADD CONSTRAINT "VerificationToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RfidTag" ADD CONSTRAINT "RfidTag_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralAdmin" ADD CONSTRAINT "GeneralAdmin_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HumanRessourcesAdmin" ADD CONSTRAINT "HumanRessourcesAdmin_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Moderator" ADD CONSTRAINT "Moderator_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollAdmin" ADD CONSTRAINT "TollAdmin_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GateAdmin" ADD CONSTRAINT "GateAdmin_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
