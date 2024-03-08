import { registerEnumType } from '@nestjs/graphql';

export enum HighwayOrderByFields {
  id = 'id',
  name = 'name',
  code = 'code',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  lol = 'lol',
}
registerEnumType(HighwayOrderByFields, {
  name: 'HighwayOrderByFields',
});
