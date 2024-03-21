import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class DeleteGlobalMonthlyPriceInput {
  @Field()
  @IsUUID()
  public priceId: string;
}
