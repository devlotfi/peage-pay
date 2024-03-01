import { Field, ObjectType } from '@nestjs/graphql';
import { BaseUserType } from 'src/user/graphql/base-user.graphql';

@ObjectType()
export class SignInResult {
  @Field(() => BaseUserType)
  public baseUser: BaseUserType;

  @Field({ nullable: true })
  public refreshToken: string;

  @Field()
  public accessToken: string;
}
