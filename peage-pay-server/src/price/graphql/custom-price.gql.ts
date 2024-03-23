import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PriceType } from './price.gql';

@ObjectType()
export class CustomPriceType {
  @Field(() => ID)
  public priceId: string;

  @Field(() => Date)
  public startDate: Date;

  @Field(() => Date)
  public endDate: Date;

  @Field(() => PriceType)
  public price: PriceType;
}
