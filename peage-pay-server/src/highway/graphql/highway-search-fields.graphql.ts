import { registerEnumType } from '@nestjs/graphql';

export enum HighwaySearchFields {
  id = 'id',
  name = 'name',
  code = 'code',
}
registerEnumType(HighwaySearchFields, {
  name: 'HighwaySearchFields',
});
