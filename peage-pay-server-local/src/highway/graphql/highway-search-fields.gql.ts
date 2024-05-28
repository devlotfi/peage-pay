import { registerEnumType } from '@nestjs/graphql';

export enum HighwaySearchFields {
  idSearch = 'idSearch',
  nameSearch = 'nameSearch',
  codeSearch = 'codeSearch',
}
registerEnumType(HighwaySearchFields, {
  name: 'HighwaySearchFields',
});
