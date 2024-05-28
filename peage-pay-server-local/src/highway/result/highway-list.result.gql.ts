import { Field, ObjectType } from '@nestjs/graphql';
import { HighwayType } from '../graphql/highway.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class HighwayListResult extends PaginationResult<HighwayType> {
  @Field(() => [HighwayType])
  public list: HighwayType[];
}
