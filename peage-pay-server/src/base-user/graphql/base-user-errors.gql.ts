import { registerEnumType } from '@nestjs/graphql';

export enum BaseUserErrors {
  BASE_USER_NOT_FOUND = 'BASE_USER_NOT_FOUND',
  BASE_USER_WITH_EMAIL_EXISTS = 'BASE_USER_WITH_EMAIL_EXISTS',
  BASE_USER_WITH_PHONE_EXISTS = 'BASE_USER_WITH_PHONE_EXISTS',
  INSUFFICIENT_PRIVILEGES = 'INSUFFICIENT_PRIVILEGES',
}
registerEnumType(BaseUserErrors, {
  name: 'BaseUserErrors',
});
