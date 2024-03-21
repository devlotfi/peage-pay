import { Field, ObjectType } from '@nestjs/graphql';
import { WeeklyPriceType } from '../graphql/weekly-price.gql';

@ObjectType()
export class WeeklyPriceListResult {
  @Field(() => [WeeklyPriceType])
  public list: WeeklyPriceType[];

  @Field()
  public count: number;
}
