import { Field, ObjectType } from '@nestjs/graphql';
import { BaseUserType } from 'src/user/graphql/base-user.graphql';
import { UserRolesType } from 'src/user/graphql/user-roles.graphql';

@ObjectType()
export class SignInResult {
  public constructor(
    baseUser: BaseUserType,
    accessToken: string,
    roles: UserRolesType[],
    refreshToken?: string,
  ) {
    this.baseUser = baseUser;
    this.refreshToken = refreshToken;
    this.accessToken = accessToken;
    this.roles = roles;
  }

  @Field(() => BaseUserType)
  public baseUser: BaseUserType;

  @Field({ nullable: true })
  public refreshToken?: string;

  @Field()
  public accessToken: string;

  @Field(() => [UserRolesType])
  public roles: UserRolesType[];
}
