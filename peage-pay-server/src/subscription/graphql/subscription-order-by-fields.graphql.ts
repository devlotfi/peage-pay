import { registerEnumType } from '@nestjs/graphql';

export enum SubscriptionOrderByFields {
  id = 'id',
  name = 'name',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
registerEnumType(SubscriptionOrderByFields, {
  name: 'SubscriptionOrderByFields',
});
