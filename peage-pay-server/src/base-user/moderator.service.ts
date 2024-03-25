import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ChangeRoleInput } from './input/change-role.input.gql';
import { ModeratorListInput } from './input/moderator-list.input.gql';
import { ModeratorListResult } from './result/moderator-list.result.gql';

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
      const moderatorList = await this.databaseService.moderator.findMany({
        where: {
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
        },
        take: moderatorListInput.take,
        skip: moderatorListInput.skip,
      });
      const moderatorCount = await this.databaseService.moderator.count({
        where: {
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
        },
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
    changeRoleInput: ChangeRoleInput,
  ): Promise<boolean> {
    await this.databaseService.moderator.create({
      data: {
        baseUserId: changeRoleInput.baseUserId,
      },
    });
    return true;
  }

  public async removeModeratorRole(
    changeRoleInput: ChangeRoleInput,
  ): Promise<boolean> {
    await this.databaseService.moderator.delete({
      where: {
        baseUserId: changeRoleInput.baseUserId,
      },
    });
    return true;
  }
}
