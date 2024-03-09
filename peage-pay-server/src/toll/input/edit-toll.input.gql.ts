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

  @Field()
  @IsUUID()
  @IsOptional()
  public wilayaId?: string;

  @Field()
  @IsUUID()
  @IsOptional()
  public highwayId?: string;

  @Field()
  @IsUUID()
  @IsOptional()
  public tollNetworkId?: string;

  @Field()
  @Length(1, 1024)
  @IsOptional()
  public name?: string;

  @Field(() => TollStatusType)
  @IsOptional()
  public status?: TollStatusType;

  @Field()
  @IsLatitude()
  @IsOptional()
  public longitude?: number;

  @Field()
  @IsLongitude()
  @IsOptional()
  public latitude?: number;
}
