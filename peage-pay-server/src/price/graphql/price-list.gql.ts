import { registerEnumType } from '@nestjs/graphql';

export enum PriceListType {
  DAILY,
  WEEKLY,
  MONTHLY,
  YEARLY,
  CUSTOM,
}
registerEnumType(PriceListType, {
  name: 'PriceListType',
});
