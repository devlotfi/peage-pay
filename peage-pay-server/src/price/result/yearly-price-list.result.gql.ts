import { Field, ObjectType } from '@nestjs/graphql';
import { YearlyPriceType } from '../graphql/yearly-price.gql';

@ObjectType()
export class YearlyPriceListResult {
  @Field(() => [YearlyPriceType])
  public list: YearlyPriceType[];

  @Field()
  public count: number;
}
