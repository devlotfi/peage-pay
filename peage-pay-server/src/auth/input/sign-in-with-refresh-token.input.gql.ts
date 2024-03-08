import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class SignInWithRefreshTokenInput {
  @Field()
  @Length(1, 2048)
  public refreshToken: string;
}
