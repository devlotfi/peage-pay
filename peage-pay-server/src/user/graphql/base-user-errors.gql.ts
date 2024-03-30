import { registerEnumType } from '@nestjs/graphql';

export enum BaseUserErrors {
  INSUFFICIENT_PRIVILEGES = 'INSUFFICIENT_PRIVILEGES',
}
registerEnumType(BaseUserErrors, {
  name: 'BaseUserErrors',
});
