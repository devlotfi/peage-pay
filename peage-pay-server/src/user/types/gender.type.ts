import { registerEnumType } from '@nestjs/graphql';

export enum GenderType {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
registerEnumType(GenderType, {
  name: 'GenderType',
});
