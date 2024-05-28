import { registerEnumType } from '@nestjs/graphql';

export enum AutomaticGateErrors {
  INVALID_NAME_OR_PASSWORD = 'INVALID_NAME_OR_PASSWORD',
}
registerEnumType(AutomaticGateErrors, {
  name: 'AutomaticGateErrors',
});
