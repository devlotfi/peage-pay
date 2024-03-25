import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BaseUserRolesType } from './graphql/base-user-roles.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { TollAdminType } from './graphql/toll-admin.gql';
import { TollAdminService } from './toll-admin.service';
import { ChangeTollInput } from './input/change-toll.input.gql';
import { ChangeRoleInput } from './input/change-role.input.gql';
import { BaseUserService } from './base-user.service';
import { BaseUserType } from './graphql/base-user.gql';
import { TollAdminListResult } from './result/toll-admin-list.result.gql';
import { TollAdminListInput } from './input/toll-admin-list.input.gql';

@Resolver(() => TollAdminType)
export class TollAdminResolver {
  public constructor(
    private readonly tollAdminService: TollAdminService,
    private readonly baseUserService: BaseUserService,
  ) {}

  @Query(() => TollAdminListResult)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async tollAdminList(
    @Args('tollAdminListInput') tollAdminListInput: TollAdminListInput,
  ): Promise<TollAdminListResult> {
    return await this.tollAdminService.tollAdminList(tollAdminListInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async addTollAdminRole(
    @Args('changeTollInput') changeTollInput: ChangeRoleInput,
  ): Promise<boolean> {
    return await this.tollAdminService.addTollAdminRole(changeTollInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async removeTollAdminRole(
    @Args('changeTollInput') changeTollInput: ChangeRoleInput,
  ): Promise<boolean> {
    return await this.tollAdminService.removeTollAdminRole(changeTollInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async changeTollAdminToll(
    @Args('changeTollInput') changeTollInput: ChangeTollInput,
  ): Promise<boolean> {
    return await this.tollAdminService.changeTollAdminToll(changeTollInput);
  }

  @ResolveField(() => BaseUserType)
  public async baseUser(
    @Parent() gateAdmin: TollAdminType,
  ): Promise<BaseUserType> {
    return (await this.baseUserService.baseUser(gateAdmin.baseUserId)) as any;
  }
}
