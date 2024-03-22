import { Field, InputType, Int } from '@nestjs/graphql';
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  IsDate,
  IsIn,
  IsInt,
  IsNumber,
  Max,
  Min,
} from 'class-validator';
import { IsAfterFieldDate } from 'src/shared/validation/is-after-field-date';
import { IsSuperiorToFieldValue } from 'src/shared/validation/is-superior-to-field-value';

@InputType()
export class AddYearlyPriceInput {
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

  @Field(() => [Int])
  @ArrayMinSize(1)
  @ArrayMaxSize(12)
  @IsInt({ each: true })
  @IsIn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], { each: true })
  @ArrayUnique((value) => value)
  public months: number[];

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
