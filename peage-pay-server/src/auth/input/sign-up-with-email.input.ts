import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsDate, IsEmail, Length } from 'class-validator';
import { GenderType } from 'src/user/graphql/gender.graphql';

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
