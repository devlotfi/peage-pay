import { registerEnumType } from '@nestjs/graphql';

export enum SubscriptionErrors {
  SUBSCRIPTION_EXISTS = 'SUBSCRIPTION_EXISTS',
}
registerEnumType(SubscriptionErrors, {
  name: 'SubscriptionErrors',
});
