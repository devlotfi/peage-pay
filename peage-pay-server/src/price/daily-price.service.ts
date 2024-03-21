import { Injectable } from '@nestjs/common';
import { DailyPrice } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddGlobalDailyPriceInput } from './input/daily-price/add-global-daily-price.input.gql';
import { AddLocalDailyPriceInput } from './input/daily-price/add-local-daily-price.input.gql';

@Injectable()
export class DailyPriceService {
  public constructor(private readonly databaseService: DatabaseService) {}

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
  ): Promise<DailyPrice> {
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
                id: addLocalDailyPriceInput.tollId,
              },
            },
          },
        },
      },
    });
    return dailyPrice;
  }
}
