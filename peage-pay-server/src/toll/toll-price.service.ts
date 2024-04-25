import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { DayOfWeek, Month, Prisma } from '@prisma/client';
import { RedisService } from 'src/redis/redis.service';
import { PriceRedisPrefixes } from 'src/price/price-redis-prefixes';
import { TollPriceInput } from './input/toll-price.input.gql';
import { TollDirectionType } from 'src/price/graphql/toll-direction.gql';
import { inspect } from 'util';

@Injectable()
export class TollPriceService {
  public constructor(
    private readonly databaseService: DatabaseService,
    public readonly redisService: RedisService,
  ) {}

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
      default:
        throw new Error();
    }
  }

  public monthFromDate(data: Date): Month {
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
      default:
        throw new Error();
    }
  }

  private isTimeBetween(startTime: Date, endTime: Date) {
    function createDateWithTimeOnly(hours, minutes, seconds) {
      const today = new Date();
      return new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        hours,
        minutes,
        seconds,
      );
    }

    const start = createDateWithTimeOnly(
      startTime.getHours(),
      startTime.getMinutes(),
      startTime.getSeconds(),
    );
    const end = createDateWithTimeOnly(
      endTime.getHours(),
      endTime.getMinutes(),
      endTime.getSeconds(),
    );
    const givenTime = createDateWithTimeOnly(
      new Date().getHours(),
      new Date().getMinutes(),
      new Date().getSeconds(),
    );

    return givenTime >= start && givenTime <= end;
  }

  private isDateBetween(startDate: Date, endDate: Date) {
    const start = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate(),
    );
    const end = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate(),
    );
    const givenDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
    );

    return givenDate >= start && givenDate <= end;
  }

  private isMonthDay(startDay: number, endDay: number) {
    const currentMonthDay = new Date().getDate();
    return currentMonthDay >= startDay && currentMonthDay <= endDay;
  }

  private isDayOfWeek(daysOfWeek: DayOfWeek[]) {
    return daysOfWeek.indexOf(this.dayOfWeekFromDate(new Date())) !== -1;
  }

  private isMonth(months: Month[]) {
    return months.indexOf(this.monthFromDate(new Date())) !== -1;
  }

  private async defaultPriceCached(): Promise<number> {
    const cachedResult = await this.redisService.client.get(
      PriceRedisPrefixes.defaultPrice(),
    );
    if (!cachedResult) {
      return (
        await this.databaseService.defaultPrice.findFirstOrThrow()
      ).value.toNumber();
    }
    return +cachedResult;
  }

  private async tollPriceCached(
    tollPriceInput: TollPriceInput,
  ): Promise<number | null> {
    const cachedResult = await this.redisService.client.get(
      tollPriceInput.direction === TollDirectionType.INBOUND
        ? PriceRedisPrefixes.tollPriceInbound(tollPriceInput.tollId)
        : PriceRedisPrefixes.tollPriceOutbound(tollPriceInput.tollId),
    );
    return cachedResult ? +cachedResult : null;
  }

  public async tollPrice(tollPriceInput: TollPriceInput): Promise<number> {
    const cachedResult = await this.tollPriceCached(tollPriceInput);
    if (cachedResult) {
      return cachedResult;
    }

    const query = {
      where: {
        price: {
          OR: [
            {
              tollPrice: {
                is: null,
              },
            },
            {
              tollPrice: {
                tollId: tollPriceInput.tollId,
                tollDirection: tollPriceInput.direction,
              },
            },
          ],
        },
      },
      include: {
        price: {
          include: {
            tollPrice: true,
          },
        },
      },
    };
    const defaultPricePromise = this.defaultPriceCached();
    const allDailyPricesPromise =
      this.databaseService.dailyPrice.findMany(query);
    const allWeeklyPricesPromise =
      this.databaseService.weeklyPrice.findMany(query);
    const allMonthlyPricesPromise =
      this.databaseService.monthlyPrice.findMany(query);
    const allYearlyPricesPromise =
      this.databaseService.yearlyPrice.findMany(query);
    const allCustomPricesPromise =
      this.databaseService.customPrice.findMany(query);
    await Promise.all([
      allDailyPricesPromise,
      allWeeklyPricesPromise,
      allMonthlyPricesPromise,
      allYearlyPricesPromise,
      allCustomPricesPromise,
    ]);
    const defaultPrice = await defaultPricePromise;
    const allDailyPrices = await allDailyPricesPromise;
    const allWeeklyPrices = await allWeeklyPricesPromise;
    const allMonthlyPrices = await allMonthlyPricesPromise;
    const allYearlyPrices = await allYearlyPricesPromise;
    const allCustomPrices = await allCustomPricesPromise;

    const currentTimeDailyPrices = allDailyPrices.filter((dailyPrice) =>
      this.isTimeBetween(
        dailyPrice.price.startTimestamp,
        dailyPrice.price.startTimestamp,
      ),
    );
    const currentTimeWeeklyPrices = allWeeklyPrices.filter(
      (weeklyPrice) =>
        this.isDayOfWeek(weeklyPrice.days) &&
        this.isTimeBetween(
          weeklyPrice.price.startTimestamp,
          weeklyPrice.price.startTimestamp,
        ),
    );
    const currentTimeMonthlyPrices = allMonthlyPrices.filter(
      (monthlyPrice) =>
        this.isMonth(monthlyPrice.months) &&
        this.isMonthDay(monthlyPrice.startDay, monthlyPrice.endDay) &&
        this.isTimeBetween(
          monthlyPrice.price.startTimestamp,
          monthlyPrice.price.startTimestamp,
        ),
    );
    const currentTimeYearlyPrices = allYearlyPrices.filter(
      (yearlyPrice) =>
        this.isDateBetween(yearlyPrice.startDate, yearlyPrice.endDate) &&
        this.isTimeBetween(
          yearlyPrice.price.startTimestamp,
          yearlyPrice.price.startTimestamp,
        ),
    );
    const currentTimeCustomPrices = allCustomPrices.filter(
      (customPrice) =>
        this.isDateBetween(customPrice.startDate, customPrice.endDate) &&
        this.isTimeBetween(
          customPrice.price.startTimestamp,
          customPrice.price.startTimestamp,
        ),
    );

    return 1;
  }
}
