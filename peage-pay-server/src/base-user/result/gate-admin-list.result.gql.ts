import { Field, ObjectType } from '@nestjs/graphql';
import { GateAdminType } from '../graphql/gate-admin.gql';

@ObjectType()
export class GateAdminListResult {
  @Field(() => [GateAdminType])
  public list: GateAdminType[];

  @Field()
  public count: number;
}
