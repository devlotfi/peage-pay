import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class SignInAutomaticGateRefreshTokenInput {
  @Field()
  @Length(1, 512)
  public refreshToken: string;
}
