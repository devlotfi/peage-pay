import { Field, ObjectType } from '@nestjs/graphql';
import { HighwayType } from '../graphql/highway.gql';

@ObjectType()
export class HighwayListResult {
  @Field(() => [HighwayType])
  public list: HighwayType[];

  @Field()
  public count: number;
}
