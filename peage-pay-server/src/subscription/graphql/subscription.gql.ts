import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SubscriptionType {
  @Field(() => ID)
  public id: string;

  @Field()
  public name: string;

  @Field()
  public days: number;

  @Field()
  public price: number;

  @Field(() => Date)
  public createdAt: Date;

  @Field(() => Date)
  public updatedAt: Date;
}
