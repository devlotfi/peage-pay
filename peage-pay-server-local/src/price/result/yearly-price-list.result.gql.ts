import { Field, ObjectType } from '@nestjs/graphql';
import { YearlyPriceType } from '../graphql/yearly-price.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class YearlyPriceListResult extends PaginationResult<YearlyPriceType> {
  @Field(() => [YearlyPriceType])
  public list: YearlyPriceType[];
}
