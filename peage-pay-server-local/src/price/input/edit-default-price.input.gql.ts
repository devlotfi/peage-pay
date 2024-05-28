import { Field, InputType } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';

@InputType()
export class EditDefaultPriceInput {
  @Field()
  @Min(0)
  public value: number;
}
