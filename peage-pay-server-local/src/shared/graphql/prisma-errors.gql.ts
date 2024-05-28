import { registerEnumType } from '@nestjs/graphql';

export enum PrismaErrors {
  NOT_FOUND = 'NOT_FOUND',
  UNIQUE_CONSTRAINT_VIOLATION = 'UNIQUE_CONSTRAINT_VIOLATION',
  FOREIGN_KEY_CONSTRAINT_VIOLATION = 'FOREIGN_KEY_CONSTRAINT_VIOLATION',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}
registerEnumType(PrismaErrors, {
  name: 'PrismaErrors',
});
