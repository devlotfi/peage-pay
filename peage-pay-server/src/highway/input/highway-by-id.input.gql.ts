import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class HighwayByIdInput {
  @Field()
  @IsUUID()
  public highwayId: string;
}
