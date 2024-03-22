import { registerEnumType } from '@nestjs/graphql';

export enum PriceErrors {
  PRICE_NOT_FOUND = 'PRICE_NOT_FOUND',
  CANNOT_DELETE_GLOBAL_PRICE = 'CANNOT_DELETE_GLOBAL_PRICE',
  CANNOT_DELETE_LOCAL_PRICE = 'CANNOT_DELETE_LOCAL_PRICE',
  TOLL_NOT_MANAGED = 'TOLL_NOT_MANAGED',
}
registerEnumType(PriceErrors, {
  name: 'PriceErrors',
});
