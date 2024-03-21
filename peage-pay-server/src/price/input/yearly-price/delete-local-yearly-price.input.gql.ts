import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class DeleteLocalYearlyPriceInput {
  @Field()
  @IsUUID()
  public priceId: string;
}
