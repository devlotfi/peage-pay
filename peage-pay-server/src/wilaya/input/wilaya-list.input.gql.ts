import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, Max, MaxLength, Min } from 'class-validator';

@InputType()
export class WilayaListInput {
  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public idSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public nameSearch?: string;

  @Field({ nullable: true })
  @IsOptional()
  public codeSearch?: number;

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
