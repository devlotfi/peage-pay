import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { TollStatusType } from '../graphql/toll-status.gql';

@InputType()
export class ChangeTollStatusInput {
  @Field()
  @IsUUID()
  public tollId: string;

  @Field(() => TollStatusType)
  public status: TollStatusType;
}
