import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { BaseUserRolesType } from './graphql/base-user-roles.gql';
import { BaseUserListInput } from './input/base-user-list.input.gql';
import { BaseUser, Prisma } from '@prisma/client';
import { BaseUserListResult } from './result/base-user-list.result.gql';
import { PrismaErrors } from 'src/shared/graphql/prisma-errors.gql';
import { BaseUserType } from './graphql/base-user.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';

@Injectable()
export class BaseUserService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async baseUserList(
    baseUserListInput: BaseUserListInput,
  ): Promise<BaseUserListResult> {
    if (
      baseUserListInput.idSearch ||
      baseUserListInput.firstNameSearch ||
      baseUserListInput.lastNameSearch
    ) {
      const whereQuery: Prisma.BaseUserWhereInput = {
        OR: [
          {
            id: {
              contains: baseUserListInput.idSearch,
              mode: 'insensitive',
            },
          },
          {
            firstName: {
              contains: baseUserListInput.firstNameSearch,
              mode: 'insensitive',
            },
          },
          {
            lastName: {
              contains: baseUserListInput.lastNameSearch,
              mode: 'insensitive',
            },
          },
        ],
      };
      const baseUserList = await this.databaseService.baseUser.findMany({
        where: whereQuery,
        take: baseUserListInput.take,
        skip: baseUserListInput.skip,
      });
      const baseUserCount = await this.databaseService.baseUser.count({
        where: whereQuery,
      });

      return {
        count: baseUserCount,
        list: baseUserList as any,
      };
    } else {
      const baseUserList = await this.databaseService.baseUser.findMany({
        take: baseUserListInput.take,
        skip: baseUserListInput.skip,
      });
      const baseUserCount = await this.databaseService.baseUser.count();

      return {
        count: baseUserCount,
        list: baseUserList as any,
      };
    }
  }

  public async baseUserById(
    baseUserByIdInput: IdInput,
  ): Promise<BaseUser | null> {
    return await this.databaseService.baseUser.findUnique({
      where: {
        id: baseUserByIdInput.id,
      },
    });
  }

  public async getUserRolesList(userId: string): Promise<BaseUserRolesType[]> {
    const baseUser = await this.databaseService.baseUser.findUnique({
      where: {
        id: userId,
      },
      include: {
        user: true,
        generalAdmin: true,
        humanRessourcesAdmin: true,
        tollAdmin: true,
        gateAdmin: true,
        moderator: true,
      },
    });
    if (!baseUser) {
      throw new Error(PrismaErrors.NOT_FOUND);
    }

    const roleList: BaseUserRolesType[] = [];
    baseUser.user && roleList.push(BaseUserRolesType.USER);
    baseUser.generalAdmin && roleList.push(BaseUserRolesType.GENERAL_ADMIN);
    baseUser.humanRessourcesAdmin &&
      roleList.push(BaseUserRolesType.HUMAN_RESSOURCES_ADMIN);
    baseUser.tollAdmin && roleList.push(BaseUserRolesType.TOLL_ADMIN);
    baseUser.gateAdmin && roleList.push(BaseUserRolesType.GATE_ADMIN);
    baseUser.moderator && roleList.push(BaseUserRolesType.MODERATOR);
    return roleList;
  }

  public async deleteBaseUser(deleteBaseUserInput: IdInput): Promise<boolean> {
    await this.databaseService.baseUser.delete({
      where: {
        id: deleteBaseUserInput.id,
      },
    });
    return true;
  }

  public async baseUser(baseUserId: string): Promise<BaseUserType | null> {
    return (await this.databaseService.baseUser.findUnique({
      where: {
        id: baseUserId,
      },
    })) as any;
  }
}
