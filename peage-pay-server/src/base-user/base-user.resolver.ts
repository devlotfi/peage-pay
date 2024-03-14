import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BaseUserService } from './base-user.service';
import { BaseUserRolesType } from './graphql/base-user-roles.gql';
import { BaseUserType } from './graphql/base-user.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { BaseUserListInput } from './input/base-user-list.input.gql';
import { BaseUserByIdInput } from './input/base-user-by-id.input.gql';
import { AddHumanRessourcesAdminRoleInput } from './input/add-human-ressources-admin-role.input.gql';
import { RemoveHumanRessourcesAdminRoleInput } from './input/remove-human-ressources-admin-role.input.gql';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';

@Resolver(() => BaseUserType)
export class BaseUserResolver {
  public constructor(private readonly baseUserService: BaseUserService) {}

  @Query(() => [BaseUserType])
  @AllowRoles([
    BaseUserRolesType.GENERAL_ADMIN,
    BaseUserRolesType.HUMAN_RESSOURCES_ADMIN,
    BaseUserRolesType.MODERATOR,
  ])
  @UseGuards(AuthGuard)
  public async baseUserList(
    @Args('baseUserListInput') baseUserListInput: BaseUserListInput,
  ): Promise<BaseUserType[]> {
    return (await this.baseUserService.baseUserList(baseUserListInput)) as any;
  }

  @Query(() => BaseUserType, { nullable: true })
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async baseUserById(
    @Args('baseUserByIdInput') baseUserByIdInput: BaseUserByIdInput,
  ): Promise<BaseUserType | null> {
    return (await this.baseUserService.baseUserById(baseUserByIdInput)) as any;
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addHumanRessoucesAdminRole(
    @Args('addHumanRessoucesAdminRoleInput')
    addHumanRessoucesAdminRoleInput: AddHumanRessourcesAdminRoleInput,
  ): Promise<boolean> {
    return (await this.baseUserService.addHumanRessoucesAdminRole(
      addHumanRessoucesAdminRoleInput,
    )) as any;
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  public async removeHumanRessoucesAdminRole(
    @Args('removeHumanRessoucesAdminRoleInput')
    removeHumanRessoucesAdminRoleInput: RemoveHumanRessourcesAdminRoleInput,
  ): Promise<boolean> {
    return (await this.baseUserService.removeHumanRessoucesAdminRole(
      removeHumanRessoucesAdminRoleInput,
    )) as any;
  }

  @ResolveField(() => [BaseUserRolesType])
  public async roles(
    @Parent() baseUser: BaseUserType,
  ): Promise<BaseUserRolesType[]> {
    return this.baseUserService.getUserRolesList(baseUser.id);
  }
}
