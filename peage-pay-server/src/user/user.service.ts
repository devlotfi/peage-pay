import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { UserRolesType } from './graphql/user-roles.graphql';
import { UserErrors } from './graphql/user-errors.graphql';

@Injectable()
export class UserService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async getUserRolesList(userId: string): Promise<UserRolesType[]> {
    const baseUser = await this.databaseService.baseUser.findFirst({
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
      throw new Error(UserErrors.USER_NOT_FOUND);
    }

    const roleList: UserRolesType[] = [];
    baseUser.user && roleList.push(UserRolesType.USER);
    baseUser.generalAdmin && roleList.push(UserRolesType.GENERAL_ADMIN);
    baseUser.humanRessourcesAdmin &&
      roleList.push(UserRolesType.HUMAN_RESSOURCES_ADMIN);
    baseUser.tollAdmin && roleList.push(UserRolesType.TOLL_ADMIN);
    baseUser.gateAdmin && roleList.push(UserRolesType.GATE_ADMIN);
    baseUser.moderator && roleList.push(UserRolesType.MODERATOR);
    return roleList;
  }
}
