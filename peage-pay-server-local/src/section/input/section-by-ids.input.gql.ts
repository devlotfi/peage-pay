import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class SectionByIdsInput {
  @Field()
  @IsUUID()
  public fromTollId: string;

  @Field()
  @IsUUID()
  public toTollId: string;
}
