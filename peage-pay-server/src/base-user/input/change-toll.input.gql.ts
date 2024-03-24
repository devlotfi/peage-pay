import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class ChangeTollInput {
  @Field()
  @IsUUID()
  public baseUserId: string;

  @Field({ nullable: true })
  @IsUUID()
  public tollId: string;
}
