import { Field, InputType } from '@nestjs/graphql';
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  IsDate,
  Min,
} from 'class-validator';
import { DayOfWeekType } from '../../graphql/day-of-week.gql';
import { IsAfterFieldDate } from 'src/shared/validation/is-after-field-date';

@InputType()
export class AddWeeklyPriceInput {
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

  @Field(() => [DayOfWeekType])
  @ArrayMinSize(1)
  @ArrayMaxSize(7)
  @ArrayUnique((value) => value)
  public days: DayOfWeekType[];
}
