import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class DeleteGlobalWeeklyPriceInput {
  @Field()
  @IsUUID()
  public priceId: string;
}
