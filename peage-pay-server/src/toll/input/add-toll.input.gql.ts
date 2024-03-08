import { Field, InputType } from '@nestjs/graphql';
import { IsLatitude, IsLongitude, IsUUID, Length } from 'class-validator';

@InputType()
export class AddTollInput {
  @Field()
  @IsUUID()
  public wilayaId: string;

  @Field()
  @IsUUID()
  public highwayId: string;

  @Field()
  @Length(1, 1024)
  public name: string;

  @Field()
  @IsLatitude()
  public longitude: number;

  @Field()
  @IsLongitude()
  public latitude: number;
}
