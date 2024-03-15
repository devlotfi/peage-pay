import { Field, ObjectType } from '@nestjs/graphql';
import { SubscriptionType } from '../graphql/subscription.gql';

@ObjectType()
export class SubscriptionListResult {
  @Field(() => [SubscriptionType])
  public list: SubscriptionType[];

  @Field()
  public count: number;
}
