import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class TollByIdInput {
  @Field()
  @IsUUID()
  public tollId: string;
}
