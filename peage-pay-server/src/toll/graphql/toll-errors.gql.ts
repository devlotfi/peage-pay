import { registerEnumType } from '@nestjs/graphql';

export enum TollErrors {
  TOLL_EXISTS = 'TOLL_EXISTS',
}
registerEnumType(TollErrors, {
  name: 'TollErrors',
});
