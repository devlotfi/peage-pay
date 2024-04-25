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
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { TollListInput } from './input/toll-list.input.gql';
import { AddTollInput } from './input/add-toll.input.gql';
import { EditTollInput } from './input/edit-toll.input.gql';
import { TollNetworkType } from 'src/toll-network/graphql/toll-network.gql';
import { TollListResult } from './result/toll-list.result.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { WilayaService } from 'src/wilaya/wilaya.service';
import { HighwayService } from 'src/highway/highway.service';
import { TollNetworkService } from 'src/toll-network/toll-network.service';
import { TollPriceService } from './toll-price.service';
import { ChangeTollStatusInput } from './input/change-toll-status.input.gql';
import { TollPriceInput } from './input/toll-price.input.gql';

@Resolver(() => TollType)
export class TollResolver {
  public constructor(
    private readonly tollService: TollService,
    private readonly tollPriceService: TollPriceService,
    private readonly wilayaService: WilayaService,
    private readonly highwayService: HighwayService,
    private readonly tollNetworkService: TollNetworkService,
  ) {}

  @Query(() => Number)
  //@UseGuards(AuthGuard)
  public async tollPrice(
    @Args('tollPriceInput') tollPriceInput: TollPriceInput,
  ) {
    return await this.tollPriceService.tollPrice(tollPriceInput);
  }

  @Query(() => [TollType])
  @UseGuards(AuthGuard)
  public async fullTollList(
    @Args('fullTollListInput') fullTollListInput: IdInput,
  ) {
    return await this.tollService.fullTollList(fullTollListInput);
  }

  @Query(() => TollListResult)
  public async tollList(@Args('tollListInput') tollListInput: TollListInput) {
    return await this.tollService.tollList(tollListInput);
  }

  @Query(() => TollType)
  @UseGuards(AuthGuard)
  public async tollById(@Args('tollByIdInput') tollByIdInput: IdInput) {
    return await this.tollService.tollById(tollByIdInput);
  }

  @Mutation(() => TollType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addToll(@Args('addTollInput') addTollInput: AddTollInput) {
    return await this.tollService.addToll(addTollInput);
  }

  @Mutation(() => TollType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async editToll(@Args('editTollInput') editTollInput: EditTollInput) {
    return await this.tollService.editToll(editTollInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.TOLL_ADMIN])
  @UseGuards(AuthGuard)
  public async changeTollStatus(
    @Args('changeTollStatusInput') changeTollStatusInput: ChangeTollStatusInput,
  ) {
    return await this.tollService.changeTollStatus(changeTollStatusInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteToll(@Args('deleteTollInput') deleteTollInput: IdInput) {
    return await this.tollService.deleteToll(deleteTollInput);
  }

  @ResolveField(() => WilayaType)
  public async wilaya(@Parent() toll: TollType) {
    return await this.wilayaService.wilayaById({ id: toll.wilayaId });
  }

  @ResolveField(() => HighwayType)
  public async highway(@Parent() toll: TollType) {
    return await this.highwayService.highwayById({ id: toll.highwayId });
  }

  @ResolveField(() => TollNetworkType)
  public async tollNetwork(@Parent() toll: TollType) {
    return await this.tollNetworkService.tollNetworkById({
      id: toll.tollNetworkId,
    });
  }
}
