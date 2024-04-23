import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TollDistanceService } from './toll-distance.service';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { TollDistanceListInput } from './input/toll-distance-list.input.gql';
import { TollDistanceListResult } from './result/toll-distance-list.result.gql';
import { TollDistanceType } from './graphql/toll-distance.gql';
import { TollService } from 'src/toll/toll.service';
import { TollType } from 'src/toll/graphql/toll.gql';
import { TollDistanceInput } from './input/toll-distance.input.gql';

@Resolver(() => TollDistanceType)
export class TollDistanceResolver {
  public constructor(
    private readonly tollDistanceService: TollDistanceService,
    private readonly tollService: TollService,
  ) {}

  @Query(() => TollDistanceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async tollDistanceList(
    @Args('tollDistanceListInput')
    tollDistanceListInput: TollDistanceListInput,
  ) {
    return await this.tollDistanceService.tollDistanceList(
      tollDistanceListInput,
    );
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async generateTollDistances(
    @Args('generateTollDistancesInput')
    generateTollDistancesInput: IdInput,
  ) {
    return await this.tollDistanceService.generateTollDistances(
      generateTollDistancesInput,
    );
  }

  @Query(() => Number)
  @UseGuards(AuthGuard)
  public async tollDistance(
    @Args('tollDistanceInput')
    tollDistanceInput: TollDistanceInput,
  ) {
    return await this.tollDistanceService.tollDistance(tollDistanceInput);
  }

  @ResolveField(() => TollType)
  public async fromToll(@Parent() tollDistance: TollDistanceType) {
    return await this.tollService.tollById({ id: tollDistance.fromTollId });
  }

  @ResolveField(() => TollType)
  public async toToll(@Parent() tollDistance: TollDistanceType) {
    return await this.tollService.tollById({ id: tollDistance.toTollId });
  }
}
