import { registerEnumType } from '@nestjs/graphql';

export enum AutomaticGateVariantType {
  TICKET_PRINTER = 'TICKET_PRINTER',
  RFID_READER = 'RFID_READER',
  QR_CODE_READER = 'QR_CODE_READER',
}
registerEnumType(AutomaticGateVariantType, {
  name: 'AutomaticGateVariantType',
});
