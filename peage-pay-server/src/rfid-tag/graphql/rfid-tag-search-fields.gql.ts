import { registerEnumType } from '@nestjs/graphql';

export enum RfidTagSearchFields {
  idSearch = 'idSearch',
  rfidSearch = 'rfidSearch',
  registrationNumberSearch = 'registrationNumberSearch',
}
registerEnumType(RfidTagSearchFields, {
  name: 'RfidTagSearchFields',
});
