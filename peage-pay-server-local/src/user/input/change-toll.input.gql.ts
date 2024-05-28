import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, ValidateIf } from 'class-validator';

@InputType()
export class ChangeTollInput {
  @Field()
  @IsUUID()
  public baseUserId: string;

  @Field(() => String, { nullable: true })
  @ValidateIf((object, value) => value !== null)
  @IsUUID()
  public tollId: string | null;
}
