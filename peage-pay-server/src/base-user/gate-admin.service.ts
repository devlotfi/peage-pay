import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ChangeRoleInput } from './input/change-role.input.gql';
import { ChangeTollInput } from './input/change-toll.input.gql';
import { GateAdminListInput } from './input/gate-admin-list.input.gql';
import { GateAdminListResult } from './result/gate-admin-list.result.gql';

@Injectable()
export class GateAdminService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async gateAdminList(
    gateAdminListInput: GateAdminListInput,
  ): Promise<GateAdminListResult> {
    if (
      gateAdminListInput.idSearch ||
      gateAdminListInput.firstNameSearch ||
      gateAdminListInput.lastNameSearch ||
      gateAdminListInput.tollNameSearch
    ) {
      const gateAdminList = await this.databaseService.gateAdmin.findMany({
        where: {
          OR: [
            {
              toll: {
                name: {
                  contains: gateAdminListInput.tollNameSearch,
                  mode: 'insensitive',
                },
              },
            },
            {
              baseUser: {
                OR: [
                  {
                    id: {
                      contains: gateAdminListInput.idSearch,
                      mode: 'insensitive',
                    },
                  },
                  {
                    firstName: {
                      contains: gateAdminListInput.firstNameSearch,
                      mode: 'insensitive',
                    },
                  },
                  {
                    lastName: {
                      contains: gateAdminListInput.lastNameSearch,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
          ],
        },
        take: gateAdminListInput.take,
        skip: gateAdminListInput.skip,
      });
      const gateAdminCount = await this.databaseService.gateAdmin.count({
        where: {
          OR: [
            {
              toll: {
                name: {
                  contains: gateAdminListInput.tollNameSearch,
                  mode: 'insensitive',
                },
              },
            },
            {
              baseUser: {
                OR: [
                  {
                    id: {
                      contains: gateAdminListInput.idSearch,
                      mode: 'insensitive',
                    },
                  },
                  {
                    firstName: {
                      contains: gateAdminListInput.firstNameSearch,
                      mode: 'insensitive',
                    },
                  },
                  {
                    lastName: {
                      contains: gateAdminListInput.lastNameSearch,
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
        count: gateAdminCount,
        list: gateAdminList as any,
      };
    } else {
      const gateAdminList = await this.databaseService.gateAdmin.findMany({
        take: gateAdminListInput.take,
        skip: gateAdminListInput.skip,
      });
      const gateAdminCount = await this.databaseService.gateAdmin.count();

      return {
        count: gateAdminCount,
        list: gateAdminList as any,
      };
    }
  }

  public async addGateAdminRole(
    changeRoleInput: ChangeRoleInput,
  ): Promise<boolean> {
    await this.databaseService.gateAdmin.create({
      data: {
        baseUserId: changeRoleInput.baseUserId,
      },
    });
    return true;
  }

  public async removeGateAdminRole(
    changeRoleInput: ChangeRoleInput,
  ): Promise<boolean> {
    await this.databaseService.gateAdmin.delete({
      where: {
        baseUserId: changeRoleInput.baseUserId,
      },
    });
    return true;
  }

  public async changeGateAdminToll(
    changeTollInput: ChangeTollInput,
  ): Promise<boolean> {
    await this.databaseService.gateAdmin.update({
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
