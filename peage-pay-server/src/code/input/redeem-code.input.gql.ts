import { Field, InputType } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

@InputType()
export class RedeemCodeInput {
  @Field()
  @IsString()
  @Length(16)
  public code: string;
}
