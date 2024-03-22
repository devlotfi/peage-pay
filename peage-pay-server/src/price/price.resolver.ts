import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddPriceService } from './add-price.service';
import { AddPriceInput } from './input/add/add-price.input.gql';
import { UseGuards } from '@nestjs/common';
import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.gql';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { ContextAccessTokenPayload } from 'src/shared/decorators/context-access-token-payload.decorator';
import { AccessTokenPayload } from 'src/auth/types/access-token-payload.type';
import { DeletePriceInput } from './input/delete-price.input.gql';
import { DeletePriceService } from './delete-price.service';
import { DailyPriceListResult } from './result/daily-price-list.result.gql';
import { PriceListInput } from './input/price-list.input.gql';
import { GlobalPriceListService } from './global-price-list.service';
import { LocalPriceListService } from './local-price-list.service';
import { WeeklyPriceListResult } from './result/weekly-price-list.result.gql';
import { MonthlyPriceListResult } from './result/monthly-price-list.result.gql';
import { YearlyPriceListResult } from './result/yearly-price-list.result.gql';
import { CustomPriceListResult } from './result/custom-price-list.result.gql';

@Resolver()
export class PriceResolver {
  public constructor(
    private readonly addPriceService: AddPriceService,
    private readonly deletePriceService: DeletePriceService,
    private readonly globalPriceListService: GlobalPriceListService,
    private readonly localPriceListService: LocalPriceListService,
  ) {}

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addGlobalPrice(
    @Args('addPriceInput') addPriceInput: AddPriceInput,
  ): Promise<boolean> {
    return await this.addPriceService.addGlobalPrice(addPriceInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.TOLL_ADMIN])
  @UseGuards(AuthGuard)
  public async addLocalPrice(
    @Args('addPriceInput') addPriceInput: AddPriceInput,
    @ContextAccessTokenPayload() accessTokenPayload: AccessTokenPayload,
  ): Promise<boolean> {
    return await this.addPriceService.addLocalPrice(
      addPriceInput,
      accessTokenPayload,
    );
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteGlobalPrice(
    @Args('deletePriceInput') deletePriceInput: DeletePriceInput,
  ): Promise<boolean> {
    return await this.deletePriceService.deleteGlobalPrice(deletePriceInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.TOLL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteLocalPrice(
    @Args('deletePriceInput') deletePriceInput: DeletePriceInput,
    @ContextAccessTokenPayload() accessTokenPayload: AccessTokenPayload,
  ): Promise<boolean> {
    return await this.deletePriceService.deleteLocalPrice(
      deletePriceInput,
      accessTokenPayload,
    );
  }

  @Query(() => DailyPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async dailyPriceGlobalList(
    @Args('priceListInput') priceListInput: PriceListInput,
  ): Promise<DailyPriceListResult> {
    return await this.globalPriceListService.dailyPriceGlobalList(
      priceListInput,
    );
  }

  @Query(() => WeeklyPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async weeklyPriceGlobalList(
    @Args('priceListInput') priceListInput: PriceListInput,
  ): Promise<WeeklyPriceListResult> {
    return await this.globalPriceListService.weeklyPriceGlobalList(
      priceListInput,
    );
  }

  @Query(() => MonthlyPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async monthlyPriceGlobalList(
    @Args('priceListInput') priceListInput: PriceListInput,
  ): Promise<MonthlyPriceListResult> {
    return await this.globalPriceListService.monthlyPriceGlobalList(
      priceListInput,
    );
  }

  @Query(() => YearlyPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async yearlyPriceGlobalList(
    @Args('priceListInput') priceListInput: PriceListInput,
  ): Promise<YearlyPriceListResult> {
    return await this.globalPriceListService.yearlyPriceGlobalList(
      priceListInput,
    );
  }

  @Query(() => CustomPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async customPriceGlobalList(
    @Args('priceListInput') priceListInput: PriceListInput,
  ): Promise<CustomPriceListResult> {
    return await this.globalPriceListService.customPriceGlobalList(
      priceListInput,
    );
  }

  @Query(() => DailyPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async dailyPriceLocalList(
    @Args('priceListInput') priceListInput: PriceListInput,
    @ContextAccessTokenPayload() accessTokenPayload: AccessTokenPayload,
  ): Promise<DailyPriceListResult> {
    return await this.localPriceListService.dailyPriceLocalList(
      priceListInput,
      accessTokenPayload,
    );
  }

  @Query(() => WeeklyPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async weeklyPriceLocalList(
    @Args('priceListInput') priceListInput: PriceListInput,
    @ContextAccessTokenPayload() accessTokenPayload: AccessTokenPayload,
  ): Promise<WeeklyPriceListResult> {
    return await this.localPriceListService.weeklyPriceLocalList(
      priceListInput,
      accessTokenPayload,
    );
  }

  @Query(() => MonthlyPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async monthlyPriceLocalList(
    @Args('priceListInput') priceListInput: PriceListInput,
    @ContextAccessTokenPayload() accessTokenPayload: AccessTokenPayload,
  ): Promise<MonthlyPriceListResult> {
    return await this.localPriceListService.monthlyPriceLocalList(
      priceListInput,
      accessTokenPayload,
    );
  }

  @Query(() => YearlyPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async yearlyPriceLocalList(
    @Args('priceListInput') priceListInput: PriceListInput,
    @ContextAccessTokenPayload() accessTokenPayload: AccessTokenPayload,
  ): Promise<YearlyPriceListResult> {
    return await this.localPriceListService.yearlyPriceLocalList(
      priceListInput,
      accessTokenPayload,
    );
  }

  @Query(() => CustomPriceListResult)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async customPriceLocalList(
    @Args('priceListInput') priceListInput: PriceListInput,
    @ContextAccessTokenPayload() accessTokenPayload: AccessTokenPayload,
  ): Promise<CustomPriceListResult> {
    return await this.localPriceListService.customPriceLocalList(
      priceListInput,
      accessTokenPayload,
    );
  }
}
