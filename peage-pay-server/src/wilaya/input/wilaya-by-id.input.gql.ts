import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class WilayaByIdInput {
  @Field()
  @IsUUID()
  public wilayaId: string;
}
