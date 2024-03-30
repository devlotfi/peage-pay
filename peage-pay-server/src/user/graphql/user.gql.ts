import { Field, ObjectType } from '@nestjs/graphql';
import { BaseUserType } from './base-user.gql';

@ObjectType()
export class UserType {
  @Field()
  public baseUserId: string;

  @Field(() => BaseUserType, { nullable: true })
  public baseUser?: BaseUserType;

  @Field()
  public balance: number;
}
