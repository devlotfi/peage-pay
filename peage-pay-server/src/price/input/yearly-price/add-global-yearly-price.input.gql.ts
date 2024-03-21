import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsArray,
  IsDate,
  IsInt,
  IsNumber,
  Max,
  Min,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

@InputType()
export class AddGlobalYearlyPriceInput {
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
  @ValidateIf((object) => object.startTimestamp < object.endTimestamp)
  @ValidateNested()
  @IsDate()
  public endTimestamp: Date;

  @Field(() => [Int])
  @IsArray()
  @Min(1)
  @Max(12)
  @IsInt()
  @ValidateNested({ each: true })
  public months: number[];

  @Field()
  @IsNumber()
  @Min(1)
  @Max(31)
  public startDay: number;

  @Field()
  @IsNumber()
  @Min(1)
  @Max(31)
  public endDay: number;
}
