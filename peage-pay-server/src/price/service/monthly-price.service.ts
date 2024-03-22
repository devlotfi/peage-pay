import { Injectable } from '@nestjs/common';
import { MonthlyPrice } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { GraphQLError } from 'graphql';
import { PriceErrors } from '../graphql/price-errors.gql';
import { AddGlobalMonthlyPriceInput } from '../input/monthly-price/add-global-monthly-price.input.gql';
import { AddLocalMonthlyPriceInput } from '../input/monthly-price/add-local-monthly-price.input.gql';
import { DeleteGlobalMonthlyPriceInput } from '../input/monthly-price/delete-global-monthly-price.input.gql';
import { DeleteLocalMonthlyPriceInput } from '../input/monthly-price/delete-local-monthly-price.input.gql';

@Injectable()
export class MonthlyPriceService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async addGlobalMonthlyPrice(
    addGlobalMonthlyPriceInput: AddGlobalMonthlyPriceInput,
  ): Promise<MonthlyPrice> {
    const monthlyPrice = this.databaseService.monthlyPrice.create({
      data: {
        startDay: addGlobalMonthlyPriceInput.startDay,
        endDay: addGlobalMonthlyPriceInput.endDay,
        price: {
          create: {
            value: addGlobalMonthlyPriceInput.value,
            priority: addGlobalMonthlyPriceInput.priority,
            startTimestamp: addGlobalMonthlyPriceInput.startTimestamp,
            endTimestamp: addGlobalMonthlyPriceInput.endTimestamp,
          },
        },
      },
    });
    return monthlyPrice;
  }

  public async addLocalMonthlyPrice(
    addLocalMonthlyPriceInput: AddLocalMonthlyPriceInput,
  ): Promise<MonthlyPrice> {
    const monthlyPrice = this.databaseService.monthlyPrice.create({
      data: {
        startDay: addLocalMonthlyPriceInput.startDay,
        endDay: addLocalMonthlyPriceInput.endDay,
        price: {
          create: {
            value: addLocalMonthlyPriceInput.value,
            priority: addLocalMonthlyPriceInput.priority,
            startTimestamp: addLocalMonthlyPriceInput.startTimestamp,
            endTimestamp: addLocalMonthlyPriceInput.endTimestamp,
            toll: {
              connect: {
                id: addLocalMonthlyPriceInput.tollId,
              },
            },
          },
        },
      },
    });
    return monthlyPrice;
  }

  public async deleteGlobalMonthlyPriceInput(
    deleteGlobalMonthlyPriceInput: DeleteGlobalMonthlyPriceInput,
  ): Promise<boolean> {
    await this.databaseService.price.delete({
      where: {
        id: deleteGlobalMonthlyPriceInput.priceId,
      },
    });
    return true;
  }

  public async deleteLocalMonthlyPriceInput(
    deleteLocalMonthlyPriceInput: DeleteLocalMonthlyPriceInput,
  ): Promise<boolean> {
    const dailyPrice = await this.databaseService.dailyPrice.findUnique({
      where: {
        priceId: deleteLocalMonthlyPriceInput.priceId,
      },
      include: {
        price: true,
      },
    });

    if (!dailyPrice?.price.tollId) {
      throw new GraphQLError(PriceErrors.CANNOT_DELETE_GLOBAL_PRICE);
    }
    await this.databaseService.price.delete({
      where: {
        id: deleteLocalMonthlyPriceInput.priceId,
      },
    });
    return true;
  }
}
