import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, Length } from 'class-validator';

@InputType()
export class EditSubscriptionInput {
  @Field()
  @IsUUID()
  public id: string;

  @Field({ nullable: true })
  @Length(1, 256)
  public name?: string;
}
