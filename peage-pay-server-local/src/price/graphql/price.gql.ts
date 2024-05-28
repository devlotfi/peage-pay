import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TollPriceType } from './toll-price.gql';

@ObjectType()
export class PriceType {
  @Field(() => ID)
  public id: string;

  @Field()
  public value: number;

  @Field(() => Date)
  public startTimestamp: Date;

  @Field(() => Date)
  public endTimestamp: Date;

  @Field()
  public priority: number;

  @Field(() => TollPriceType, { nullable: true })
  public tollPrice?: TollPriceType;

  @Field(() => Date)
  public createdAt: Date;

  @Field(() => Date)
  public updatedAt: Date;
}
