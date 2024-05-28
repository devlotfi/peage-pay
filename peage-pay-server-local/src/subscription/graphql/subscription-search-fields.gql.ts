import { registerEnumType } from '@nestjs/graphql';

export enum SubscriptionSearchFields {
  idSearch = 'idSearch',
  nameSearch = 'nameSearch',
}
registerEnumType(SubscriptionSearchFields, {
  name: 'SubscriptionSearchFields',
});
