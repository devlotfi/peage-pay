import { Field, ObjectType } from '@nestjs/graphql';
import { BaseUserType } from 'src/user/graphql/base-user.graphql';
import { UserRolesType } from 'src/user/graphql/user-roles.graphql';

@ObjectType()
export class SignInWithRefreshTokenResult {
  public constructor(
    baseUser: BaseUserType,
    accessToken: string,
    roles: UserRolesType[],
  ) {
    this.baseUser = baseUser;
    this.accessToken = accessToken;
    this.roles = roles;
  }

  @Field(() => BaseUserType)
  public baseUser: BaseUserType;

  @Field()
  public accessToken: string;

  @Field(() => [UserRolesType])
  public roles: UserRolesType[];
}
