import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ChangeTollInput } from './input/change-toll.input.gql';
import { TollAdminListInput } from './input/toll-admin-list.input.gql';
import { TollAdminListResult } from './result/toll-admin-list.result.gql';
import { Prisma, TollAdmin } from '@prisma/client';
import { IdInput } from 'src/shared/graphql/id-input.gql';

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
      const whereQuery: Prisma.TollAdminWhereInput = {
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
      };
      const tollAdminList = await this.databaseService.tollAdmin.findMany({
        where: whereQuery,
        take: tollAdminListInput.take,
        skip: tollAdminListInput.skip,
      });
      const tollAdminCount = await this.databaseService.tollAdmin.count({
        where: whereQuery,
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

  public async tollAdminById(
    tollAdminByIdInput: IdInput,
  ): Promise<TollAdmin | null> {
    return await this.databaseService.tollAdmin.findUnique({
      where: {
        baseUserId: tollAdminByIdInput.id,
      },
    });
  }

  public async addTollAdminRole(
    addTollAdminRoleInput: IdInput,
  ): Promise<boolean> {
    await this.databaseService.tollAdmin.create({
      data: {
        baseUserId: addTollAdminRoleInput.id,
      },
    });
    return true;
  }

  public async removeTollAdminRole(
    removeTollAdminRoleInput: IdInput,
  ): Promise<boolean> {
    await this.databaseService.tollAdmin.delete({
      where: {
        baseUserId: removeTollAdminRoleInput.id,
      },
    });
    return true;
  }

  public async changeTollAdminToll(
    changeTollAdminTollInput: ChangeTollInput,
  ): Promise<boolean> {
    await this.databaseService.tollAdmin.update({
      data: {
        tollId: changeTollAdminTollInput.tollId,
      },
      where: {
        baseUserId: changeTollAdminTollInput.baseUserId,
      },
    });
    return true;
  }
}
