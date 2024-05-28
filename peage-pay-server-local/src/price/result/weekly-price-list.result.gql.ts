import { Field, ObjectType } from '@nestjs/graphql';
import { WeeklyPriceType } from '../graphql/weekly-price.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class WeeklyPriceListResult extends PaginationResult<WeeklyPriceType> {
  @Field(() => [WeeklyPriceType])
  public list: WeeklyPriceType[];
}
