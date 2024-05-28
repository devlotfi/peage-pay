import { Field, ObjectType } from '@nestjs/graphql';
import { SubscriptionType } from '../graphql/subscription.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class SubscriptionListResult extends PaginationResult<SubscriptionType> {
  @Field(() => [SubscriptionType])
  public list: SubscriptionType[];
}
