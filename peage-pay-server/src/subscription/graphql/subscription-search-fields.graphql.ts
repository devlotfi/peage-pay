import { registerEnumType } from '@nestjs/graphql';

export enum SubscriptionSearchFields {
  id = 'id',
  name = 'name',
}
registerEnumType(SubscriptionSearchFields, {
  name: 'SubscriptionSearchFields',
});
