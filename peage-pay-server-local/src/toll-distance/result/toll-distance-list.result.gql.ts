import { Field, ObjectType } from '@nestjs/graphql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';
import { TollDistanceType } from '../graphql/toll-distance.gql';

@ObjectType()
export class TollDistanceListResult extends PaginationResult<TollDistanceType> {
  @Field(() => [TollDistanceType])
  public list: TollDistanceType[];
}
