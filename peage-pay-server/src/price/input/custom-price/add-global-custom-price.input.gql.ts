import { Field, InputType } from '@nestjs/graphql';
import { IsDate, Min, ValidateIf, ValidateNested } from 'class-validator';

@InputType()
export class AddGlobalCustomPriceInput {
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
}
