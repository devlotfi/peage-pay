import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Wilaya {
  @Field(() => ID)
  public id: string;

  @Field()
  public name: string;

  @Field()
  public code: string;
}
