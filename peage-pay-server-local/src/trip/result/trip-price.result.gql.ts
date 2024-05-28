import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TripPriceResult {
  @Field()
  public fromTollPrice: number;

  @Field()
  public toTollPrice: number;

  @Field()
  public distance: number;
}
