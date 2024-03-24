import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { BaseUserRolesType } from './graphql/base-user-roles.gql';
import { BaseUserErrors } from './graphql/base-user-errors.gql';
import { BaseUserListInput } from './input/base-user-list.input.gql';
import { BaseUser } from '@prisma/client';
import { BaseUserByIdInput } from './input/base-user-by-id.input.gql';
import { BaseUserListResult } from './result/base-user-list.result.gql';

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
      const baseUserList = await this.databaseService.baseUser.findMany({
        where: {
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
        },
        take: baseUserListInput.take,
        skip: baseUserListInput.skip,
      });
      const baseUserCount = await this.databaseService.baseUser.count({
        where: {
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
        },
      });

      const baseUserListResult = new BaseUserListResult();
      baseUserListResult.list = baseUserList as any[];
      baseUserListResult.count = baseUserCount;
      return baseUserListResult;
    } else {
      const baseUserList = await this.databaseService.baseUser.findMany({
        take: baseUserListInput.take,
        skip: baseUserListInput.skip,
      });

      const baseUserListResult = new BaseUserListResult();
      baseUserListResult.list = baseUserList as any[];
      baseUserListResult.count = baseUserList.length;
      return baseUserListResult;
    }
  }

  public async baseUserById(
    baseUserByIdInput: BaseUserByIdInput,
  ): Promise<BaseUser | null> {
    return await this.databaseService.baseUser.findUnique({
      where: {
        id: baseUserByIdInput.baseUserId,
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
      throw new Error(BaseUserErrors.BASE_USER_NOT_FOUND);
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
}
