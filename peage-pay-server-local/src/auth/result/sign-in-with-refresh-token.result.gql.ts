import { Field, ObjectType } from '@nestjs/graphql';
import { BaseUserType } from 'src/user/graphql/base-user.gql';
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';

@ObjectType()
export class SignInWithRefreshTokenResult {
  public constructor(
    baseUser: BaseUserType,
    accessToken: string,
    roles: BaseUserRolesType[],
  ) {
    this.baseUser = baseUser;
    this.accessToken = accessToken;
    this.roles = roles;
  }

  @Field(() => BaseUserType)
  public baseUser: BaseUserType;

  @Field()
  public accessToken: string;

  @Field(() => [BaseUserRolesType])
  public roles: BaseUserRolesType[];
}
