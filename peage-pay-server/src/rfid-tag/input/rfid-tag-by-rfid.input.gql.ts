import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class RfidTagByRfidInput {
  @Field()
  @Length(1, 10)
  public rfid: string;
}
