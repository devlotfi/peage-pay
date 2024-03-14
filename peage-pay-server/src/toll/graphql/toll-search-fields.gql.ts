import { registerEnumType } from '@nestjs/graphql';

export enum TollSearchFields {
  idSearch = 'idSearch',
  wilayaNameSearch = 'wilayaNameSearch',
  wilayaCodeSearch = 'wilayaCodeSearch',
  highwayNameSearch = 'highwayNameSearch',
  highwayCodeSearch = 'highwayCodeSearch',
  tollNetworkNameSearch = 'tollNetworkNameSearch',
  nameSearch = 'nameSearch',
}
registerEnumType(TollSearchFields, {
  name: 'TollSearchFields',
});
