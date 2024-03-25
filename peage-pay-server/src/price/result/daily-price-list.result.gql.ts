import { Field, ObjectType } from '@nestjs/graphql';
import { DailyPriceType } from '../graphql/daily-price.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class DailyPriceListResult extends PaginationResult<DailyPriceType> {
  @Field(() => [DailyPriceType])
  public list: DailyPriceType[];
}
