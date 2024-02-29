import { Reflector } from '@nestjs/core';
import { UserRolesType } from 'src/user/graphql/user-roles.graphql';

export const AllowRoles = Reflector.createDecorator<UserRolesType[]>();
