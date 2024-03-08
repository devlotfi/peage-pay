import { registerEnumType } from '@nestjs/graphql';

export enum SortMode {
  asc = 'asc',
  desc = 'desc',
}
registerEnumType(SortMode, {
  name: 'SortMode',
});
