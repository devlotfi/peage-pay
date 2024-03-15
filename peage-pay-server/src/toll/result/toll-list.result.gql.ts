import { Field, ObjectType } from '@nestjs/graphql';
import { TollType } from '../graphql/toll.gql';

@ObjectType()
export class TollListResult {
  @Field(() => [TollType])
  public list: TollType[];

  @Field()
  public count: number;
}
