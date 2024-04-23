import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { DailyPriceListResult } from './result/daily-price-list.result.gql';
import { WeeklyPriceListResult } from './result/weekly-price-list.result.gql';
import { MonthlyPriceListResult } from './result/monthly-price-list.result.gql';
import { YearlyPriceListResult } from './result/yearly-price-list.result.gql';
import { CustomPriceListResult } from './result/custom-price-list.result.gql';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { PaginationInput } from 'src/shared/graphql/pagination-input.gql';
import { TollAdminService } from 'src/user/toll-admin.service';

@Injectable()
export class LocalPriceListService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly tollAdminService: TollAdminService,
  ) {}

  public async dailyPriceLocalList(
    priceListInput: PaginationInput,
    accessTokenPayload: UserAccessTokenPayload,
  ): Promise<DailyPriceListResult> {
    const tollAdminData =
      (await this.tollAdminService.tollAdminInfo(accessTokenPayload))!;
    const list = await this.databaseService.dailyPrice.findMany({
      where: {
        price: {
          tollPrice: {
            tollId: tollAdminData.tollId!,
          },
        },
      },
      include: {
        price: true,
      },
      take: priceListInput.take,
      skip: priceListInput.skip,
    });
    const count = await this.databaseService.dailyPrice.count({
      where: {
        price: {
          tollPrice: {
            tollId: tollAdminData.tollId!,
          },
        },
      },
    });
    return {
      count,
      list: list as any,
    };
  }

  public async weeklyPriceLocalList(
    priceListInput: PaginationInput,
    accessTokenPayload: UserAccessTokenPayload,
  ): Promise<WeeklyPriceListResult> {
    const tollAdminData =
      (await this.tollAdminService.tollAdminInfo(accessTokenPayload))!;
    const list = await this.databaseService.weeklyPrice.findMany({
      where: {
        price: {
          tollPrice: {
            tollId: tollAdminData.tollId!,
          },
        },
      },
      include: {
        price: true,
      },
      take: priceListInput.take,
      skip: priceListInput.skip,
    });
    const count = await this.databaseService.weeklyPrice.count({
      where: {
        price: {
          tollPrice: {
            tollId: tollAdminData.tollId!,
          },
        },
      },
    });
    return {
      count,
      list: list as any,
    };
  }

  public async monthlyPriceLocalList(
    priceListInput: PaginationInput,
    accessTokenPayload: UserAccessTokenPayload,
  ): Promise<MonthlyPriceListResult> {
    const tollAdminData =
      (await this.tollAdminService.tollAdminInfo(accessTokenPayload))!;
    const list = await this.databaseService.monthlyPrice.findMany({
      where: {
        price: {
          tollPrice: {
            tollId: tollAdminData.tollId!,
          },
        },
      },
      include: {
        price: true,
      },
      take: priceListInput.take,
      skip: priceListInput.skip,
    });
    const count = await this.databaseService.monthlyPrice.count({
      where: {
        price: {
          tollPrice: {
            tollId: tollAdminData.tollId!,
          },
        },
      },
    });
    return {
      count,
      list: list as any,
    };
  }

  public async yearlyPriceLocalList(
    priceListInput: PaginationInput,
    accessTokenPayload: UserAccessTokenPayload,
  ): Promise<YearlyPriceListResult> {
    const tollAdminData =
      (await this.tollAdminService.tollAdminInfo(accessTokenPayload))!;
    const list = await this.databaseService.yearlyPrice.findMany({
      where: {
        price: {
          tollPrice: {
            tollId: tollAdminData.tollId!,
          },
        },
      },
      include: {
        price: true,
      },
      take: priceListInput.take,
      skip: priceListInput.skip,
    });
    const count = await this.databaseService.yearlyPrice.count({
      where: {
        price: {
          tollPrice: {
            tollId: tollAdminData.tollId!,
          },
        },
      },
    });
    return {
      count,
      list: list as any,
    };
  }

  public async customPriceLocalList(
    priceListInput: PaginationInput,
    accessTokenPayload: UserAccessTokenPayload,
  ): Promise<CustomPriceListResult> {
    const tollAdminData =
      (await this.tollAdminService.tollAdminInfo(accessTokenPayload))!;
    const list = await this.databaseService.customPrice.findMany({
      where: {
        price: {
          tollPrice: {
            tollId: tollAdminData.tollId!,
          },
        },
      },
      include: {
        price: true,
      },
      take: priceListInput.take,
      skip: priceListInput.skip,
    });
    const count = await this.databaseService.customPrice.count({
      where: {
        price: {
          tollPrice: {
            tollId: tollAdminData.tollId!,
          },
        },
      },
    });
    return {
      count,
      list: list as any,
    };
  }
}
