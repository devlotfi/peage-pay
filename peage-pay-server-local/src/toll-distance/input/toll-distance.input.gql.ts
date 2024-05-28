import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class TollDistanceInput {
  @Field()
  @IsUUID()
  public fromTollId: string;

  @Field()
  @IsUUID()
  public toTollId: string;
}
