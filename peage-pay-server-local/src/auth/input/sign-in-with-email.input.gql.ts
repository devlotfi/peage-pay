import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, Length } from 'class-validator';

@InputType()
export class SigninWithEmailInput {
  @Field()
  @IsEmail()
  public email: string;

  @Field()
  @Length(1, 512)
  public password: string;
}
