import { Field, InputType } from '@nestjs/graphql';
import { IsNumberString, Length } from 'class-validator';

@InputType()
export class DefinePinInput {
  @Field()
  @Length(5)
  @IsNumberString()
  public pin: string;
}
