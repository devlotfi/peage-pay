import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { GeneralAdminStatistics } from './graphql/general-admin-statistics.gql';
import { HumanRessourcesAdminStatistics } from './graphql/human-ressources-admin-statistics.gql';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { BaseUserErrors } from 'src/user/graphql/base-user-errors.gql';
import { GraphQLError } from 'graphql';
import { TollAdminStatistics } from './graphql/toll-admin-statistics.gql';
import { ModeratorStatistics } from './graphql/moderator-statistics.gql';

@Injectable()
export class StatisticsService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async generalAdminStatistics(): Promise<GeneralAdminStatistics> {
    const highwayCountPromise = this.databaseService.highway.count();
    const tollNetworkCountPromise = this.databaseService.tollNetwork.count();
    const subscriptionCountPromise = this.databaseService.subscription.count();
    const humanRessourcesCountPromise =
      this.databaseService.humanRessourcesAdmin.count();
    await Promise.all([
      highwayCountPromise,
      tollNetworkCountPromise,
      subscriptionCountPromise,
      humanRessourcesCountPromise,
    ]);
    return {
      highwayCount: await highwayCountPromise,
      tollNetworksCount: await tollNetworkCountPromise,
      subscriptionsCount: await subscriptionCountPromise,
      humanRessourcesAdminCount: await humanRessourcesCountPromise,
    };
  }

  public async humanRessourcesAdminStatistics(): Promise<HumanRessourcesAdminStatistics> {
    const userCountPromise = this.databaseService.baseUser.count();
    const tollAdminCountPromise = this.databaseService.tollAdmin.count();
    const gateAdminCountPromise = this.databaseService.gateAdmin.count();
    const moderatorCountPromise = this.databaseService.moderator.count();
    await Promise.all([
      userCountPromise,
      tollAdminCountPromise,
      gateAdminCountPromise,
      moderatorCountPromise,
    ]);
    return {
      userCount: await userCountPromise,
      tollAdminCount: await tollAdminCountPromise,
      gateAdminCount: await gateAdminCountPromise,
      moderatorCount: await moderatorCountPromise,
    };
  }

  public async tollAdminStatistics(
    userAccessTokenPayload: UserAccessTokenPayload,
  ): Promise<TollAdminStatistics> {
    const tollAdmin = await this.databaseService.tollAdmin.findFirstOrThrow({
      where: {
        baseUserId: userAccessTokenPayload.userId,
      },
    });
    if (!tollAdmin.tollId) {
      throw new GraphQLError(BaseUserErrors.INSUFFICIENT_PRIVILEGES);
    }

    const automaticGateCountPromise = this.databaseService.automaticGate.count({
      where: {
        tollId: tollAdmin.tollId,
      },
    });
    const ticketPrinterCountPromise = this.databaseService.automaticGate.count({
      where: {
        tollId: tollAdmin.tollId,
        variant: 'TICKET_PRINTER',
      },
    });
    const rfidReaderCountPromise = this.databaseService.automaticGate.count({
      where: {
        tollId: tollAdmin.tollId,
        variant: 'RFID_READER',
      },
    });
    const qrCodeReaderCountPromise = this.databaseService.automaticGate.count({
      where: {
        tollId: tollAdmin.tollId,
        variant: 'QR_CODE_READER',
      },
    });
    const localGateAdminCountPromise = this.databaseService.gateAdmin.count({
      where: {
        tollId: tollAdmin.tollId,
      },
    });
    await Promise.all([
      automaticGateCountPromise,
      ticketPrinterCountPromise,
      rfidReaderCountPromise,
      qrCodeReaderCountPromise,
      localGateAdminCountPromise,
    ]);
    return {
      automaticGateCount: await automaticGateCountPromise,
      ticketPrinterCount: await ticketPrinterCountPromise,
      rfidReaderCount: await rfidReaderCountPromise,
      qrCodeReaderCount: await qrCodeReaderCountPromise,
      localGateAdminCount: await localGateAdminCountPromise,
    };
  }

  public async moderatorStatistics(): Promise<ModeratorStatistics> {
    const userCountPromise = this.databaseService.baseUser.count();
    const rfidTagCountPromise = this.databaseService.rfidTag.count();
    await Promise.all([userCountPromise, rfidTagCountPromise]);
    return {
      userCount: await userCountPromise,
      rfidTagCount: await rfidTagCountPromise,
    };
  }
}
