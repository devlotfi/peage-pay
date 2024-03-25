import { Field, ObjectType } from '@nestjs/graphql';
import { BaseUserType } from '../graphql/base-user.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class BaseUserListResult extends PaginationResult<BaseUserType> {
  @Field(() => [BaseUserType])
  public list: BaseUserType[];
}
