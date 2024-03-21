import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { PriceType } from './price.gql';

@ObjectType()
export class WeeklyPriceType {
  @Field(() => ID)
  public priceId: string;

  @Field(() => [Int])
  public days: number[];

  @Field(() => PriceType)
  public price: PriceType;
}
