import { Field, ObjectType } from '@nestjs/graphql';
import { BaseUserType } from 'src/user/graphql/base-user.graphql';

@ObjectType()
export class SignInWithRefreshTokenResult {
  @Field(() => BaseUserType)
  public baseUser: BaseUserType;

  @Field()
  public accessToken: string;
}
