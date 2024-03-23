import { Field, InputType } from '@nestjs/graphql';
import { IsDate, Min } from 'class-validator';
import { IsAfterFieldDate } from 'src/shared/validation/is-after-field-date';
import { IsAfterOrEqualFieldDate } from 'src/shared/validation/is-after-or-equal-field-date';

@InputType()
export class AddCustomPriceInput {
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

  @Field(() => Date)
  @IsDate()
  public startDate: Date;

  @Field(() => Date)
  @IsAfterOrEqualFieldDate('startDate')
  @IsDate()
  public endDate: Date;
}
