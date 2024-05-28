import { Field, ID, ObjectType } from '@nestjs/graphql';
import { WilayaType } from 'src/wilaya/graphql/wilaya.gql';
import { HighwayType } from 'src/highway/graphql/highway.gql';
import { TollNetworkType } from 'src/toll-network/graphql/toll-network.gql';

@ObjectType()
export class TollType {
  @Field(() => ID)
  public id: string;

  @Field()
  public wilayaId: string;

  @Field(() => WilayaType)
  public wilaya: WilayaType;

  @Field()
  public highwayId: string;

  @Field(() => HighwayType)
  public highway: HighwayType;

  @Field()
  public tollNetworkId: string;

  @Field(() => TollNetworkType)
  public tollNetwork: TollNetworkType;

  @Field()
  public name: string;

  @Field()
  public longitude: number;

  @Field()
  public latitude: number;

  @Field(() => Date)
  public createdAt: Date;

  @Field(() => Date)
  public updatedAt: Date;
}
