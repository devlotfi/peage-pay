import { registerEnumType } from '@nestjs/graphql';

export enum RefreshTokenMode {
  PLAIN_TEXT = 'PLAIN_TEXT',
  COOKIE = 'COOKIE',
}
registerEnumType(RefreshTokenMode, {
  name: 'RefreshTokenMode',
});
