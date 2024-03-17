import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsUUID } from 'class-validator';
import { SectionStatusType } from '../graphql/section-status.gql';

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

  @Field(() => SectionStatusType)
  public status: SectionStatusType;
}
