import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { DailyPriceListResult } from './result/daily-price-list.result.gql';
import { PriceListInput } from './input/price-list.input.gql';
import { WeeklyPriceListResult } from './result/weekly-price-list.result.gql';
import { MonthlyPriceListResult } from './result/monthly-price-list.result.gql';
import { YearlyPriceListResult } from './result/yearly-price-list.result.gql';
import { CustomPriceListResult } from './result/custom-price-list.result.gql';
import { AccessTokenPayload } from 'src/auth/types/access-token-payload.type';
import { TollAdminService } from './toll-admin.service';

@Injectable()
export class LocalPriceListService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly tollAdminService: TollAdminService,
  ) {}

  public async dailyPriceLocalList(
    priceListInput: PriceListInput,
    accessTokenPayload: AccessTokenPayload,
  ): Promise<DailyPriceListResult> {
    const tollAdminData =
      await this.tollAdminService.getTollAdminData(accessTokenPayload);
    const list = await this.databaseService.dailyPrice.findMany({
      where: {
        price: {
          tollId: tollAdminData.tollAdmin?.toll?.id,
        },
      },
      include: {
        price: true,
      },
      take: priceListInput.take,
      skip: priceListInput.skip,
    });
    const count = await this.databaseService.dailyPrice.count();
    return {
      count,
      list: list as any,
    };
  }

  public async weeklyPriceLocalList(
    priceListInput: PriceListInput,
    accessTokenPayload: AccessTokenPayload,
  ): Promise<WeeklyPriceListResult> {
    const tollAdminData =
      await this.tollAdminService.getTollAdminData(accessTokenPayload);
    const list = await this.databaseService.weeklyPrice.findMany({
      where: {
        price: {
          tollId: tollAdminData.tollAdmin?.toll?.id,
        },
      },
      include: {
        price: true,
      },
      take: priceListInput.take,
      skip: priceListInput.skip,
    });
    const count = await this.databaseService.weeklyPrice.count();
    return {
      count,
      list: list as any,
    };
  }

  public async monthlyPriceLocalList(
    priceListInput: PriceListInput,
    accessTokenPayload: AccessTokenPayload,
  ): Promise<MonthlyPriceListResult> {
    const tollAdminData =
      await this.tollAdminService.getTollAdminData(accessTokenPayload);
    const list = await this.databaseService.monthlyPrice.findMany({
      where: {
        price: {
          tollId: tollAdminData.tollAdmin?.toll?.id,
        },
      },
      include: {
        price: true,
      },
      take: priceListInput.take,
      skip: priceListInput.skip,
    });
    const count = await this.databaseService.monthlyPrice.count();
    return {
      count,
      list: list as any,
    };
  }

  public async yearlyPriceLocalList(
    priceListInput: PriceListInput,
    accessTokenPayload: AccessTokenPayload,
  ): Promise<YearlyPriceListResult> {
    const tollAdminData =
      await this.tollAdminService.getTollAdminData(accessTokenPayload);
    const list = await this.databaseService.yearlyPrice.findMany({
      where: {
        price: {
          tollId: tollAdminData.tollAdmin?.toll?.id,
        },
      },
      include: {
        price: true,
      },
      take: priceListInput.take,
      skip: priceListInput.skip,
    });
    const count = await this.databaseService.yearlyPrice.count();
    return {
      count,
      list: list as any,
    };
  }

  public async customPriceLocalList(
    priceListInput: PriceListInput,
    accessTokenPayload: AccessTokenPayload,
  ): Promise<CustomPriceListResult> {
    const tollAdminData =
      await this.tollAdminService.getTollAdminData(accessTokenPayload);
    const list = await this.databaseService.customPrice.findMany({
      where: {
        price: {
          tollId: tollAdminData.tollAdmin?.toll?.id,
        },
      },
      include: {
        price: true,
      },
      take: priceListInput.take,
      skip: priceListInput.skip,
    });
    const count = await this.databaseService.customPrice.count();
    return {
      count,
      list: list as any,
    };
  }
}
