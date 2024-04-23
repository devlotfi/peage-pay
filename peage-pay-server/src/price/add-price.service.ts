import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AddGlobalPriceInput } from './input/add-global-price.input.gql';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { AddLocalPriceInput } from './input/add-local-price.input.gql';
import { GraphQLError } from 'graphql';
import { BaseUserErrors } from 'src/user/graphql/base-user-errors.gql';
import { TollAdminService } from 'src/user/toll-admin.service';

@Injectable()
export class AddPriceService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly tollAdminService: TollAdminService,
  ) {}

  public async addLocalPrice(
    addLocalPriceInput: AddLocalPriceInput,
    accessTokenPayload: UserAccessTokenPayload,
  ): Promise<boolean> {
    const tollAdminData =
      (await this.tollAdminService.tollAdminInfo(accessTokenPayload))!;

    if (!tollAdminData.tollId) {
      throw new GraphQLError(BaseUserErrors.INSUFFICIENT_PRIVILEGES);
    }

    if (addLocalPriceInput.addDailyPriceInput) {
      const { value, priority, startTimestamp, endTimestamp } =
        addLocalPriceInput.addDailyPriceInput;
      await this.databaseService.dailyPrice.create({
        data: {
          price: {
            create: {
              value,
              priority,
              startTimestamp,
              endTimestamp,
              tollPrice: {
                create: {
                  tollDirection:
                    addLocalPriceInput.addDailyPriceInput.direction,
                  toll: {
                    connect: {
                      id: tollAdminData.tollId,
                    },
                  },
                },
              },
            },
          },
        },
      });
    } else if (addLocalPriceInput.addWeeklyPriceInput) {
      const { value, priority, startTimestamp, endTimestamp, days } =
        addLocalPriceInput.addWeeklyPriceInput;

      await this.databaseService.weeklyPrice.create({
        data: {
          days,
          price: {
            create: {
              value,
              priority,
              startTimestamp,
              endTimestamp,
              tollPrice: {
                create: {
                  tollDirection:
                    addLocalPriceInput.addWeeklyPriceInput.direction,
                  toll: {
                    connect: {
                      id: tollAdminData.tollId,
                    },
                  },
                },
              },
            },
          },
        },
      });
    } else if (addLocalPriceInput.addMonthlyPriceInput) {
      const {
        value,
        priority,
        startTimestamp,
        endTimestamp,
        startDay,
        endDay,
        months,
      } = addLocalPriceInput.addMonthlyPriceInput;
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
              tollPrice: {
                create: {
                  tollDirection:
                    addLocalPriceInput.addMonthlyPriceInput.direction,
                  toll: {
                    connect: {
                      id: tollAdminData.tollId,
                    },
                  },
                },
              },
            },
          },
        },
      });
    } else if (addLocalPriceInput.addYearlyPriceInput) {
      const {
        value,
        priority,
        startTimestamp,
        endTimestamp,
        startDate,
        endDate,
      } = addLocalPriceInput.addYearlyPriceInput;
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
              tollPrice: {
                create: {
                  tollDirection:
                    addLocalPriceInput.addYearlyPriceInput.direction,
                  toll: {
                    connect: {
                      id: tollAdminData.tollId,
                    },
                  },
                },
              },
            },
          },
        },
      });
    } else if (addLocalPriceInput.addCustomPriceInput) {
      const {
        value,
        priority,
        startTimestamp,
        endTimestamp,
        startDate,
        endDate,
      } = addLocalPriceInput.addCustomPriceInput;
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
              tollPrice: {
                create: {
                  tollDirection:
                    addLocalPriceInput.addCustomPriceInput.direction,
                  toll: {
                    connect: {
                      id: tollAdminData.tollId,
                    },
                  },
                },
              },
            },
          },
        },
      });
    }
    return true;
  }

  public async addGlobalPrice(
    addGlobalPriceInput: AddGlobalPriceInput,
  ): Promise<boolean> {
    if (addGlobalPriceInput.addDailyPriceInput) {
      const { value, priority, startTimestamp, endTimestamp } =
        addGlobalPriceInput.addDailyPriceInput;
      await this.databaseService.dailyPrice.create({
        data: {
          price: {
            create: {
              value,
              priority,
              startTimestamp,
              endTimestamp,
            },
          },
        },
      });
    } else if (addGlobalPriceInput.addWeeklyPriceInput) {
      const { value, priority, startTimestamp, endTimestamp, days } =
        addGlobalPriceInput.addWeeklyPriceInput;

      await this.databaseService.weeklyPrice.create({
        data: {
          days,
          price: {
            create: {
              value,
              priority,
              startTimestamp,
              endTimestamp,
            },
          },
        },
      });
    } else if (addGlobalPriceInput.addMonthlyPriceInput) {
      const {
        value,
        priority,
        startTimestamp,
        endTimestamp,
        startDay,
        endDay,
        months,
      } = addGlobalPriceInput.addMonthlyPriceInput;
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
            },
          },
        },
      });
    } else if (addGlobalPriceInput.addYearlyPriceInput) {
      const {
        value,
        priority,
        startTimestamp,
        endTimestamp,
        startDate,
        endDate,
      } = addGlobalPriceInput.addYearlyPriceInput;
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
            },
          },
        },
      });
    } else if (addGlobalPriceInput.addCustomPriceInput) {
      const {
        value,
        priority,
        startTimestamp,
        endTimestamp,
        startDate,
        endDate,
      } = addGlobalPriceInput.addCustomPriceInput;
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
            },
          },
        },
      });
    }
    return true;
  }
}
