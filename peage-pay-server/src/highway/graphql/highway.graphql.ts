import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HighwayType {
  @Field()
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
