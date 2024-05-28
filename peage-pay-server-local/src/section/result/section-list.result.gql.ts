import { Field, ObjectType } from '@nestjs/graphql';
import { SectionType } from '../graphql/section.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class SectionListResult extends PaginationResult<SectionType> {
  @Field(() => [SectionType])
  public list: SectionType[];
}
