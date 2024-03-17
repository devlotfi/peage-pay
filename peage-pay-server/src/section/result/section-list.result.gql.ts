import { Field, ObjectType } from '@nestjs/graphql';
import { SectionType } from '../graphql/section.gql';

@ObjectType()
export class SectionListResult {
  @Field(() => [SectionType])
  public list: SectionType[];

  @Field()
  public count: number;
}
