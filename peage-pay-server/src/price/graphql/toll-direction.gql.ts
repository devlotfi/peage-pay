import { registerEnumType } from '@nestjs/graphql';

export enum TollDirectionType {
  INBOUND = 'INBOUND',
  OUTBOUND = 'OUTBOUND',
}
registerEnumType(TollDirectionType, {
  name: 'TollDirectionType',
});
