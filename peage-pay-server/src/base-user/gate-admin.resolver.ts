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
import { TollService } from './toll.service';

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
  ): Promise<GateAdminListResult> {
    return await this.gateAdminService.gateAdminList(gateAdminListInput);
  }

  @Query(() => GateAdminType, { nullable: true })
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async gateAdminById(
    @Args('gateAdminByIdInput') gateAdminByIdInput: IdInput,
  ): Promise<GateAdminType | null> {
    return (await this.gateAdminService.gateAdminById(
      gateAdminByIdInput,
    )) as any;
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async addGateAdminRole(
    @Args('addGateAdminRoleInput') addGateAdminRoleInput: IdInput,
  ): Promise<boolean> {
    return await this.gateAdminService.addGateAdminRole(addGateAdminRoleInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async removeGateAdminRole(
    @Args('removeGateAdminRoleInput') removeGateAdminRoleInput: IdInput,
  ): Promise<boolean> {
    return await this.gateAdminService.removeGateAdminRole(
      removeGateAdminRoleInput,
    );
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async changeGateAdminToll(
    @Args('changeGateAdminTollInput') changeGateAdminTollInput: ChangeTollInput,
  ): Promise<boolean> {
    return await this.gateAdminService.changeGateAdminToll(
      changeGateAdminTollInput,
    );
  }

  @ResolveField(() => BaseUserType)
  public async baseUser(
    @Parent() gateAdmin: GateAdminType,
  ): Promise<BaseUserType> {
    console.log('field', gateAdmin);

    return (await this.baseUserService.baseUser(gateAdmin.baseUserId)) as any;
  }

  @ResolveField(() => TollType)
  public async toll(@Parent() gateAdmin: GateAdminType): Promise<BaseUserType> {
    return (await this.tollService.toll(gateAdmin.tollId)) as any;
  }
}
