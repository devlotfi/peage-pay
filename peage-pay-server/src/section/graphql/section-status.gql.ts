import { registerEnumType } from '@nestjs/graphql';

export enum SectionStatusType {
  NORMAL_TRAFFIC = 'NORMAL_TRAFFIC',
  MODERATE_TRAFFIC = 'MODERATE_TRAFFIC',
  HIGH_TRAFFIC = 'HIGH_TRAFFIC',
  BLOCKED = 'BLOCKED',
}
registerEnumType(SectionStatusType, {
  name: 'SectionStatusType',
});
