import { Field, ObjectType } from '@nestjs/graphql';
import { WilayaType } from '../graphql/wilaya.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class WilayaListResult extends PaginationResult<WilayaType> {
  @Field(() => [WilayaType])
  public list: WilayaType[];
}
