import { registerEnumType } from '@nestjs/graphql';

export enum WilayaSearchFields {
  idSearch = 'idSearch',
  nameSearch = 'nameSearch',
  codeSearch = 'codeSearch',
}
registerEnumType(WilayaSearchFields, {
  name: 'WilayaSearchFields',
});
