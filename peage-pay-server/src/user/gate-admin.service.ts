import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ChangeTollInput } from './input/change-toll.input.gql';
import { GateAdminListInput } from './input/gate-admin-list.input.gql';
import { GateAdminListResult } from './result/gate-admin-list.result.gql';
import { GateAdmin, Prisma } from '@prisma/client';
import { IdInput } from 'src/shared/graphql/id-input.gql';

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
      const whereQuery: Prisma.GateAdminWhereInput = {
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
      };
      const gateAdminList = await this.databaseService.gateAdmin.findMany({
        where: whereQuery,
        take: gateAdminListInput.take,
        skip: gateAdminListInput.skip,
      });
      const gateAdminCount = await this.databaseService.gateAdmin.count({
        where: whereQuery,
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

  public async gateAdminById(
    ugateAdminByIdInput: IdInput,
  ): Promise<GateAdmin | null> {
    return await this.databaseService.gateAdmin.findUnique({
      where: {
        baseUserId: ugateAdminByIdInput.id,
      },
    });
  }

  public async addGateAdminRole(
    addGateAdminRoleInput: IdInput,
  ): Promise<boolean> {
    await this.databaseService.gateAdmin.create({
      data: {
        baseUserId: addGateAdminRoleInput.id,
      },
    });
    return true;
  }

  public async removeGateAdminRole(
    removeGateAdminRoleInput: IdInput,
  ): Promise<boolean> {
    await this.databaseService.gateAdmin.delete({
      where: {
        baseUserId: removeGateAdminRoleInput.id,
      },
    });
    return true;
  }

  public async changeGateAdminToll(
    changeGateAdminTollInput: ChangeTollInput,
  ): Promise<boolean> {
    await this.databaseService.gateAdmin.update({
      data: {
        tollId: changeGateAdminTollInput.tollId,
      },
      where: {
        baseUserId: changeGateAdminTollInput.baseUserId,
      },
    });
    return true;
  }
}
