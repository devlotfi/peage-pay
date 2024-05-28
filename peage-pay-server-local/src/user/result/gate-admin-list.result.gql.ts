import { Field, ObjectType } from '@nestjs/graphql';
import { GateAdminType } from '../graphql/gate-admin.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class GateAdminListResult extends PaginationResult<GateAdminType> {
  @Field(() => [GateAdminType])
  public list: GateAdminType[];
}
