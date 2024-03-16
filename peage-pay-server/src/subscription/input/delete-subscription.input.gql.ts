import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class DeleteSubscriptionInput {
  @Field()
  @IsUUID()
  public subscriptionId: string;
}
