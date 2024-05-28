import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsEmail, Length } from 'class-validator';

@InputType()
export class SignUpWithEmailInput {
  @Field()
  @Length(1, 64)
  @IsAlpha()
  public firstName: string;

  @Field()
  @Length(1, 64)
  @IsAlpha()
  public lastName: string;

  @Field()
  @IsEmail()
  public email: string;

  @Field()
  @Length(7, 512)
  public password: string;
}
