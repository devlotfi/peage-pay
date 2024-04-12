import { Field, InputType } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class DepositAmountInput {
  @Field()
  @Min(200)
  @Max(2000)
  public amount: number;
}
