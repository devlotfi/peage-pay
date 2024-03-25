import { Field, InputType } from '@nestjs/graphql';
import { IsDate, Min } from 'class-validator';
import { IsAfterFieldDate } from 'src/shared/validation/is-after-field-date';

@InputType()
export class AddPriceBaseInput {
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
}
