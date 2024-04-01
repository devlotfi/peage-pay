import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';

export class UserAccessTokenPayload {
  public userId: string;
  public userRoles: BaseUserRolesType[];
}
