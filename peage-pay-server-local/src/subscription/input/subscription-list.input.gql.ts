import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, MaxLength } from 'class-validator';
import { PaginationInput } from 'src/shared/graphql/pagination-input.gql';

@InputType()
export class SubscriptionListInput extends PaginationInput {
  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public idSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public nameSearch?: string;
}
