import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DepositType {
  @Field(() => ID)
  public id: string;

  @Field()
  public amount: number;

  @Field(() => Date)
  public createdAt: Date;
}
