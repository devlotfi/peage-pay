import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { VehicleTypeType } from '../graphql/vehicle-type.gql';

@InputType()
export class AddSubscriptionInput {
  @Field()
  @Length(1, 256)
  public name: string;

  @Field(() => VehicleTypeType)
  public vehicleType: VehicleTypeType;
}
