import { registerEnumType } from '@nestjs/graphql';

export enum BaseUserRolesType {
  USER = 'USER',
  GENERAL_ADMIN = 'GENERAL_ADMIN',
  HUMAN_RESSOURCES_ADMIN = 'HUMAN_RESSOURCES_ADMIN',
  TOLL_ADMIN = 'TOLL_ADMIN',
  GATE_ADMIN = 'GATE_ADMIN',
  MODERATOR = 'MODERATOR',
}
registerEnumType(BaseUserRolesType, {
  name: 'BaseUserRolesType',
});
