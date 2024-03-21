import { Field, ObjectType } from '@nestjs/graphql';
import { CustomPriceType } from '../graphql/custom-price.gql';

@ObjectType()
export class CustomPriceListResult {
  @Field(() => [CustomPriceType])
  public list: CustomPriceType[];

  @Field()
  public count: number;
}
