import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GenderType } from './gender.graphql';

@ObjectType()
export class BaseUserType {
  @Field(() => ID)
  public id: string;

  @Field()
  public firstName: string;

  @Field()
  public lastName: string;

  @Field()
  public birthDate: Date;

  @Field(() => GenderType)
  public gender: GenderType;

  @Field()
  public createdAt: Date;

  @Field()
  public updatedAt: Date;
}
