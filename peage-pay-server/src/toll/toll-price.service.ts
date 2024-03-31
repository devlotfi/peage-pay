import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { DayOfWeek, Month, Prisma, Toll } from '@prisma/client';
import { TollListInput } from './input/toll-list.input.gql';
import { AddTollInput } from './input/add-toll.input.gql';
import { EditTollInput } from './input/edit-toll.input.gql';
import { TollListResult } from './result/toll-list.result.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';

@Injectable()
export class TollPriceService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public dayOfWeekFromDate(data: Date) {
    switch (data.getDay()) {
      case 0:
        return DayOfWeek.SUNDAY;
      case 1:
        return DayOfWeek.MONDAY;
      case 2:
        return DayOfWeek.TUESDAY;
      case 3:
        return DayOfWeek.WEDNESDAY;
      case 4:
        return DayOfWeek.THURSDAY;
      case 5:
        return DayOfWeek.FRIDAY;
      case 6:
        return DayOfWeek.SATURDAY;
    }
  }

  public monthFromDate(data: Date) {
    switch (data.getMonth()) {
      case 0:
        return Month.JANUARY;
      case 1:
        return Month.FEBRUARY;
      case 2:
        return Month.MARCH;
      case 3:
        return Month.APRIL;
      case 4:
        return Month.MAY;
      case 5:
        return Month.JUNE;
      case 6:
        return Month.JULY;
      case 7:
        return Month.AUGUST;
      case 8:
        return Month.SEPTEMBER;
      case 9:
        return Month.OCTOBER;
      case 10:
        return Month.NOVEMBER;
      case 11:
        return Month.DECEMBER;
    }
  }

  public async tollPrice(tollPriceInput: IdInput): Promise<number> {
    const currentDatetime = new Date();

    const dailyPrices = await this.databaseService.dailyPrice.findMany({
      where: {
        price: {
          startTimestamp: {
            lte: currentDatetime,
          },
          endTimestamp: {
            gte: currentDatetime,
          },
        },
      },
      include: {
        price: true,
      },
    });

    const weeklyPrices = await this.databaseService.weeklyPrice.findMany({
      where: {
        days: {
          has: this.dayOfWeekFromDate(currentDatetime),
        },
        price: {
          startTimestamp: {
            lte: currentDatetime,
          },
          endTimestamp: {
            gte: currentDatetime,
          },
        },
      },
      include: {
        price: true,
      },
    });

    const monthlyPrices = await this.databaseService.monthlyPrice.findMany({
      where: {
        months: {
          has: currentInstant.getMonth().toString(),
        },
        startDay: {
          lte: currentInstant.getDate(),
        },
        endDay: {
          gte: currentInstant.getDate(),
        },
        price: {
          startTimestamp: {
            lte: currentDatetime,
          },
          endTimestamp: {
            gte: currentDatetime,
          },
        },
      },
      include: {
        price: true,
      },
    });

    const yearlyPrices = await this.databaseService.yearlyPrice.findMany({
      where: {
        months: {
          has: currentInstant.getMonth().toString(),
        },
        startDate: {
          lte: Prisma.sql.datetime(currentInstant.getTime()),
        },
        endDate: {
          gte: Prisma.sql.datetime(currentInstant.getTime()),
        },
        price: {
          startTimestamp: {
            lte: currentDatetime,
          },
          endTimestamp: {
            gte: currentDatetime,
          },
        },
      },
      include: {
        price: true,
      },
    });

    const customPrices = await this.databaseService.customPrice.findMany({
      where: {
        startDate: {
          lte: Prisma.sql.datetime(currentInstant.getTime()),
        },
        endDate: {
          gte: Prisma.sql.datetime(currentInstant.getTime()),
        },
        price: {
          startTimestamp: {
            lte: currentDatetime,
          },
          endTimestamp: {
            gte: currentDatetime,
          },
        },
      },
      include: {
        price: true,
      },
    });

    console.log(dailyPrices);
  }
}
