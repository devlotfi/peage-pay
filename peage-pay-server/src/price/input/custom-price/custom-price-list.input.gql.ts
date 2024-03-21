import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';

@InputType()
export class CustomPriceListInput {
  @Field()
  @IsNumber()
  @Max(10)
  @Min(0)
  public take: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(0)
  public skip?: number;
}
