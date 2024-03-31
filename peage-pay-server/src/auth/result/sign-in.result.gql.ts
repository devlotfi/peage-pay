import { Field, ObjectType } from '@nestjs/graphql';
import { BaseUserType } from 'src/user/graphql/base-user.gql';
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';

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
