import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PriceType } from './price.gql';

@ObjectType()
export class CustomPriceType {
  @Field(() => ID)
  public priceId: string;

  @Field(() => PriceType)
  public price: PriceType;
}
