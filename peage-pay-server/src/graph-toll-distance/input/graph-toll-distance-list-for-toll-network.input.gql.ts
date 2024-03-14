import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class GraphTollDistanceListForTollNetworkInput {
  @Field()
  @IsUUID()
  public tollNetworkId: string;
}
