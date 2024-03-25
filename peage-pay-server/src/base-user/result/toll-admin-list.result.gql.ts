import { Field, ObjectType } from '@nestjs/graphql';
import { TollAdminType } from '../graphql/toll-admin.gql';

@ObjectType()
export class TollAdminListResult {
  @Field(() => [TollAdminType])
  public list: TollAdminType[];

  @Field()
  public count: number;
}
