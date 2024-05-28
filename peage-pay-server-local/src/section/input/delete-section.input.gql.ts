import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class DeleteSectionInput {
  @Field()
  @IsUUID()
  public fromTollId: string;

  @Field()
  @IsUUID()
  public toTollId: string;
}
