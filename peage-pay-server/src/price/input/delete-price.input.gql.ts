import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class DeletePriceInput {
  @Field()
  @IsUUID()
  public priceId: string;
}
