import { Field, ObjectType } from '@nestjs/graphql';
import { GenderType } from './gender.type';

@ObjectType()
export class UserType {
  @Field()
  public firstName: string;

  @Field()
  public lastName: string;

  @Field()
  public birthDate: string;

  @Field(() => GenderType)
  public gender: GenderType;

  @Field()
  public createdAt: Date;

  @Field()
  public updatedAt: Date;
}
