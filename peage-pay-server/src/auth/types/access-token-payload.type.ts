import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.gql';

export class AccessTokenPayload {
  public userId: string;
  public userRoles: BaseUserRolesType[];
}
