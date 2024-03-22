import { Injectable } from '@nestjs/common';
import { DailyPrice } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddGlobalDailyPriceInput } from '../input/daily-price/add-global-daily-price.input.gql';
import { AddLocalDailyPriceInput } from '../input/daily-price/add-local-daily-price.input.gql';
import { DeleteGlobalDailyPriceInput } from '../input/daily-price/delete-global-daily-price.input.gql';
import { DeleteLocalDailyPriceInput } from '../input/daily-price/delete-local-daily-price.input.gql';
import { GraphQLError } from 'graphql';
import { PriceErrors } from '../graphql/price-errors.gql';
import { DailyPriceListResult } from '../result/daily-price-list.result.gql';
import { DailyPriceListInput } from '../input/daily-price/daily-price-list.input.gql';
import { AccessTokenPayload } from 'src/auth/types/access-token-payload.type';
import { BaseUserErrors } from 'src/base-user/graphql/base-user-errors.gql';
import { TollErrors } from 'src/toll/graphql/toll-errors.gql';

@Injectable()
export class DailyPriceService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async globalDailyPriceList(
    dailyPriceListInput: DailyPriceListInput,
  ): Promise<DailyPriceListResult> {
    const dailyPriceList = await this.databaseService.dailyPrice.findMany({
      where: {
        price: {
          tollId: null,
        },
      },
      take: dailyPriceListInput.take,
      skip: dailyPriceListInput.skip,
    });
    const dailyPriceCount = await this.databaseService.dailyPrice.count();
    const dailyPriceListResult = new DailyPriceListResult();
    dailyPriceListResult.list = dailyPriceList as any[];
    dailyPriceListResult.count = dailyPriceCount;
    return dailyPriceListResult;
  }

  public async localDailyPriceList(
    dailyPriceListInput: DailyPriceListInput,
    accessTokenPayload: AccessTokenPayload,
  ): Promise<DailyPriceListResult> {
    const baseUser = await this.databaseService.baseUser.findUnique({
      where: {
        id: accessTokenPayload.userId,
      },
      include: {
        tollAdmin: {
          include: {
            toll: true,
          },
        },
      },
    });
    if (!baseUser) {
      throw new GraphQLError(BaseUserErrors.BASE_USER_NOT_FOUND);
    }
    if (!baseUser.tollAdmin) {
      throw new GraphQLError(BaseUserErrors.INSUFFICIENT_PRIVILEGES);
    }
    if (!baseUser.tollAdmin.toll) {
      throw new GraphQLError(TollErrors.TOLL_NOT_FOUND);
    }
    const dailyPriceList = await this.databaseService.dailyPrice.findMany({
      where: {
        price: {
          tollId: baseUser.tollAdmin.toll.id,
        },
      },
      take: dailyPriceListInput.take,
      skip: dailyPriceListInput.skip,
    });
    const dailyPriceCount = await this.databaseService.dailyPrice.count();
    const dailyPriceListResult = new DailyPriceListResult();
    dailyPriceListResult.list = dailyPriceList as any[];
    dailyPriceListResult.count = dailyPriceCount;
    return dailyPriceListResult;
  }

  public async addGlobalDailyPrice(
    addGlobalDailyPriceInput: AddGlobalDailyPriceInput,
  ): Promise<DailyPrice> {
    const dailyPrice = this.databaseService.dailyPrice.create({
      data: {
        price: {
          create: {
            value: addGlobalDailyPriceInput.value,
            priority: addGlobalDailyPriceInput.priority,
            startTimestamp: addGlobalDailyPriceInput.startTimestamp,
            endTimestamp: addGlobalDailyPriceInput.endTimestamp,
          },
        },
      },
    });
    return dailyPrice;
  }

  public async addLocalDailyPrice(
    addLocalDailyPriceInput: AddLocalDailyPriceInput,
    accessTokenPayload: AccessTokenPayload,
  ): Promise<DailyPrice> {
    const baseUser = await this.databaseService.baseUser.findUnique({
      where: {
        id: accessTokenPayload.userId,
      },
      include: {
        tollAdmin: {
          include: {
            toll: true,
          },
        },
      },
    });
    if (!baseUser) {
      throw new GraphQLError(BaseUserErrors.BASE_USER_NOT_FOUND);
    }
    if (!baseUser.tollAdmin) {
      throw new GraphQLError(BaseUserErrors.INSUFFICIENT_PRIVILEGES);
    }
    if (!baseUser.tollAdmin.toll) {
      throw new GraphQLError(TollErrors.TOLL_NOT_FOUND);
    }
    const dailyPrice = this.databaseService.dailyPrice.create({
      data: {
        price: {
          create: {
            value: addLocalDailyPriceInput.value,
            priority: addLocalDailyPriceInput.priority,
            startTimestamp: addLocalDailyPriceInput.startTimestamp,
            endTimestamp: addLocalDailyPriceInput.endTimestamp,
            toll: {
              connect: {
                id: baseUser.tollAdmin.toll.id,
              },
            },
          },
        },
      },
    });
    return dailyPrice;
  }

  public async deleteGlobalDailyPriceInput(
    deleteGlobalDailyPriceInput: DeleteGlobalDailyPriceInput,
  ): Promise<boolean> {
    const dailyPrice = await this.databaseService.dailyPrice.findUnique({
      where: {
        priceId: deleteGlobalDailyPriceInput.priceId,
      },
      include: {
        price: true,
      },
    });
    if (dailyPrice?.price.tollId) {
      throw new GraphQLError(PriceErrors.CANNOT_DELETE_LOCAL_PRICE);
    }
    await this.databaseService.price.delete({
      where: {
        id: deleteGlobalDailyPriceInput.priceId,
      },
    });
    return true;
  }

  public async deleteLocalDailyPriceInput(
    deleteLocalDailyPriceInput: DeleteLocalDailyPriceInput,
    accessTokenPayload: AccessTokenPayload,
  ): Promise<boolean> {
    const dailyPrice = await this.databaseService.dailyPrice.findUnique({
      where: {
        priceId: deleteLocalDailyPriceInput.priceId,
      },
      include: {
        price: true,
      },
    });
    const baseUser = await this.databaseService.baseUser.findUnique({
      where: {
        id: accessTokenPayload.userId,
      },
      include: {
        tollAdmin: {
          include: {
            toll: true,
          },
        },
      },
    });
    if (!baseUser) {
      throw new GraphQLError(BaseUserErrors.BASE_USER_NOT_FOUND);
    }
    if (!baseUser.tollAdmin) {
      throw new GraphQLError(BaseUserErrors.INSUFFICIENT_PRIVILEGES);
    }
    if (!baseUser.tollAdmin.toll) {
      throw new GraphQLError(TollErrors.TOLL_NOT_FOUND);
    }

    await this.databaseService.price.delete({
      where: {
        id: deleteLocalDailyPriceInput.priceId,
      },
    });
    return true;
  }
}
