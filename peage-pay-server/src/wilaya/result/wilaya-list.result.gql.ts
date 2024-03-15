import { Field, ObjectType } from '@nestjs/graphql';
import { WilayaType } from '../graphql/wilaya.gql';

@ObjectType()
export class WilayaListResult {
  @Field(() => [WilayaType])
  public list: WilayaType[];

  @Field()
  public count: number;
}
