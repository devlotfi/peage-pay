import { registerEnumType } from '@nestjs/graphql';

export enum AutomaticGateSearchFields {
  idSearch = 'idSearch',
  nameSearch = 'nameSearch',
}
registerEnumType(AutomaticGateSearchFields, {
  name: 'AutomaticGateSearchFields',
});
