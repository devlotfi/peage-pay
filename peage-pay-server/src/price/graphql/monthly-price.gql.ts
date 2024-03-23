import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { PriceType } from './price.gql';
import { MonthType } from './month.gql';

@ObjectType()
export class MonthlyPriceType {
  @Field(() => ID)
  public priceId: string;

  @Field(() => Int)
  public startDay: number;

  @Field(() => Int)
  public endDay: number;

  @Field(() => [MonthType])
  public months: MonthType[];

  @Field(() => PriceType)
  public price: PriceType;
}
