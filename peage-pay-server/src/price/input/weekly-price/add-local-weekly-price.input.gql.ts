import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsArray,
  IsDate,
  IsInt,
  IsUUID,
  Max,
  Min,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

@InputType()
export class AddLocalWeeklyPriceInput {
  @Field()
  @IsUUID()
  public tollId: string;

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
  @Max(7)
  @IsInt()
  @ValidateNested({ each: true })
  public days: number[];
}
