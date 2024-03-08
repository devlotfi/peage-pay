import { Field, ObjectType } from '@nestjs/graphql';
import { BaseUserType } from 'src/base-user/graphql/base-user.graphql';
import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.graphql';

@ObjectType()
export class SignInResult {
  public constructor(
    baseUser: BaseUserType,
    accessToken: string,
    roles: BaseUserRolesType[],
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

  @Field(() => [BaseUserRolesType])
  public roles: BaseUserRolesType[];
}
