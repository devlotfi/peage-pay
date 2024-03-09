import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AdjacentTollDistanceService } from './adjacent-toll-distance.service';
import { UseGuards } from '@nestjs/common';
import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.gql';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AdjacentTollDistanceType } from './graphql/adjacent-toll-distance.gql';
import { AdjacentTollDistanceListInput } from './input/toll-distance-list.input.gql';
import { TollType } from 'src/toll/graphql/toll.gql';
import { AddAdjacentTollDistanceInput } from './input/add-adjacent-toll-distance.input.gql';
import { DeleteAdjacentTollDistanceInput } from './input/delete-adjacent-toll-distance.input.gql';

@Resolver(() => AdjacentTollDistanceType)
export class AdjacentTollDistanceResolver {
  public constructor(
    private readonly adjacentTollDistanceService: AdjacentTollDistanceService,
  ) {}

  @Query(() => [AdjacentTollDistanceType])
  @UseGuards(AuthGuard)
  public async adjacentTollDistanceList(
    @Args('adjacentTollDistanceListInput')
    adjacentTollDistanceListInput: AdjacentTollDistanceListInput,
  ): Promise<AdjacentTollDistanceType[]> {
    return (await this.adjacentTollDistanceService.adjacentTollDistanceList(
      adjacentTollDistanceListInput,
    )) as any;
  }

  @Mutation(() => AdjacentTollDistanceType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addAdjacentTollDistance(
    @Args('addAdjacentTollDistanceInput')
    addAdjacentTollDistanceInput: AddAdjacentTollDistanceInput,
  ): Promise<AdjacentTollDistanceType> {
    return (await this.adjacentTollDistanceService.addAdjacentTollDistance(
      addAdjacentTollDistanceInput,
    )) as any;
  }

  @Mutation(() => AdjacentTollDistanceType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteAdjacentTollDistance(
    @Args('deleteAdjacentTollDistanceInput')
    deleteAdjacentTollDistanceInput: DeleteAdjacentTollDistanceInput,
  ): Promise<AdjacentTollDistanceType> {
    return (await this.adjacentTollDistanceService.deleteAdjacentTollDistance(
      deleteAdjacentTollDistanceInput,
    )) as any;
  }

  @ResolveField(() => TollType)
  public async fromToll(
    @Parent() tollDistance: AdjacentTollDistanceType,
  ): Promise<TollType> {
    return (await this.adjacentTollDistanceService.toll(
      tollDistance.fromTollId,
    )) as any;
  }

  @ResolveField(() => TollType)
  public async toToll(
    @Parent() tollDistance: AdjacentTollDistanceType,
  ): Promise<TollType> {
    return (await this.adjacentTollDistanceService.toll(
      tollDistance.toTollId,
    )) as any;
  }
}
