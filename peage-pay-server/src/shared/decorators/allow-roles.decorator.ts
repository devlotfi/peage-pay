import { Reflector } from '@nestjs/core';
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';

export const AllowRoles = Reflector.createDecorator<BaseUserRolesType[]>();
