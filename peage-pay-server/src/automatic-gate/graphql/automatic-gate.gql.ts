import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AutomaticGateType {
  @Field(() => ID)
  public id: string;

  @Field()
  public name: string;

  @Field()
  public tollId: string;

  @Field(() => Date)
  public createdAt: Date;

  @Field(() => Date)
  public updatedAt: Date;
}
