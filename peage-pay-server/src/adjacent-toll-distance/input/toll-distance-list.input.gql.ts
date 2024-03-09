import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsPositive, IsUUID, Max } from 'class-validator';

@InputType()
export class AdjacentTollDistanceListInput {
  @Field({ nullable: true })
  @IsUUID()
  public tollId: string;

  @Field()
  @Max(10)
  @IsPositive()
  public take: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsPositive()
  public skip?: number;
}
