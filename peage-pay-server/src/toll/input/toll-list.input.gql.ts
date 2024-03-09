import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsPositive, Max, MaxLength } from 'class-validator';
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
  public wilayaIdSearch?: string;

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
  public highwayIdSearch?: string;

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

  @Field(() => TollStatusType, { nullable: true })
  @IsOptional()
  public statusSearch?: TollStatusType;

  @Field()
  @Max(10)
  @IsPositive()
  public take: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsPositive()
  public skip?: number;
}
