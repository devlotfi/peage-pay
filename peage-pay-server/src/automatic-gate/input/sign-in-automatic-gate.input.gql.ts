import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, Length } from 'class-validator';

@InputType()
export class SignInAutomaticGateInput {
  @Field()
  @IsUUID()
  public tollId: string;

  @Field()
  @Length(1, 512)
  public name: string;

  @Field()
  @Length(1, 512)
  public password: string;
}
