import { Field, ObjectType } from '@nestjs/graphql';
import { DailyPriceType } from '../graphql/daily-price.gql';

@ObjectType()
export class DailyPriceListResult {
  @Field(() => [DailyPriceType])
  public list: DailyPriceType[];

  @Field()
  public count: number;
}
