import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TollType } from './graphql/toll.gql';
import { WilayaType } from 'src/wilaya/graphql/wilaya.gql';
import { TollService } from './toll.service';
import { HighwayType } from 'src/highway/graphql/highway.gql';
import { UseGuards } from '@nestjs/common';
import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.gql';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { TollListInput } from './input/toll-list.input.gql';
import { AddTollInput } from './input/add-toll.input.gql';
import { EditTollInput } from './input/edit-toll.input.gql';
import { DeleteTollInput } from './input/delete-toll.input.gql';
import { TollNetworkType } from 'src/toll-network/graphql/toll-network.gql';
import { TollByIdInput } from './input/toll-by-id.input.gql';
import { FullTollListInput } from './input/full-toll-list.input.gql';
import { TollListResult } from './result/toll-list.result.gql';

@Resolver(() => TollType)
export class TollResolver {
  public constructor(private readonly tollService: TollService) {}

  @Query(() => [TollType])
  @UseGuards(AuthGuard)
  public async fullTollList(
    @Args('fullTollListInput') fullTollListInput: FullTollListInput,
  ): Promise<TollType[]> {
    return (await this.tollService.fullTollList(fullTollListInput)) as any;
  }

  @Query(() => TollListResult)
  @UseGuards(AuthGuard)
  public async tollList(
    @Args('tollListInput') tollListInput: TollListInput,
  ): Promise<TollListResult> {
    return await this.tollService.tollList(tollListInput);
  }

  @Query(() => TollType)
  @UseGuards(AuthGuard)
  public async tollById(
    @Args('tollByIdInput') tollByIdInput: TollByIdInput,
  ): Promise<TollType[]> {
    return (await this.tollService.tollById(tollByIdInput)) as any;
  }

  @Mutation(() => TollType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addToll(
    @Args('addTollInput') addTollInput: AddTollInput,
  ): Promise<TollType> {
    return (await this.tollService.addToll(addTollInput)) as any;
  }

  @Mutation(() => TollType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async editToll(
    @Args('editTollInput') editTollInput: EditTollInput,
  ): Promise<TollType> {
    return (await this.tollService.editToll(editTollInput)) as any;
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteToll(
    @Args('deleteTollInput') deleteTollInput: DeleteTollInput,
  ): Promise<boolean> {
    return await this.tollService.deleteToll(deleteTollInput);
  }

  @ResolveField(() => WilayaType)
  public async wilaya(@Parent() toll: TollType): Promise<WilayaType> {
    return (await this.tollService.wilaya(toll.wilayaId))!;
  }

  @ResolveField(() => HighwayType)
  public async highway(@Parent() toll: TollType): Promise<HighwayType> {
    return (await this.tollService.highway(toll.highwayId))!;
  }

  @ResolveField(() => TollNetworkType)
  public async tollNetwork(@Parent() toll: TollType): Promise<TollNetworkType> {
    return (await this.tollService.tollNetwork(toll.tollNetworkId))!;
  }
}
