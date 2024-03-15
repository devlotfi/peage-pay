import { Field, InputType } from '@nestjs/graphql';
import { IsPositive, Length } from 'class-validator';

@InputType()
export class AddSubscriptionInput {
  @Field()
  @Length(1, 256)
  public name: string;

  @Field()
  @IsPositive()
  public days: number;

  @Field()
  @IsPositive()
  public price: number;
}
