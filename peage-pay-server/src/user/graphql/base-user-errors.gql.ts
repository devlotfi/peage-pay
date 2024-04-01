import { registerEnumType } from '@nestjs/graphql';

export enum BaseUserErrors {
  INSUFFICIENT_PRIVILEGES = 'INSUFFICIENT_PRIVILEGES',
  TOLL_NOT_ASSIGNED = 'TOLL_NOT_ASSIGNED',
}
registerEnumType(BaseUserErrors, {
  name: 'BaseUserErrors',
});
