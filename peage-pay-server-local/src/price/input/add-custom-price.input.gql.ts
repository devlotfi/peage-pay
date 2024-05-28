import { Field, InputType } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import { IsAfterOrEqualFieldDate } from 'src/shared/validation/is-after-or-equal-field-date';
import { AddPriceBaseInput } from './add-price-base.input.gql';

@InputType()
export class AddCustomPriceInput extends AddPriceBaseInput {
  @Field(() => Date)
  @IsDate()
  public startDate: Date;

  @Field(() => Date)
  @IsAfterOrEqualFieldDate('startDate')
  @IsDate()
  public endDate: Date;
}
