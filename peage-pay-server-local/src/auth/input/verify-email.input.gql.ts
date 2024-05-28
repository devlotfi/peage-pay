import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, Length } from 'class-validator';

@InputType()
export class VerifyEmailInput {
  @Field()
  @IsUUID()
  public userId: string;

  @Field()
  @Length(7, 256)
  public token: string;
}
