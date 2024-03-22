import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { AccessTokenPayload } from 'src/auth/types/access-token-payload.type';
import { BaseUserErrors } from 'src/base-user/graphql/base-user-errors.gql';
import { DatabaseService } from 'src/database/database.service';
import { TollErrors } from 'src/toll/graphql/toll-errors.gql';

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
    if (!tollAdminData) {
      throw new GraphQLError(BaseUserErrors.BASE_USER_NOT_FOUND);
    }
    if (!tollAdminData.tollAdmin) {
      throw new GraphQLError(BaseUserErrors.INSUFFICIENT_PRIVILEGES);
    }
    if (!tollAdminData.tollAdmin.toll) {
      throw new GraphQLError(TollErrors.TOLL_NOT_FOUND);
    }
    return tollAdminData;
  }
}
