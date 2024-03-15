import { Field, ObjectType } from '@nestjs/graphql';
import { TollNetworkType } from '../graphql/toll-network.gql';

@ObjectType()
export class TollNetworkListResult {
  @Field(() => [TollNetworkType])
  public list: TollNetworkType[];

  @Field()
  public count: number;
}
