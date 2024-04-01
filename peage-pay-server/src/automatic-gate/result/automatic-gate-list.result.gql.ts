import { Field, ObjectType } from '@nestjs/graphql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';
import { AutomaticGateType } from '../graphql/automatic-gate.gql';

@ObjectType()
export class AutomaticGateListResult extends PaginationResult<AutomaticGateType> {
  @Field(() => [AutomaticGateType])
  public list: AutomaticGateType[];
}
