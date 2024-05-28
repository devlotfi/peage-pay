import { registerEnumType } from '@nestjs/graphql';

export enum PaymentSubscriptionMessages {
  PAYMENT_SUCCESSFUL = 'PAYMENT_SUCCESSFUL',
  PAYMENT_FAILED = 'PAYMENT_FAILED',
}
registerEnumType(PaymentSubscriptionMessages, {
  name: 'PaymentSubscriptionMessages',
});
