import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsPositive, IsUUID, Length } from 'class-validator';

@InputType()
export class EditSubscriptionInput {
  @Field()
  @IsUUID()
  public subscriptionId: string;

  @Field({ nullable: true })
  @Length(1, 256)
  @IsOptional()
  public name?: string;

  @Field({ nullable: true })
  @IsPositive()
  @IsOptional()
  public days?: number;

  @Field({ nullable: true })
  @IsPositive()
  @IsOptional()
  public price?: number;
}
