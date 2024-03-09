import { Field, ID, ObjectType } from '@nestjs/graphql';
import { VehicleTypeType } from './vehicle-type.gql';

@ObjectType()
export class SubscriptionType {
  @Field(() => ID)
  public id: string;

  @Field()
  public name: string;

  @Field(() => VehicleTypeType)
  public vehicleType: VehicleTypeType;

  @Field(() => Date)
  public createdAt: Date;

  @Field(() => Date)
  public updatedAt: Date;
}
