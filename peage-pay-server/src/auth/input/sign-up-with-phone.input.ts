import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsPhoneNumber, Length } from 'class-validator';
import { GenderType } from 'src/user/graphql/gender.graphql';

@InputType()
export class SignUpWithPhoneInput {
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
  @IsPhoneNumber('DZ')
  public phoneNumber: string;
}
