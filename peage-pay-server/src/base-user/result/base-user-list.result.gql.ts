import { Field, ObjectType } from '@nestjs/graphql';
import { BaseUserType } from '../graphql/base-user.gql';

@ObjectType()
export class BaseUserListResult {
  @Field(() => [BaseUserType])
  public list: BaseUserType[];

  @Field()
  public count: number;
}
