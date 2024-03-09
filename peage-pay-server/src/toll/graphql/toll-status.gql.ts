import { registerEnumType } from '@nestjs/graphql';

export enum TollStatusType {
  ACTIVE = 'ACTIVE',
  OVERLOAD = 'OVERLOAD',
  OUT_OF_SERVICE = 'OUT_OF_SERVICE',
}
registerEnumType(TollStatusType, {
  name: 'TollStatusType',
});
