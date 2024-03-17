import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class SectionListForTollNetworkInput {
  @Field()
  @IsUUID()
  public tollNetworkId: string;
}
