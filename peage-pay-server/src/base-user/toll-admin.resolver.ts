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

  @Query(() => TollAdminType, { nullable: true })
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async tollAdminById(
    @Args('tollAdminByIdInput') tollAdminByIdInput: IdInput,
  ): Promise<TollAdminType | null> {
    return (await this.tollAdminService.tollAdminById(
      tollAdminByIdInput,
    )) as any;
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async addTollAdminRole(
    @Args('addTollAdminRoleInput') addTollAdminRoleInput: IdInput,
  ): Promise<boolean> {
    return await this.tollAdminService.addTollAdminRole(addTollAdminRoleInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async removeTollAdminRole(
    @Args('removeTollAdminRoleInput') removeTollAdminRoleInput: IdInput,
  ): Promise<boolean> {
    return await this.tollAdminService.removeTollAdminRole(
      removeTollAdminRoleInput,
    );
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async changeTollAdminToll(
    @Args('changeTollAdminTollInput') changeTollAdminTollInput: ChangeTollInput,
  ): Promise<boolean> {
    return await this.tollAdminService.changeTollAdminToll(
      changeTollAdminTollInput,
    );
  }

  @ResolveField(() => BaseUserType)
  public async baseUser(
    @Parent() gateAdmin: TollAdminType,
  ): Promise<BaseUserType> {
    return (await this.baseUserService.baseUser(gateAdmin.baseUserId)) as any;
  }
}
