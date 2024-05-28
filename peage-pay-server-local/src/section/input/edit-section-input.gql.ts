import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsUUID } from 'class-validator';

@InputType()
export class EditSectionInput {
  @Field()
  @IsUUID()
  public fromTollId: string;

  @Field()
  @IsUUID()
  public toTollId: string;

  @Field()
  @IsNumber()
  public distance: number;
}
