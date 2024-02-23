import { registerEnumType } from '@nestjs/graphql';

export enum UserErrors {
  USER_NOT_FOUND = 'USER_NOT_FOUND',
}
registerEnumType(UserErrors, {
  name: 'UserErrors',
});
