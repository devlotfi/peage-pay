import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ChangeRoleInput } from './input/change-role.input.gql';
import { ChangeTollInput } from './input/change-toll.input.gql';
import { TollAdminListInput } from './input/toll-admin-list.input.gql';
import { TollAdminListResult } from './result/toll-admin-list.result.gql';

@Injectable()
export class TollAdminService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async tollAdminList(
    tollAdminListInput: TollAdminListInput,
  ): Promise<TollAdminListResult> {
    if (
      tollAdminListInput.idSearch ||
      tollAdminListInput.firstNameSearch ||
      tollAdminListInput.lastNameSearch ||
      tollAdminListInput.tollNameSearch
    ) {
      const tollAdminList = await this.databaseService.tollAdmin.findMany({
        where: {
          OR: [
            {
              toll: {
                name: {
                  contains: tollAdminListInput.tollNameSearch,
                  mode: 'insensitive',
                },
              },
            },
            {
              baseUser: {
                OR: [
                  {
                    id: {
                      contains: tollAdminListInput.idSearch,
                      mode: 'insensitive',
                    },
                  },
                  {
                    firstName: {
                      contains: tollAdminListInput.firstNameSearch,
                      mode: 'insensitive',
                    },
                  },
                  {
                    lastName: {
                      contains: tollAdminListInput.lastNameSearch,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
          ],
        },
        take: tollAdminListInput.take,
        skip: tollAdminListInput.skip,
      });
      const tollAdminCount = await this.databaseService.tollAdmin.count({
        where: {
          OR: [
            {
              toll: {
                name: {
                  contains: tollAdminListInput.tollNameSearch,
                  mode: 'insensitive',
                },
              },
            },
            {
              baseUser: {
                OR: [
                  {
                    id: {
                      contains: tollAdminListInput.idSearch,
                      mode: 'insensitive',
                    },
                  },
                  {
                    firstName: {
                      contains: tollAdminListInput.firstNameSearch,
                      mode: 'insensitive',
                    },
                  },
                  {
                    lastName: {
                      contains: tollAdminListInput.lastNameSearch,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
          ],
        },
      });

      return {
        count: tollAdminCount,
        list: tollAdminList as any,
      };
    } else {
      const tollAdminList = await this.databaseService.tollAdmin.findMany({
        take: tollAdminListInput.take,
        skip: tollAdminListInput.skip,
      });
      const tollAdminCount = await this.databaseService.tollAdmin.count();

      return {
        count: tollAdminCount,
        list: tollAdminList as any,
      };
    }
  }

  public async addTollAdminRole(
    changeRoleInput: ChangeRoleInput,
  ): Promise<boolean> {
    await this.databaseService.tollAdmin.create({
      data: {
        baseUserId: changeRoleInput.baseUserId,
      },
    });
    return true;
  }

  public async removeTollAdminRole(
    changeRoleInput: ChangeRoleInput,
  ): Promise<boolean> {
    await this.databaseService.tollAdmin.delete({
      where: {
        baseUserId: changeRoleInput.baseUserId,
      },
    });
    return true;
  }

  public async changeTollAdminToll(
    changeTollInput: ChangeTollInput,
  ): Promise<boolean> {
    await this.databaseService.tollAdmin.update({
      data: {
        toll: {
          connect: {
            id: changeTollInput.tollId,
          },
        },
      },
      where: {
        baseUserId: changeTollInput.baseUserId,
      },
    });
    return true;
  }
}
