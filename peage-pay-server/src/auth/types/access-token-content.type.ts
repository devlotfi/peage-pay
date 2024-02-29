import { UserRolesType } from 'src/user/graphql/user-roles.graphql';

export class AccessTokenContent {
  public userId: string;
  public userRoles: UserRolesType[];
}
