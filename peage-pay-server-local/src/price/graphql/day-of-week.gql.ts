import { registerEnumType } from '@nestjs/graphql';

export enum DayOfWeekType {
  SUNDAY = 'SUNDAY',
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
}
registerEnumType(DayOfWeekType, {
  name: 'DayOfWeekType',
});
