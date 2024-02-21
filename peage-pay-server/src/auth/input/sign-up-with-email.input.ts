import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsEmail, Length } from 'class-validator';
import { GenderType } from 'src/user/types/gender.type';

@InputType()
export class SignUpWithEmailInput {
  @Field()
  @Length(1, 64)
  public firstName: string;

  @Field()
  @Length(1, 64)
  public lastName: string;

  @Field()
  @IsDate()
  public birthDate: Date;

  @Field(() => GenderType)
  public gender: GenderType;

  @Field()
  @IsEmail()
  public email: string;

  @Field()
  @Length(7, 512)
  public password: string;
}
