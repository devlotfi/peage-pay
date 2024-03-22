import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PriceType } from './price.gql';
import { DayOfWeekType } from './day-of-week.gql';

@ObjectType()
export class WeeklyPriceType {
  @Field(() => ID)
  public priceId: string;

  @Field(() => [DayOfWeekType])
  public days: DayOfWeekType[];

  @Field(() => PriceType)
  public price: PriceType;
}
