import { Field, ObjectType } from '@nestjs/graphql';
import { MonthlyPriceType } from '../graphql/monthly-price.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class MonthlyPriceListResult extends PaginationResult<MonthlyPriceType> {
  @Field(() => [MonthlyPriceType])
  public list: MonthlyPriceType[];
}
