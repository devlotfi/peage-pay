import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class SignInWithRefreshTokenInput {
  @Field()
  @Length(1, 4096)
  public refreshToken: string;
}
