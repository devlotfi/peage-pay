import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddPriceService } from './add-price.service';
import { AddGlobalPriceInput } from './input/add-global-price.input.gql';
import { UseGuards } from '@nestjs/common';
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { ContextAccessTokenPayload } from 'src/shared/decorators/context-access-token-payload.decorator';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { DeletePriceService } from './delete-price.service';
import { DailyPriceListResult } from './result/daily-price-list.result.gql';
import { GlobalPriceListService } from './global-price-list.service';
import { LocalPriceListService } from './local-price-list.service';
import { WeeklyPriceListResult } from './result/weekly-price-list.result.gql';
import { MonthlyPriceListResult } from './result/monthly-price-list.result.gql';
import { YearlyPriceListResult } from './result/yearly-price-list.result.gql';
import { CustomPriceListResult } from './result/custom-price-list.result.gql';
import { PaginationInput } from 'src/shared/graphql/pagination-input.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { AddLocalPriceInput } from './input/add-local-price.input.gql';
import { DefaultPriceService } from './default-price.service';
import { EditDefaultPriceInput } from './input/edit-default-price.input.gql';

@Resolver()
export class PriceResolver {
  public constructor(
    private readonly addPriceService: AddPriceService,
    private readonly deletePriceService: DeletePriceService,
    private readonly globalPriceListService: GlobalPriceListService,
    private readonly localPriceListService: LocalPriceListService,
    private readonly defaultPriceService: DefaultPriceService,
  ) {}

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async editDefaultPrice(
    @Args('editDefaultPriceInput') editDefaultPriceInput: EditDefaultPriceInput,
  ) {
    return await this.defaultPriceService.editDefaultPrice(
      editDefaultPriceInput,
    );
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addGlobalPrice(
    @Args('addPriceInput') addPriceInput: AddGlobalPriceInput,
  ) {
    return await this.addPriceService.addGlobalPrice(addPriceInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.TOLL_ADMIN])
  @UseGuards(AuthGuard)
  public async addLocalPrice(
    @Args('addPriceInput') addPriceInput: AddLocalPriceInput,
    @ContextAccessTokenPayload() accessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.addPriceService.addLocalPrice(
      addPriceInput,
      accessTokenPayload,
    );
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteGlobalPrice(
    @Args('deletePriceInput') deletePriceInput: IdInput,
  ) {
    return await this.deletePriceService.deleteGlobalPrice(deletePriceInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.TOLL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteLocalPrice(
    @Args('deletePriceInput') deletePriceInput: IdInput,
    @ContextAccessTokenPayload() accessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.deletePriceService.deleteLocalPrice(
      deletePriceInput,
      accessTokenPayload,
    );
  }

  @Query(() => DailyPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async dailyPriceGlobalList(
    @Args('priceListInput') priceListInput: PaginationInput,
  ) {
    return await this.globalPriceListService.dailyPriceGlobalList(
      priceListInput,
    );
  }

  @Query(() => WeeklyPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async weeklyPriceGlobalList(
    @Args('priceListInput') priceListInput: PaginationInput,
  ) {
    return await this.globalPriceListService.weeklyPriceGlobalList(
      priceListInput,
    );
  }

  @Query(() => MonthlyPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async monthlyPriceGlobalList(
    @Args('priceListInput') priceListInput: PaginationInput,
  ) {
    return await this.globalPriceListService.monthlyPriceGlobalList(
      priceListInput,
    );
  }

  @Query(() => YearlyPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async yearlyPriceGlobalList(
    @Args('priceListInput') priceListInput: PaginationInput,
  ) {
    return await this.globalPriceListService.yearlyPriceGlobalList(
      priceListInput,
    );
  }

  @Query(() => CustomPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async customPriceGlobalList(
    @Args('priceListInput') priceListInput: PaginationInput,
  ) {
    return await this.globalPriceListService.customPriceGlobalList(
      priceListInput,
    );
  }

  @Query(() => DailyPriceListResult)
  @AllowRoles([BaseUserRolesType.TOLL_ADMIN])
  @UseGuards(AuthGuard)
  public async dailyPriceLocalList(
    @Args('priceListInput') priceListInput: PaginationInput,
    @ContextAccessTokenPayload() accessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.localPriceListService.dailyPriceLocalList(
      priceListInput,
      accessTokenPayload,
    );
  }

  @Query(() => WeeklyPriceListResult)
  @AllowRoles([BaseUserRolesType.TOLL_ADMIN])
  @UseGuards(AuthGuard)
  public async weeklyPriceLocalList(
    @Args('priceListInput') priceListInput: PaginationInput,
    @ContextAccessTokenPayload() accessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.localPriceListService.weeklyPriceLocalList(
      priceListInput,
      accessTokenPayload,
    );
  }

  @Query(() => MonthlyPriceListResult)
  @AllowRoles([BaseUserRolesType.TOLL_ADMIN])
  @UseGuards(AuthGuard)
  public async monthlyPriceLocalList(
    @Args('priceListInput') priceListInput: PaginationInput,
    @ContextAccessTokenPayload() accessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.localPriceListService.monthlyPriceLocalList(
      priceListInput,
      accessTokenPayload,
    );
  }

  @Query(() => YearlyPriceListResult)
  @AllowRoles([BaseUserRolesType.TOLL_ADMIN])
  @UseGuards(AuthGuard)
  public async yearlyPriceLocalList(
    @Args('priceListInput') priceListInput: PaginationInput,
    @ContextAccessTokenPayload() accessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.localPriceListService.yearlyPriceLocalList(
      priceListInput,
      accessTokenPayload,
    );
  }

  @Query(() => CustomPriceListResult)
  @AllowRoles([BaseUserRolesType.TOLL_ADMIN])
  @UseGuards(AuthGuard)
  public async customPriceLocalList(
    @Args('priceListInput') priceListInput: PaginationInput,
    @ContextAccessTokenPayload() accessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.localPriceListService.customPriceLocalList(
      priceListInput,
      accessTokenPayload,
    );
  }
}
