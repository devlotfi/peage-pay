import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsUUID, Max, Min } from 'class-validator';

@InputType()
export class GraphTollDistanceListForTollInput {
  @Field()
  @IsUUID()
  public tollId: string;

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
