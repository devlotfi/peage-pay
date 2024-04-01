import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class SignInAutomaticGateInput {
  @Field()
  @Length(1, 512)
  public name: string;

  @Field()
  @Length(1, 512)
  public password: string;
}
