import { registerEnumType } from '@nestjs/graphql';

export enum GraphTollDistanceErrors {
  GRAPH_TOLL_DISTANCE_EXISTS = 'GRAPH_TOLL_DISTANCE_EXISTS',
}
registerEnumType(GraphTollDistanceErrors, {
  name: 'GraphTollDistanceErrors',
});
