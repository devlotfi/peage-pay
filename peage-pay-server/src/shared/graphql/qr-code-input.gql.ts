import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, Length } from 'class-validator';

@InputType()
export class QRCodeInput {
  @Field()
  @IsUUID()
  public baseUserId: string;

  @Field()
  @Length(5)
  public pin: string;
}
