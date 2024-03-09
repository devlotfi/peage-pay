import { registerEnumType } from '@nestjs/graphql';

export enum TollNetworkErrors {
  TOLL_NETWORK_EXISTS = 'TOLL_NETWORK_EXISTS',
}
registerEnumType(TollNetworkErrors, {
  name: 'TollNetworkErrors',
});
