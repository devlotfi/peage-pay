import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseUserType {
  @Field(() => ID)
  public id: string;

  @Field()
  public firstName: string;

  @Field()
  public lastName: string;

  @Field()
  public createdAt: Date;

  @Field()
  public updatedAt: Date;
}
