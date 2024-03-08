import { Field, ID, ObjectType } from '@nestjs/graphql';
import { WilayaType } from 'src/wilaya/graphql/wilaya.graphql';

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
