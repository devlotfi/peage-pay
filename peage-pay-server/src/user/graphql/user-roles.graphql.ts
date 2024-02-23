import { registerEnumType } from '@nestjs/graphql';

export enum UserRolesType {
  USER = 'USER',
  GENERAL_ADMIN = 'GENERAL_ADMIN',
  HUMAN_RESSOURCES_ADMIN = 'HUMAN_RESSOURCES_ADMIN',
  TOLL_ADMIN = 'TOLL_ADMIN',
  GATE_ADMIN = 'GATE_ADMIN',
  MODERATOR = 'MODERATOR',
}
registerEnumType(UserRolesType, {
  name: 'UserRolesType',
});
