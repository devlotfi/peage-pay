import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { DailyPriceListResult } from './result/daily-price-list.result.gql';
import { PriceListInput } from './input/price-list.input.gql';
import { WeeklyPriceListResult } from './result/weekly-price-list.result.gql';
import { MonthlyPriceListResult } from './result/monthly-price-list.result.gql';
import { YearlyPriceListResult } from './result/yearly-price-list.result.gql';
import { CustomPriceListResult } from './result/custom-price-list.result.gql';

@Injectable()
export class GlobalPriceListService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async dailyPriceGlobalList(
    priceListInput: PriceListInput,
  ): Promise<DailyPriceListResult> {
    const list = await this.databaseService.dailyPrice.findMany({
      where: {
        price: {
          tollId: null,
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

  public async weeklyPriceGlobalList(
    priceListInput: PriceListInput,
  ): Promise<WeeklyPriceListResult> {
    const list = await this.databaseService.weeklyPrice.findMany({
      where: {
        price: {
          tollId: null,
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

  public async monthlyPriceGlobalList(
    priceListInput: PriceListInput,
  ): Promise<MonthlyPriceListResult> {
    const list = await this.databaseService.monthlyPrice.findMany({
      where: {
        price: {
          tollId: null,
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

  public async yearlyPriceGlobalList(
    priceListInput: PriceListInput,
  ): Promise<YearlyPriceListResult> {
    const list = await this.databaseService.yearlyPrice.findMany({
      where: {
        price: {
          tollId: null,
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

  public async customPriceGlobalList(
    priceListInput: PriceListInput,
  ): Promise<CustomPriceListResult> {
    const list = await this.databaseService.customPrice.findMany({
      where: {
        price: {
          tollId: null,
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
