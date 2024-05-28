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
import { GateAdminType } from './graphql/gate-admin.gql';
import { BaseUserType } from './graphql/base-user.gql';
import { BaseUserService } from './base-user.service';
import { GateAdminService } from './gate-admin.service';
import { GateAdminListResult } from './result/gate-admin-list.result.gql';
import { GateAdminListInput } from './input/gate-admin-list.input.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { TollType } from 'src/toll/graphql/toll.gql';
import { TollService } from 'src/toll/toll.service';
import { ContextAccessTokenPayload } from 'src/shared/decorators/context-access-token-payload.decorator';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';

@Resolver(() => GateAdminType)
export class GateAdminResolver {
  public constructor(
    private readonly gateAdminService: GateAdminService,
    private readonly baseUserService: BaseUserService,
    private readonly tollService: TollService,
  ) {}

  @Query(() => GateAdminListResult)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async gateAdminList(
    @Args('gateAdminListInput') gateAdminListInput: GateAdminListInput,
  ) {
    return await this.gateAdminService.gateAdminList(gateAdminListInput);
  }

  @Query(() => GateAdminType, { nullable: true })
  @AllowRoles([BaseUserRolesType.GATE_ADMIN])
  @UseGuards(AuthGuard)
  public async gateAdminInfo(
    @ContextAccessTokenPayload() accessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.gateAdminService.gateAdminInfo(accessTokenPayload);
  }

  @Query(() => GateAdminType, { nullable: true })
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async gateAdminById(
    @Args('gateAdminByIdInput') gateAdminByIdInput: IdInput,
  ) {
    return (await this.gateAdminService.gateAdminById(
      gateAdminByIdInput,
    )) as any;
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async addGateAdminRole(
    @Args('addGateAdminRoleInput') addGateAdminRoleInput: IdInput,
  ) {
    return await this.gateAdminService.addGateAdminRole(addGateAdminRoleInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async removeGateAdminRole(
    @Args('removeGateAdminRoleInput') removeGateAdminRoleInput: IdInput,
  ) {
    return await this.gateAdminService.removeGateAdminRole(
      removeGateAdminRoleInput,
    );
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async changeGateAdminToll(
    @Args('changeGateAdminTollInput') changeGateAdminTollInput: ChangeTollInput,
  ) {
    return await this.gateAdminService.changeGateAdminToll(
      changeGateAdminTollInput,
    );
  }

  @ResolveField(() => BaseUserType)
  public async baseUser(@Parent() gateAdmin: GateAdminType) {
    return await this.baseUserService.baseUser(gateAdmin.baseUserId);
  }

  @ResolveField(() => TollType)
  public async toll(@Parent() gateAdmin: GateAdminType) {
    if (gateAdmin.tollId) {
      return await this.tollService.tollById({ id: gateAdmin.tollId });
    }
  }
}
