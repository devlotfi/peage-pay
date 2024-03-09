import { registerEnumType } from '@nestjs/graphql';

export enum VehicleTypeType {
  LIGHTWEIGHT = 'LIGHTWEIGHT',
  TRUCK = 'TRUCK',
  BUS = 'BUS',
  TAXI = 'TAXI',
}
registerEnumType(VehicleTypeType, {
  name: 'VehicleTypeType',
});
