import { Field, InputType } from '@nestjs/graphql';
import {
  IsDate,
  IsNumber,
  Max,
  Min,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

@InputType()
export class AddLocalYearlyPriceInput {
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
