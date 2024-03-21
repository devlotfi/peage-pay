import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class DeleteLocalDailyPriceInput {
  @Field()
  @IsUUID()
  public priceId: string;
}
