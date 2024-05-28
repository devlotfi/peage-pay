import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, MaxLength } from 'class-validator';
import { PaginationInput } from 'src/shared/graphql/pagination-input.gql';

@InputType()
export class BaseUserListInput extends PaginationInput {
  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public idSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public firstNameSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public lastNameSearch?: string;
}
