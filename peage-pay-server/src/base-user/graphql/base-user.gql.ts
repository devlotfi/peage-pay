import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseUserRolesType } from './base-user-roles.gql';

@ObjectType()
export class BaseUserType {
  @Field(() => ID)
  public id: string;

  @Field()
  public firstName: string;

  @Field()
  public lastName: string;

  @Field()
  public createdAt: Date;

  @Field()
  public updatedAt: Date;

  @Field(() => [BaseUserRolesType])
  public roles: BaseUserRolesType[];
}
