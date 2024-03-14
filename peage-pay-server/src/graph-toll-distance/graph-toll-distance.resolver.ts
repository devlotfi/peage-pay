import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GraphTollDistanceService } from './graph-toll-distance.service';
import { UseGuards } from '@nestjs/common';
import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.gql';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { GraphTollDistanceType } from './graphql/graph-toll-distance.gql';
import { GraphTollDistanceListForTollInput } from './input/graph-toll-distance-list.input.gql';
import { TollType } from 'src/toll/graphql/toll.gql';
import { AddGraphTollDistanceInput } from './input/add-graph-toll-distance.input.gql';
import { DeleteGraphTollDistanceInput } from './input/delete-graph-toll-distance.input.gql';

@Resolver(() => GraphTollDistanceType)
export class GraphTollDistanceResolver {
  public constructor(
    private readonly graphTollDistanceService: GraphTollDistanceService,
  ) {}

  @Query(() => [GraphTollDistanceType])
  @UseGuards(AuthGuard)
  public async graphTollDistanceListForToll(
    @Args('graphTollDistanceListForTollInput')
    graphTollDistanceListForTollInput: GraphTollDistanceListForTollInput,
  ): Promise<GraphTollDistanceType[]> {
    return (await this.graphTollDistanceService.graphTollDistanceListForToll(
      graphTollDistanceListForTollInput,
    )) as any;
  }

  @Mutation(() => GraphTollDistanceType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addGraphTollDistance(
    @Args('addGraphTollDistanceInput')
    addGraphTollDistanceInput: AddGraphTollDistanceInput,
  ): Promise<GraphTollDistanceType> {
    return (await this.graphTollDistanceService.addGraphTollDistance(
      addGraphTollDistanceInput,
    )) as any;
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteGraphTollDistance(
    @Args('deleteGraphTollDistanceInput')
    deleteGraphTollDistanceInput: DeleteGraphTollDistanceInput,
  ): Promise<boolean> {
    return (await this.graphTollDistanceService.deleteGraphTollDistance(
      deleteGraphTollDistanceInput,
    )) as any;
  }

  @ResolveField(() => TollType)
  public async fromToll(
    @Parent() tollDistance: GraphTollDistanceType,
  ): Promise<TollType> {
    return (await this.graphTollDistanceService.toll(
      tollDistance.fromTollId,
    )) as any;
  }

  @ResolveField(() => TollType)
  public async toToll(
    @Parent() tollDistance: GraphTollDistanceType,
  ): Promise<TollType> {
    return (await this.graphTollDistanceService.toll(
      tollDistance.toTollId,
    )) as any;
  }
}
