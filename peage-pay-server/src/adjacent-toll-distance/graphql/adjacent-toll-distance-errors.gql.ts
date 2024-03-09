import { registerEnumType } from '@nestjs/graphql';

export enum AdjacentTollDistanceErrors {
  ADJACENT_TOLL_DISTANCE_EXISTS = 'ADJACENT_TOLL_DISTANCE_EXISTS',
}
registerEnumType(AdjacentTollDistanceErrors, {
  name: 'AdjacentTollDistanceErrors',
});
