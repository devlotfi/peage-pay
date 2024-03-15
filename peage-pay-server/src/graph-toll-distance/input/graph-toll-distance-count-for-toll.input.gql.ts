import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class GraphTollDistanceCountForTollInput {
  @Field()
  @IsUUID()
  public tollId: string;
}
