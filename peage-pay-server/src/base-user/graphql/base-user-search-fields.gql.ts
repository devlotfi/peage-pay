import { registerEnumType } from '@nestjs/graphql';

export enum BaseUserSearchFields {
  idSearch = 'idSearch',
  firstNameSearch = 'firstNameSearch',
  lastNameSearch = 'lastNameSearch',
}
registerEnumType(BaseUserSearchFields, {
  name: 'BaseUserSearchFields',
});
