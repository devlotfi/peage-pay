import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class RfidInput {
  @Field()
  @Length(1, 256)
  public rfid: string;
}
