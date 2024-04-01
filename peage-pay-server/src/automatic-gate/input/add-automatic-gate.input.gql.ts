import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class AddAutomaticGateInput {
  @Field()
  @Length(1, 256)
  public name: string;

  @Field()
  @Length(1, 512)
  public password: string;
}
