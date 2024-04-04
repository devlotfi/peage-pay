import { Injectable } from '@nestjs/common';
import { Ticket } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { AutomaticGateAccessTokenPayload } from 'src/automatic-gate/types/automatic-gate-access-token-payload.type';
import { DatabaseService } from 'src/database/database.service';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { TollDistanceService } from 'src/toll-distance/toll-distance.service';
import { TollPriceService } from 'src/toll/toll-price.service';
import { BaseUserErrors } from 'src/user/graphql/base-user-errors.gql';

@Injectable()
export class TicketService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly tollPriceService: TollPriceService,
    private readonly tollDistanceService: TollDistanceService,
  ) {}

  public async generateTicket(
    automaticGateAccessTokenPayload: AutomaticGateAccessTokenPayload,
  ): Promise<Ticket> {
    const automaticGate =
      await this.databaseService.automaticGate.findUniqueOrThrow({
        where: {
          id: automaticGateAccessTokenPayload.automaticGateId,
        },
        include: {
          toll: true,
        },
      });
    automaticGate.toll.id;
    const tollPrice = await this.tollPriceService.tollPrice();

    const ticket = await this.databaseService.ticket.create({
      data: {
        entryToll: {
          connect: {
            id: automaticGateAccessTokenPayload.automaticGateId,
          },
        },
        entryTollPrice: tollPrice,
        entryTimeStamp: new Date(),
      },
    });

    return ticket;
  }

  public async validateTicket(
    validateTicketInput: IdInput,
    userAccessTokenPayload: UserAccessTokenPayload,
  ): Promise<Ticket> {
    const ticketPromise = this.databaseService.ticket.findUniqueOrThrow({
      where: {
        id: validateTicketInput.id,
      },
    });

    const gateAdminPromise = this.databaseService.gateAdmin.findUniqueOrThrow({
      where: {
        baseUserId: userAccessTokenPayload.userId,
      },
      include: {
        toll: true,
      },
    });
    await Promise.all([ticketPromise, gateAdminPromise]);
    const ticket = await ticketPromise;
    const gateAdmin = await gateAdminPromise;
    if (!gateAdmin.toll) {
      throw new GraphQLError(BaseUserErrors.TOLL_NOT_ASSIGNED);
    }

    const tollPricePromise = this.tollPriceService.tollPrice();
    const tollDistancePromise = this.tollDistanceService.tollDistance(
      ticket.entryTollId,
      gateAdmin.toll.id,
    );
    await Promise.all([tollPricePromise, tollDistancePromise]);
    const tollPrice = await tollPricePromise;
    const tollDistance = await tollDistancePromise;

    const updatedTicket = await this.databaseService.ticket.update({
      where: {
        id: ticket.id,
      },
      data: {
        exitToll: {
          connect: {
            id: gateAdmin.toll.id,
          },
        },
        exitTollPrice: tollPrice,
        exitTimeStamp: new Date(),
        distance: tollDistance,
      },
    });

    return updatedTicket;
  }
}
