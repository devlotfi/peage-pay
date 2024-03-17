import { registerEnumType } from '@nestjs/graphql';

export enum TollStatusType {
  NORMAL_TRAFFIC = 'NORMAL_TRAFFIC',
  MODERATE_TRAFFIC = 'MODERATE_TRAFFIC',
  HIGH_TRAFFIC = 'HIGH_TRAFFIC',
  OUT_OF_SERVICE = 'OUT_OF_SERVICE',
}
registerEnumType(TollStatusType, {
  name: 'TollStatusType',
});
