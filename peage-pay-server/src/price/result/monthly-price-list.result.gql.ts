import { Field, ObjectType } from '@nestjs/graphql';
import { MonthlyPriceType } from '../graphql/monthly-price.gql';

@ObjectType()
export class MonthlyPriceListResult {
  @Field(() => [MonthlyPriceType])
  public list: MonthlyPriceType[];

  @Field()
  public count: number;
}
