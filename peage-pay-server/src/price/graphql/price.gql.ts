import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PriceType {
  @Field(() => ID)
  public id: string;

  @Field()
  public tollId: string;

  @Field()
  public value: number;

  @Field(() => Date)
  public startTimestamp: Date;

  @Field(() => Date)
  public endTimestamp: Date;

  @Field()
  public priority: number;

  @Field(() => Date)
  public createdAt: Date;

  @Field(() => Date)
  public updatedAt: Date;
}
