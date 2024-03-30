import { Field, ObjectType } from '@nestjs/graphql';
import { ModeratorType } from '../graphql/moderator.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class ModeratorListResult extends PaginationResult<ModeratorType> {
  @Field(() => [ModeratorType])
  public list: ModeratorType[];
}
