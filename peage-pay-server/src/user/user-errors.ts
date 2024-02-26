import { registerEnumType } from '@nestjs/graphql';

export enum UserErrors {
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  USER_WITH_EMAIL_EXISTS = 'USER_WITH_EMAIL_EXISTS',
  USER_WITH_PHONE_EXISTS = 'USER_WITH_PHONE_EXISTS',
}
registerEnumType(UserErrors, {
  name: 'UserErrors',
});
