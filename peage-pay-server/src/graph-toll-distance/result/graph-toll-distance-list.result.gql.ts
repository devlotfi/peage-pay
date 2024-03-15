import { Field, ObjectType } from '@nestjs/graphql';
import { GraphTollDistanceType } from '../graphql/graph-toll-distance.gql';

@ObjectType()
export class GraphTollDistanceListResult {
  @Field(() => [GraphTollDistanceType])
  public list: GraphTollDistanceType[];

  @Field()
  public count: number;
}
