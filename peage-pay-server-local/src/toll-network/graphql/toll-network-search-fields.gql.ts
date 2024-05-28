import { registerEnumType } from '@nestjs/graphql';

export enum TollNetworkSearchFields {
  idSearch = 'idSearch',
  nameSearch = 'nameSearch',
}
registerEnumType(TollNetworkSearchFields, {
  name: 'TollNetworkSearchFields',
});
