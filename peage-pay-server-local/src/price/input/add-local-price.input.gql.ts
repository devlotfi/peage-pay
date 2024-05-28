import { Field, InputType } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AddLocalDailyPriceInput } from './add-local-daily-price.input.gql';
import { AddLocalWeeklyPriceInput } from './add-local-weekly-price.input.gql';
import { AddLocalMonthlyPriceInput } from './add-local-monthly-price.input.gql';
import { AddLocalYearlyPriceInput } from './add-local-yearly-price.input.gql copy';

@InputType()
export class AddLocalPriceInput {
  @Field(() => AddLocalDailyPriceInput, { nullable: true })
  @Type(() => AddLocalDailyPriceInput)
  @ValidateNested()
  public addDailyPriceInput: AddLocalDailyPriceInput;

  @Field(() => AddLocalWeeklyPriceInput, { nullable: true })
  @Type(() => AddLocalWeeklyPriceInput)
  @ValidateNested()
  public addWeeklyPriceInput: AddLocalWeeklyPriceInput;

  @Field(() => AddLocalMonthlyPriceInput, { nullable: true })
  @Type(() => AddLocalMonthlyPriceInput)
  @ValidateNested()
  public addMonthlyPriceInput: AddLocalMonthlyPriceInput;

  @Field(() => AddLocalYearlyPriceInput, { nullable: true })
  @Type(() => AddLocalYearlyPriceInput)
  @ValidateNested()
  public addYearlyPriceInput: AddLocalYearlyPriceInput;

  @Field(() => AddLocalYearlyPriceInput, { nullable: true })
  @Type(() => AddLocalYearlyPriceInput)
  @ValidateNested()
  public addCustomPriceInput: AddLocalYearlyPriceInput;
}
