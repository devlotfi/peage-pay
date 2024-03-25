import { Field, InputType } from '@nestjs/graphql';
import { AddDailyPriceInput } from './add-daily-price.input.gql';
import { AddCustomPriceInput } from './add-custom-price.input.gql';
import { AddMonthlyPriceInput } from './add-monthly-price.input.gql';
import { AddWeeklyPriceInput } from './add-weekly-price.input.gql';
import { AddYearlyPriceInput } from './add-yearly-price.input.gql';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class AddPriceInput {
  @Field(() => AddDailyPriceInput, { nullable: true })
  @Type(() => AddDailyPriceInput)
  @ValidateNested()
  public addDailyPriceInput: AddDailyPriceInput;

  @Field(() => AddWeeklyPriceInput, { nullable: true })
  @Type(() => AddWeeklyPriceInput)
  @ValidateNested()
  public addWeeklyPriceInput: AddWeeklyPriceInput;

  @Field(() => AddMonthlyPriceInput, { nullable: true })
  @Type(() => AddMonthlyPriceInput)
  @ValidateNested()
  public addMonthlyPriceInput: AddMonthlyPriceInput;

  @Field(() => AddYearlyPriceInput, { nullable: true })
  @Type(() => AddYearlyPriceInput)
  @ValidateNested()
  public addYearlyPriceInput: AddYearlyPriceInput;

  @Field(() => AddCustomPriceInput, { nullable: true })
  @Type(() => AddCustomPriceInput)
  @ValidateNested()
  public addCustomPriceInput: AddCustomPriceInput;
}
