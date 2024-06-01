import { registerEnumType } from '@nestjs/graphql';

export enum PaymentErrors {
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
}
registerEnumType(PaymentErrors, {
  name: 'PaymentErrors',
});
