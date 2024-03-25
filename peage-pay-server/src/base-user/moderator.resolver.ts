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
import { ModeratorType } from './graphql/moderator.gql';
import { BaseUserType } from './graphql/base-user.gql';
import { ModeratorService } from './moderator.service';
import { BaseUserService } from './base-user.service';
import { ModeratorListResult } from './result/moderator-list.result.gql';
import { ModeratorListInput } from './input/moderator-list.input.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';

@Resolver(() => ModeratorType)
export class ModeratorResolver {
  public constructor(
    private readonly moderatorService: ModeratorService,
    private readonly baseUserService: BaseUserService,
  ) {}

  @Query(() => ModeratorListResult)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async moderatorList(
    @Args('moderatorListInput') moderatorListInput: ModeratorListInput,
  ): Promise<ModeratorListResult> {
    console.log(await this.moderatorService.moderatorList(moderatorListInput));

    return await this.moderatorService.moderatorList(moderatorListInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async addModeratorRole(
    @Args('addModeratorRoleInput') addModeratorRoleInput: IdInput,
  ): Promise<boolean> {
    return await this.moderatorService.addModeratorRole(addModeratorRoleInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async removeModeratorRole(
    @Args('removeModeratorRoleInput') removeModeratorRoleInput: IdInput,
  ): Promise<boolean> {
    return await this.moderatorService.removeModeratorRole(
      removeModeratorRoleInput,
    );
  }

  @ResolveField(() => BaseUserType)
  public async baseUser(
    @Parent() moderator: ModeratorType,
  ): Promise<BaseUserType> {
    return (await this.baseUserService.baseUser(moderator.baseUserId)) as any;
  }
}
