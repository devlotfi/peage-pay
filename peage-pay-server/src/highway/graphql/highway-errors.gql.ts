import { registerEnumType } from '@nestjs/graphql';

export enum HighwayErrors {
  HIGHWAY_EXISTS = 'HIGHWAY_EXISTS',
}
registerEnumType(HighwayErrors, {
  name: 'HighwayErrors',
});
