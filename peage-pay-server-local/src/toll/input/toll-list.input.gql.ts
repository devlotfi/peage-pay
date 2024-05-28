import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsUUID, MaxLength } from 'class-validator';
import { PaginationInput } from 'src/shared/graphql/pagination-input.gql';

@InputType()
export class TollListInput extends PaginationInput {
  @Field({ nullable: true })
  @IsUUID()
  @IsOptional()
  public tollNetworkId?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public idSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public wilayaNameSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public wilayaCodeSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public highwayNameSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public highwayCodeSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public nameSearch?: string;
}
