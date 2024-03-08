import { Field, InputType } from '@nestjs/graphql';
import {
  IsLatitude,
  IsLongitude,
  IsOptional,
  IsUUID,
  Length,
} from 'class-validator';

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
  @Length(1, 1024)
  @IsOptional()
  public name?: string;

  @Field()
  @IsLatitude()
  @IsOptional()
  public longitude?: number;

  @Field()
  @IsLongitude()
  @IsOptional()
  public latitude?: number;
}
