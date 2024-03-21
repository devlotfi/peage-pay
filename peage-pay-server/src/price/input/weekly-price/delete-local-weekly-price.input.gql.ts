import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class DeleteLocalWeeklyPriceInput {
  @Field()
  @IsUUID()
  public priceId: string;
}
