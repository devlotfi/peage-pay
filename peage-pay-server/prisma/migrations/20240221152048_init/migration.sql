-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "AuthMethod" (
    "id" TEXT NOT NULL,

    CONSTRAINT "AuthMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailAuthMethod" (
    "authMethodId" TEXT NOT NULL,

    CONSTRAINT "EmailAuthMethod_pkey" PRIMARY KEY ("authMethodId")
);

-- CreateTable
CREATE TABLE "GoogleAuthMethod" (
    "authMethodId" TEXT NOT NULL,

    CONSTRAINT "GoogleAuthMethod_pkey" PRIMARY KEY ("authMethodId")
);

-- CreateTable
CREATE TABLE "PhoneAuthMethod" (
    "authMethodId" TEXT NOT NULL,

    CONSTRAINT "PhoneAuthMethod_pkey" PRIMARY KEY ("authMethodId")
);

-- CreateTable
CREATE TABLE "BaseUser" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BaseUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "baseUserId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("baseUserId")
);

-- CreateTable
CREATE TABLE "GeneralAdmin" (
    "baseUserId" TEXT NOT NULL,

    CONSTRAINT "GeneralAdmin_pkey" PRIMARY KEY ("baseUserId")
);

-- CreateTable
CREATE TABLE "HumanRessourcesAdmin" (
    "baseUserId" TEXT NOT NULL,

    CONSTRAINT "HumanRessourcesAdmin_pkey" PRIMARY KEY ("baseUserId")
);

-- CreateTable
CREATE TABLE "Moderator" (
    "baseUserId" TEXT NOT NULL,

    CONSTRAINT "Moderator_pkey" PRIMARY KEY ("baseUserId")
);

-- CreateTable
CREATE TABLE "TollAdmin" (
    "baseUserId" TEXT NOT NULL,

    CONSTRAINT "TollAdmin_pkey" PRIMARY KEY ("baseUserId")
);

-- CreateTable
CREATE TABLE "GateAdmin" (
    "baseUserId" TEXT NOT NULL,

    CONSTRAINT "GateAdmin_pkey" PRIMARY KEY ("baseUserId")
);

-- AddForeignKey
ALTER TABLE "EmailAuthMethod" ADD CONSTRAINT "EmailAuthMethod_authMethodId_fkey" FOREIGN KEY ("authMethodId") REFERENCES "AuthMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoogleAuthMethod" ADD CONSTRAINT "GoogleAuthMethod_authMethodId_fkey" FOREIGN KEY ("authMethodId") REFERENCES "AuthMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhoneAuthMethod" ADD CONSTRAINT "PhoneAuthMethod_authMethodId_fkey" FOREIGN KEY ("authMethodId") REFERENCES "AuthMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralAdmin" ADD CONSTRAINT "GeneralAdmin_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HumanRessourcesAdmin" ADD CONSTRAINT "HumanRessourcesAdmin_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Moderator" ADD CONSTRAINT "Moderator_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TollAdmin" ADD CONSTRAINT "TollAdmin_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GateAdmin" ADD CONSTRAINT "GateAdmin_baseUserId_fkey" FOREIGN KEY ("baseUserId") REFERENCES "BaseUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
