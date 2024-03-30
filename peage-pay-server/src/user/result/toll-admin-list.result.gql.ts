import { Field, ObjectType } from '@nestjs/graphql';
import { TollAdminType } from '../graphql/toll-admin.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class TollAdminListResult extends PaginationResult<TollAdminType> {
  @Field(() => [TollAdminType])
  public list: TollAdminType[];
}
