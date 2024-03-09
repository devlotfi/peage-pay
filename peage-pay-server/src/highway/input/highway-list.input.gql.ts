import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsPositive, Max, MaxLength } from 'class-validator';

@InputType()
export class HighwayListInput {
  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public idSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public nameSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public codeSearch?: string;

  @Field()
  @Max(10)
  @IsPositive()
  public take: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsPositive()
  public skip?: number;
}
