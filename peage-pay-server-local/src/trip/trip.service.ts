import { Injectable } from '@nestjs/common';
import { Trip } from '@prisma/client';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { DatabaseService } from 'src/database/database.service';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { AutomaticGateAccessTokenPayload } from 'src/automatic-gate/types/automatic-gate-access-token-payload.type';
import { TollPriceService } from 'src/toll/toll-price.service';
import { TollDirectionType } from 'src/price/graphql/toll-direction.gql';
import { RfidInput } from 'src/shared/graphql/rfid-input.gql';
import { GraphQLError } from 'graphql';
import { PrismaErrors } from 'src/shared/graphql/prisma-errors.gql';
import { TollDistanceService } from 'src/toll-distance/toll-distance.service';
import { TripPriceInput } from './input/trip-price.input.gql';
import { TripPriceResult } from './result/trip-price.result.gql';
import { QRCodeInput } from 'src/shared/graphql/qr-code-input.gql';
import { compare } from 'bcrypt';
import { AuthErrors } from 'src/auth/graphql/auth-errors.gql';

@Injectable()
export class TripService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly tollPriceService: TollPriceService,
    private readonly tollDistanceService: TollDistanceService,
  ) {}

  public async tripList(
    userAccessTokenPayload: UserAccessTokenPayload,
  ): Promise<Trip[]> {
    return await this.databaseService.trip.findMany({
      where: {
        baseUser: {
          id: userAccessTokenPayload.userId,
        },
      },
      orderBy: {
        entryTimeStamp: 'desc',
      },
    });
  }

  public async tripById(tripByIdInput: IdInput): Promise<Trip | null> {
    return await this.databaseService.trip.findUnique({
      where: {
        id: tripByIdInput.id,
      },
    });
  }

  public async tripPrice(
    tripPriceInput: TripPriceInput,
  ): Promise<TripPriceResult> {
    const distancePromise = this.tollDistanceService.tollDistance({
      fromTollId: tripPriceInput.fromTollId,
      toTollId: tripPriceInput.toTollId,
    });
    const fromTollPricePromise = this.tollPriceService.tollPrice({
      tollId: tripPriceInput.fromTollId,
      direction: TollDirectionType.INBOUND,
    });
    const toTollPricePromise = this.tollPriceService.tollPrice({
      tollId: tripPriceInput.fromTollId,
      direction: TollDirectionType.OUTBOUND,
    });
    await Promise.all([
      distancePromise,
      fromTollPricePromise,
      toTollPricePromise,
    ]);
    const distance = await distancePromise;
    const fromTollPrice = await fromTollPricePromise;
    const toTollPrice = await toTollPricePromise;

    return {
      distance,
      fromTollPrice,
      toTollPrice,
    };
  }

  public async startTripRfid(
    startTripRfidInput: RfidInput,
    automaticGateAccessTokenPayload: AutomaticGateAccessTokenPayload,
  ): Promise<boolean> {
    return await this.databaseService.$transaction(async (prisma) => {
      const automaticGate = await prisma.automaticGate.findUniqueOrThrow({
        where: {
          id: automaticGateAccessTokenPayload.automaticGateId,
        },
        include: {
          toll: true,
        },
      });
      const tollPrice = await this.tollPriceService.tollPrice({
        tollId: automaticGate.tollId,
        direction: TollDirectionType.INBOUND,
      });
      const rfidTag = await prisma.rfidTag.findUniqueOrThrow({
        where: {
          rfid: startTripRfidInput.rfid,
        },
      });

      const trip = await this.databaseService.trip.create({
        data: {
          entryTollId: automaticGate.tollId,
          entryTollPrice: tollPrice,
          entryTimeStamp: new Date(),
          baseUserId: rfidTag.baseUserId,
        },
      });
      await prisma.baseUser.update({
        data: {
          currentTripId: trip.id,
        },
        where: {
          id: rfidTag.baseUserId,
        },
      });
      return true;
    });
  }

  public async endTripRfid(
    endTripRfidInput: RfidInput,
    automaticGateAccessTokenPayload: AutomaticGateAccessTokenPayload,
  ): Promise<boolean> {
    return await this.databaseService.$transaction(async (prisma) => {
      const automaticGate = await prisma.automaticGate.findUniqueOrThrow({
        where: {
          id: automaticGateAccessTokenPayload.automaticGateId,
        },
        include: {
          toll: true,
        },
      });

      const tollPrice = await this.tollPriceService.tollPrice({
        tollId: automaticGate.tollId,
        direction: TollDirectionType.OUTBOUND,
      });
      const rfidTag = await prisma.rfidTag.findUniqueOrThrow({
        where: {
          rfid: endTripRfidInput.rfid,
        },
        include: {
          baseUser: true,
        },
      });
      if (!rfidTag.baseUser.currentTripId) {
        throw new GraphQLError(PrismaErrors.NOT_FOUND);
      }
      const trip = await prisma.trip.findUniqueOrThrow({
        where: {
          id: rfidTag.baseUser.currentTripId,
        },
      });

      const tollDistance = await this.tollDistanceService.tollDistance({
        fromTollId: trip.entryTollId,
        toTollId: automaticGate.tollId,
      });

      await prisma.trip.update({
        data: {
          exitTollId: automaticGate.tollId,
          exitTollPrice: tollPrice,
          exitTimeStamp: new Date(),
          distance: tollDistance,
        },
        where: {
          id: trip.id,
        },
      });

      const tripPrice =
        ((trip.entryTollPrice.toNumber() + tollPrice) / 2) * tollDistance;
      await prisma.user.update({
        data: {
          balance: {
            decrement: tripPrice,
          },
        },
        where: {
          baseUserId: rfidTag.baseUserId,
        },
      });
      await prisma.baseUser.update({
        data: {
          currentTripId: null,
        },
        where: {
          id: rfidTag.baseUserId,
        },
      });
      return true;
    });
  }

  public async startTripQRCode(
    startTripQRCodeInput: QRCodeInput,
    automaticGateAccessTokenPayload: AutomaticGateAccessTokenPayload,
  ): Promise<boolean> {
    return await this.databaseService.$transaction(async (prisma) => {
      const user = await this.databaseService.user.findFirstOrThrow({
        where: {
          baseUserId: startTripQRCodeInput.baseUserId,
        },
      });
      const result = await compare(
        startTripQRCodeInput.pin,
        user.pinHash || '',
      );
      if (!result) {
        throw new GraphQLError(AuthErrors.INVALID_PIN);
      }

      const automaticGate = await prisma.automaticGate.findUniqueOrThrow({
        where: {
          id: automaticGateAccessTokenPayload.automaticGateId,
        },
        include: {
          toll: true,
        },
      });
      const tollPrice = await this.tollPriceService.tollPrice({
        tollId: automaticGate.tollId,
        direction: TollDirectionType.INBOUND,
      });

      const trip = await this.databaseService.trip.create({
        data: {
          entryTollId: automaticGate.tollId,
          entryTollPrice: tollPrice,
          entryTimeStamp: new Date(),
          baseUserId: startTripQRCodeInput.baseUserId,
        },
      });
      await prisma.baseUser.update({
        data: {
          currentTripId: trip.id,
        },
        where: {
          id: startTripQRCodeInput.baseUserId,
        },
      });
      return true;
    });
  }

  public async endTripQRCode(
    endTripQRCodeInput: QRCodeInput,
    automaticGateAccessTokenPayload: AutomaticGateAccessTokenPayload,
  ): Promise<boolean> {
    return await this.databaseService.$transaction(async (prisma) => {
      const automaticGate = await prisma.automaticGate.findUniqueOrThrow({
        where: {
          id: automaticGateAccessTokenPayload.automaticGateId,
        },
        include: {
          toll: true,
        },
      });

      const tollPrice = await this.tollPriceService.tollPrice({
        tollId: automaticGate.tollId,
        direction: TollDirectionType.OUTBOUND,
      });
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          baseUserId: endTripQRCodeInput.baseUserId,
        },
        include: {
          baseUser: true,
        },
      });
      if (!user.baseUser.currentTripId) {
        throw new GraphQLError(PrismaErrors.NOT_FOUND);
      }
      const trip = await prisma.trip.findUniqueOrThrow({
        where: {
          id: user.baseUser.currentTripId,
        },
      });

      const tollDistance = await this.tollDistanceService.tollDistance({
        fromTollId: trip.entryTollId,
        toTollId: automaticGate.tollId,
      });

      await prisma.trip.update({
        data: {
          exitTollId: automaticGate.tollId,
          exitTollPrice: tollPrice,
          exitTimeStamp: new Date(),
          distance: tollDistance,
        },
        where: {
          id: trip.id,
        },
      });

      const tripPrice =
        ((trip.entryTollPrice.toNumber() + tollPrice) / 2) * tollDistance;
      await prisma.user.update({
        data: {
          balance: {
            decrement: tripPrice,
          },
        },
        where: {
          baseUserId: user.baseUserId,
        },
      });
      await prisma.baseUser.update({
        data: {
          currentTripId: null,
        },
        where: {
          id: user.baseUserId,
        },
      });
      return true;
    });
  }
}
