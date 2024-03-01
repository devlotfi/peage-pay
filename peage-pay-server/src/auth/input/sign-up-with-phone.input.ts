import { Field, InputType } from '@nestjs/graphql';
import { IsPhoneNumber, Length } from 'class-validator';

@InputType()
export class SignUpWithPhoneInput {
  @Field()
  @Length(1, 64)
  public firstName: string;

  @Field()
  @Length(1, 64)
  public lastName: string;

  @Field()
  @IsPhoneNumber('DZ')
  public phoneNumber: string;
}
