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
import { BaseUserService } from './base-user.service';
import { BaseUserType } from './graphql/base-user.gql';
import { TollAdminListResult } from './result/toll-admin-list.result.gql';
import { TollAdminListInput } from './input/toll-admin-list.input.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { TollType } from 'src/toll/graphql/toll.gql';
import { TollService } from 'src/toll/toll.service';

@Resolver(() => TollAdminType)
export class TollAdminResolver {
  public constructor(
    private readonly tollAdminService: TollAdminService,
    private readonly baseUserService: BaseUserService,
    private readonly tollService: TollService,
  ) {}

  @Query(() => TollAdminListResult)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async tollAdminList(
    @Args('tollAdminListInput') tollAdminListInput: TollAdminListInput,
  ) {
    return await this.tollAdminService.tollAdminList(tollAdminListInput);
  }

  @Query(() => TollAdminType, { nullable: true })
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async tollAdminById(
    @Args('tollAdminByIdInput') tollAdminByIdInput: IdInput,
  ) {
    return await this.tollAdminService.tollAdminById(tollAdminByIdInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async addTollAdminRole(
    @Args('addTollAdminRoleInput') addTollAdminRoleInput: IdInput,
  ) {
    return await this.tollAdminService.addTollAdminRole(addTollAdminRoleInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async removeTollAdminRole(
    @Args('removeTollAdminRoleInput') removeTollAdminRoleInput: IdInput,
  ) {
    return await this.tollAdminService.removeTollAdminRole(
      removeTollAdminRoleInput,
    );
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async changeTollAdminToll(
    @Args('changeTollAdminTollInput') changeTollAdminTollInput: ChangeTollInput,
  ) {
    return await this.tollAdminService.changeTollAdminToll(
      changeTollAdminTollInput,
    );
  }

  @ResolveField(() => BaseUserType)
  public async baseUser(@Parent() tollAdmin: TollAdminType) {
    return await this.baseUserService.baseUser(tollAdmin.baseUserId);
  }

  @ResolveField(() => TollType)
  public async toll(@Parent() tollAdmin: TollAdminType) {
    if (tollAdmin.tollId) {
      return await this.tollService.tollById({ id: tollAdmin.tollId });
    }
  }
}
