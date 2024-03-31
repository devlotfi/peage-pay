import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, Length } from 'class-validator';

@InputType()
export class AddRfidTagInput {
  @Field()
  @IsUUID()
  public baseUserId: string;

  @Field()
  @Length(1, 256)
  public rfid: string;

  @Field()
  @Length(1, 50)
  public registrationNumber: string;
}
