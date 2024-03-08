import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsPositive, Length, Max } from 'class-validator';

@InputType()
export class SubscriptionListInput {
  @Field({ nullable: true })
  @Length(1, 1024)
  @IsOptional()
  public idSearch?: string;

  @Field({ nullable: true })
  @Length(1, 1024)
  @IsOptional()
  public nameSearch?: string;

  @Field()
  @Max(10)
  @IsPositive()
  public take: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsPositive()
  public skip?: number;
}
