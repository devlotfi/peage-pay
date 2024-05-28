import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HighwayType {
  @Field(() => ID)
  public id: string;

  @Field()
  public name: string;

  @Field()
  public code: string;

  @Field(() => Date)
  public createdAt: Date;

  @Field(() => Date)
  public updatedAt: Date;
}
