import { Field, InputType } from '@nestjs/graphql';
import {
  IsLatitude,
  IsLongitude,
  IsOptional,
  IsUUID,
  Length,
} from 'class-validator';
import { TollStatusType } from '../graphql/toll-status.gql';

@InputType()
export class EditTollInput {
  @Field()
  @IsUUID()
  public tollId: string;

  @Field({ nullable: true })
  @IsUUID()
  @IsOptional()
  public wilayaId?: string;

  @Field({ nullable: true })
  @IsUUID()
  @IsOptional()
  public highwayId?: string;

  @Field({ nullable: true })
  @Length(1, 1024)
  @IsOptional()
  public name?: string;

  @Field(() => TollStatusType, { nullable: true })
  @IsOptional()
  public status?: TollStatusType;

  @Field({ nullable: true })
  @IsLatitude()
  @IsOptional()
  public latitude?: number;

  @Field({ nullable: true })
  @IsLongitude()
  @IsOptional()
  public longitude?: number;
}
