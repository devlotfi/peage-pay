import { Field, InputType } from '@nestjs/graphql';
import { IsJWT } from 'class-validator';

@InputType()
export class SignOutInput {
  @Field()
  @IsJWT()
  public refreshToken: string;
}
