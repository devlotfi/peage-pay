import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNumber, Max, Min } from 'class-validator';
import { IsAfterFieldDate } from 'src/shared/validation/is-after-field-date';
import { IsSuperiorToFieldValue } from 'src/shared/validation/is-superior-to-field-value';

@InputType()
export class AddMonthlyPriceInput {
  @Field()
  @Min(0)
  public value: number;

  @Field()
  @Min(0)
  public priority: number;

  @Field(() => Date)
  @IsDate()
  public startTimestamp: Date;

  @Field(() => Date)
  @IsAfterFieldDate('startTimestamp')
  @IsDate()
  public endTimestamp: Date;

  @Field()
  @IsNumber()
  @Min(1)
  @Max(31)
  public startDay: number;

  @Field()
  @IsNumber()
  @IsSuperiorToFieldValue('startDay')
  @Min(1)
  @Max(31)
  public endDay: number;
}
