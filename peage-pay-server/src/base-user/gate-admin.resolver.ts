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
import { ChangeTollInput } from './input/change-toll.input.gql';
import { ChangeRoleInput } from './input/change-role.input.gql';
import { GateAdminType } from './graphql/gate-admin.gql';
import { BaseUserType } from './graphql/base-user.gql';
import { BaseUserService } from './base-user.service';
import { GateAdminService } from './gate-admin.service';
import { GateAdminListResult } from './result/gate-admin-list.result.gql';
import { GateAdminListInput } from './input/gate-admin-list.input.gql';

@Resolver(() => GateAdminType)
export class GateAdminResolver {
  public constructor(
    private readonly gateAdminService: GateAdminService,
    private readonly baseUserService: BaseUserService,
  ) {}

  @Query(() => GateAdminListResult)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async gateAdminList(
    @Args('gateAdminListInput') gateAdminListInput: GateAdminListInput,
  ): Promise<GateAdminListResult> {
    return await this.gateAdminService.gateAdminList(gateAdminListInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async addGateAdminRole(
    @Args('changeTollInput') changeTollInput: ChangeRoleInput,
  ): Promise<boolean> {
    return await this.gateAdminService.addGateAdminRole(changeTollInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async removeGateAdminRole(
    @Args('changeTollInput') changeTollInput: ChangeRoleInput,
  ): Promise<boolean> {
    return await this.gateAdminService.removeGateAdminRole(changeTollInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async changeGateAdminToll(
    @Args('changeTollInput') changeTollInput: ChangeTollInput,
  ): Promise<boolean> {
    return await this.gateAdminService.changeGateAdminToll(changeTollInput);
  }

  @ResolveField(() => BaseUserType)
  public async baseUser(
    @Parent() gateAdmin: GateAdminType,
  ): Promise<BaseUserType> {
    console.log('field', gateAdmin);

    return (await this.baseUserService.baseUser(gateAdmin.baseUserId)) as any;
  }
}
