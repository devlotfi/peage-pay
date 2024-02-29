import { UserRolesType } from 'src/user/graphql/user-roles.graphql';

export class AccessTokenPayload {
  public userId: string;
  public userRoles: UserRolesType[];
}
