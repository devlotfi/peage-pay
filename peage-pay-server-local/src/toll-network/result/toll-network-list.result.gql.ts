import { Field, ObjectType } from '@nestjs/graphql';
import { TollNetworkType } from '../graphql/toll-network.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class TollNetworkListResult extends PaginationResult<TollNetworkType> {
  @Field(() => [TollNetworkType])
  public list: TollNetworkType[];
}
