import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsUUID, MaxLength } from 'class-validator';
import { PaginationInput } from 'src/shared/graphql/pagination-input.gql';

@InputType()
export class RfidTagListInput extends PaginationInput {
  @Field()
  @IsUUID()
  public baseUserId: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public idSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public rfidSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public registrationNumberSearch?: string;
}
