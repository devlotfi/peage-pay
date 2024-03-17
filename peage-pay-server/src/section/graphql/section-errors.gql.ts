import { registerEnumType } from '@nestjs/graphql';

export enum SectionErrors {
  SECTION_EXISTS = 'SECTION_EXISTS',
}
registerEnumType(SectionErrors, {
  name: 'SectionErrors',
});
