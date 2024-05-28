import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class AddHighwayInput {
  @Field()
  @Length(1, 256)
  public name: string;

  @Field()
  @Length(1, 50)
  public code: string;
}
