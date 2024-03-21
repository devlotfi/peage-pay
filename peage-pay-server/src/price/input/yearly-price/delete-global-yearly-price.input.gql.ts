import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class DeleteGlobalYearlyPriceInput {
  @Field()
  @IsUUID()
  public priceId: string;
}
