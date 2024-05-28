import { Field, ObjectType } from '@nestjs/graphql';
import { BaseUserType } from './base-user.gql';

@ObjectType()
export class ModeratorType {
  @Field()
  public baseUserId: string;

  @Field(() => BaseUserType)
  public baseUser: BaseUserType;
}
