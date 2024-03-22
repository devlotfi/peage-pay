import { registerEnumType } from '@nestjs/graphql';

export enum TollErrors {
  TOLL_EXISTS = 'TOLL_EXISTS',
  TOLL_NOT_FOUND = 'TOLL_NOT_FOUND',
}
registerEnumType(TollErrors, {
  name: 'TollErrors',
});
