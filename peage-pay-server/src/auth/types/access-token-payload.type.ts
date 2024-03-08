import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.graphql';

export class AccessTokenPayload {
  public userId: string;
  public userRoles: BaseUserRolesType[];
}
