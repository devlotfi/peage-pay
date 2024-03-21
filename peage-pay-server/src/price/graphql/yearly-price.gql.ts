import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { PriceType } from './price.gql';

@ObjectType()
export class YearlyPriceType {
  @Field(() => ID)
  public priceId: string;

  @Field(() => Int)
  public startDay: number;

  @Field(() => Int)
  public endDay: number;

  @Field(() => [Int])
  public months: number[];

  @Field(() => PriceType)
  public price: PriceType;
}
