import { Field, InputType } from '@nestjs/graphql';
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  IsNumber,
  Max,
  Min,
} from 'class-validator';
import { MonthType } from 'src/price/graphql/month.gql';
import { IsSuperiorOrEqualToFieldValue } from 'src/shared/validation/is-superior-or-equal-to-field-value';
import { AddPriceBaseInput } from './add-price-base.input.gql';

@InputType()
export class AddMonthlyPriceInput extends AddPriceBaseInput {
  @Field(() => [MonthType])
  @ArrayMinSize(1)
  @ArrayMaxSize(7)
  @ArrayUnique((value) => value)
  public months: MonthType[];

  @Field()
  @IsNumber()
  @Min(1)
  @Max(31)
  public startDay: number;

  @Field()
  @IsNumber()
  @IsSuperiorOrEqualToFieldValue('startDay')
  @Min(1)
  @Max(31)
  public endDay: number;
}
