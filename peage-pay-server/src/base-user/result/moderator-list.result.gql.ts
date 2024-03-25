import { Field, ObjectType } from '@nestjs/graphql';
import { ModeratorType } from '../graphql/moderator.gql';

@ObjectType()
export class ModeratorListResult {
  @Field(() => [ModeratorType])
  public list: ModeratorType[];

  @Field()
  public count: number;
}
