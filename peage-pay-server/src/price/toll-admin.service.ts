import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { AccessTokenPayload } from 'src/auth/types/access-token-payload.type';
import { DatabaseService } from 'src/database/database.service';
import { PrismaErrors } from 'src/shared/graphql/prisma-errors.gql';

@Injectable()
export class TollAdminService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async getTollAdminData(accessTokenPayload: AccessTokenPayload) {
    const tollAdminData = await this.databaseService.baseUser.findUnique({
      where: {
        id: accessTokenPayload.userId,
      },
      include: {
        tollAdmin: {
          include: {
            toll: true,
          },
        },
      },
    });
    if (
      !tollAdminData ||
      !tollAdminData.tollAdmin ||
      !tollAdminData.tollAdmin.toll
    ) {
      throw new GraphQLError(PrismaErrors.NOT_FOUND);
    }
    return tollAdminData;
  }
}
