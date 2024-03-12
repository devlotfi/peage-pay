import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, Max, MaxLength, Min } from 'class-validator';
import { TollStatusType } from '../graphql/toll-status.gql';

@InputType()
export class TollListInput {
  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public idSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public wilayaNameSearch?: string;

  @Field({ nullable: true })
  @IsOptional()
  public wilayaCodeSearch?: number;

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
  public tollNetworkNameSearch?: string;

  @Field({ nullable: true })
  @MaxLength(1024)
  @IsOptional()
  public nameSearch?: string;

  @Field(() => TollStatusType, { nullable: true })
  @IsOptional()
  public statusSearch?: TollStatusType;

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
