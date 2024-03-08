import { Reflector } from '@nestjs/core';
import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.graphql';

export const AllowRoles = Reflector.createDecorator<BaseUserRolesType[]>();
