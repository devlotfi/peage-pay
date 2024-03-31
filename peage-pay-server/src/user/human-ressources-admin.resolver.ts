import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { BaseUserRolesType } from './graphql/base-user-roles.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { TollAdminType } from './graphql/toll-admin.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { HumanRessourcesAdminService } from './human-ressources-admin.service';

@Resolver(() => TollAdminType)
export class HumanRessourcesAdminResolver {
  public constructor(
    private readonly humanRessourcesAdminService: HumanRessourcesAdminService,
  ) {}

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addHumanRessoucesAdminRole(
    @Args('addHumanRessoucesAdminRoleInput')
    changeRoleInput: IdInput,
  ) {
    return await this.humanRessourcesAdminService.addHumanRessoucesAdminRole(
      changeRoleInput,
    );
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async removeHumanRessoucesAdminRole(
    @Args('removeHumanRessoucesAdminRoleInput')
    changeRoleInput: IdInput,
  ) {
    return await this.humanRessourcesAdminService.removeHumanRessoucesAdminRole(
      changeRoleInput,
    );
  }
}
