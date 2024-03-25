import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ModeratorListInput } from './input/moderator-list.input.gql';
import { ModeratorListResult } from './result/moderator-list.result.gql';
import { Prisma } from '@prisma/client';
import { IdInput } from 'src/shared/graphql/id-input.gql';

@Injectable()
export class ModeratorService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async moderatorList(
    moderatorListInput: ModeratorListInput,
  ): Promise<ModeratorListResult> {
    if (
      moderatorListInput.idSearch ||
      moderatorListInput.firstNameSearch ||
      moderatorListInput.lastNameSearch
    ) {
      const whereQuery: Prisma.ModeratorWhereInput = {
        baseUser: {
          OR: [
            {
              id: {
                contains: moderatorListInput.idSearch,
                mode: 'insensitive',
              },
            },
            {
              firstName: {
                contains: moderatorListInput.firstNameSearch,
                mode: 'insensitive',
              },
            },
            {
              lastName: {
                contains: moderatorListInput.lastNameSearch,
                mode: 'insensitive',
              },
            },
          ],
        },
      };
      const moderatorList = await this.databaseService.moderator.findMany({
        where: whereQuery,
        take: moderatorListInput.take,
        skip: moderatorListInput.skip,
      });
      const moderatorCount = await this.databaseService.moderator.count({
        where: whereQuery,
      });

      return {
        count: moderatorCount,
        list: moderatorList as any,
      };
    } else {
      const moderatorList = await this.databaseService.moderator.findMany({
        take: moderatorListInput.take,
        skip: moderatorListInput.skip,
      });
      const moderatorCount = await this.databaseService.moderator.count();

      return {
        count: moderatorCount,
        list: moderatorList as any,
      };
    }
  }

  public async addModeratorRole(
    caddModeratorRoleInput: IdInput,
  ): Promise<boolean> {
    await this.databaseService.moderator.create({
      data: {
        baseUserId: caddModeratorRoleInput.id,
      },
    });
    return true;
  }

  public async removeModeratorRole(
    removeModeratorRoleInput: IdInput,
  ): Promise<boolean> {
    await this.databaseService.moderator.delete({
      where: {
        baseUserId: removeModeratorRoleInput.id,
      },
    });
    return true;
  }
}
