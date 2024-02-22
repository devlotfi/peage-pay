import { registerEnumType } from '@nestjs/graphql';

export enum AuthErrors {
  USER_WITH_EMAIL_EXISTS = 'USER_WITH_EMAIL_EXISTS',
}
registerEnumType(AuthErrors, {
  name: 'AuthErrors',
});
