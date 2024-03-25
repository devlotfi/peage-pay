import { Field, InputType } from '@nestjs/graphql';
import { ArrayMaxSize, ArrayMinSize, ArrayUnique } from 'class-validator';
import { DayOfWeekType } from '../graphql/day-of-week.gql';
import { AddPriceBaseInput } from './add-price-base.input.gql';

@InputType()
export class AddWeeklyPriceInput extends AddPriceBaseInput {
  @Field(() => [DayOfWeekType])
  @ArrayMinSize(1)
  @ArrayMaxSize(7)
  @ArrayUnique((value) => value)
  public days: DayOfWeekType[];
}
