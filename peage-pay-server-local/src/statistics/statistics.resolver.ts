import { Query, Resolver } from '@nestjs/graphql';
import { StatisticsService } from './statistics.service';
import { GeneralAdminStatistics } from './graphql/general-admin-statistics.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';
import { ContextAccessTokenPayload } from 'src/shared/decorators/context-access-token-payload.decorator';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { HumanRessourcesAdminStatistics } from './graphql/human-ressources-admin-statistics.gql';
import { TollAdminStatistics } from './graphql/toll-admin-statistics.gql';
import { ModeratorStatistics } from './graphql/moderator-statistics.gql';

@Resolver()
export class StatisticsResolver {
  public constructor(private readonly statisticsService: StatisticsService) {}

  @Query(() => GeneralAdminStatistics)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async generalAdminStatistics() {
    return await this.statisticsService.generalAdminStatistics();
  }

  @Query(() => HumanRessourcesAdminStatistics)
  @AllowRoles([BaseUserRolesType.HUMAN_RESSOURCES_ADMIN])
  @UseGuards(AuthGuard)
  public async humanRessourcesAdminStatistics() {
    return await this.statisticsService.humanRessourcesAdminStatistics();
  }

  @Query(() => TollAdminStatistics)
  @AllowRoles([BaseUserRolesType.TOLL_ADMIN])
  @UseGuards(AuthGuard)
  public async tollAdminStatistics(
    @ContextAccessTokenPayload() userAccessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.statisticsService.tollAdminStatistics(
      userAccessTokenPayload,
    );
  }

  @Query(() => ModeratorStatistics)
  @AllowRoles([BaseUserRolesType.MODERATOR])
  @UseGuards(AuthGuard)
  public async moderatorStatistics() {
    return await this.statisticsService.moderatorStatistics();
  }
}
