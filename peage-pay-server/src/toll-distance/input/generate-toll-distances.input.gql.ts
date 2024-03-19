import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class GenerateTollDistancesInput {
  @Field()
  @IsUUID()
  public tollNetworkId: string;
}
