import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { BaseUserRolesType } from './graphql/base-user-roles.gql';
import { BaseUserErrors } from './graphql/base-user-errors.gql';

@Injectable()
export class BaseUserService {
  public constructor(private readonly databaseService: DatabaseService) {}

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
