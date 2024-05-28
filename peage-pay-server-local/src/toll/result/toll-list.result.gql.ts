import { Field, ObjectType } from '@nestjs/graphql';
import { TollType } from '../graphql/toll.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class TollListResult extends PaginationResult<TollType> {
  @Field(() => [TollType])
  public list: TollType[];
}
