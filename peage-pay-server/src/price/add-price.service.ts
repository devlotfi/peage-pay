import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AddPriceInput } from './input/add-price.input.gql';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { TollAdminService } from './toll-admin.service';

@Injectable()
export class AddPriceService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly tollAdminService: TollAdminService,
  ) {}

  public async addGlobalPrice(addPriceInput: AddPriceInput): Promise<boolean> {
    return await this.addPrice(addPriceInput);
  }

  public async addLocalPrice(
    addPriceInput: AddPriceInput,
    accessTokenPayload: UserAccessTokenPayload,
  ): Promise<boolean> {
    const tollAdminData =
      await this.tollAdminService.getTollAdminData(accessTokenPayload);
    return await this.addPrice(
      addPriceInput,
      tollAdminData.tollAdmin?.toll?.id,
    );
  }

  private async addPrice(
    addPriceInput: AddPriceInput,
    tollId?: string,
  ): Promise<boolean> {
    if (addPriceInput.addDailyPriceInput) {
      const { value, priority, startTimestamp, endTimestamp } =
        addPriceInput.addDailyPriceInput;
      await this.databaseService.dailyPrice.create({
        data: {
          price: {
            create: {
              value,
              priority,
              startTimestamp,
              endTimestamp,
              toll: tollId
                ? {
                    connect: {
                      id: tollId,
                    },
                  }
                : undefined,
            },
          },
        },
      });
    } else if (addPriceInput.addWeeklyPriceInput) {
      const { value, priority, startTimestamp, endTimestamp, days } =
        addPriceInput.addWeeklyPriceInput;

      await this.databaseService.weeklyPrice.create({
        data: {
          days,
          price: {
            create: {
              value,
              priority,
              startTimestamp,
              endTimestamp,
              toll: tollId
                ? {
                    connect: {
                      id: tollId,
                    },
                  }
                : undefined,
            },
          },
        },
      });
    } else if (addPriceInput.addMonthlyPriceInput) {
      const {
        value,
        priority,
        startTimestamp,
        endTimestamp,
        startDay,
        endDay,
        months,
      } = addPriceInput.addMonthlyPriceInput;
      await this.databaseService.monthlyPrice.create({
        data: {
          startDay,
          endDay,
          months,
          price: {
            create: {
              value,
              priority,
              startTimestamp,
              endTimestamp,
              toll: tollId
                ? {
                    connect: {
                      id: tollId,
                    },
                  }
                : undefined,
            },
          },
        },
      });
    } else if (addPriceInput.addYearlyPriceInput) {
      const {
        value,
        priority,
        startTimestamp,
        endTimestamp,
        startDate,
        endDate,
      } = addPriceInput.addYearlyPriceInput;
      await this.databaseService.yearlyPrice.create({
        data: {
          startDate,
          endDate,
          price: {
            create: {
              value,
              priority,
              startTimestamp,
              endTimestamp,
              toll: tollId
                ? {
                    connect: {
                      id: tollId,
                    },
                  }
                : undefined,
            },
          },
        },
      });
    } else if (addPriceInput.addCustomPriceInput) {
      const {
        value,
        priority,
        startTimestamp,
        endTimestamp,
        startDate,
        endDate,
      } = addPriceInput.addCustomPriceInput;
      await this.databaseService.customPrice.create({
        data: {
          startDate,
          endDate,
          price: {
            create: {
              value,
              priority,
              startTimestamp,
              endTimestamp,
              toll: tollId
                ? {
                    connect: {
                      id: tollId,
                    },
                  }
                : undefined,
            },
          },
        },
      });
    }
    return true;
  }
}
