import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { DayOfWeek, Month, Prisma } from '@prisma/client';
import { RedisService } from 'src/redis/redis.service';
import { PriceRedisPrefixes } from 'src/price/price-redis-prefixes';
import { TollPriceInput } from './input/toll-price.input.gql';

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
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const startTimeHours = startTime.getHours();
    const startTimeMinutes = startTime.getMinutes();
    const startTimeInMinutes = startTimeHours * 60 + startTimeMinutes;
    const endTimeHours = endTime.getHours();
    const endTimeMinutes = endTime.getMinutes();
    const endTimeInMinutes = endTimeHours * 60 + endTimeMinutes;

    if (endTimeInMinutes < startTimeInMinutes) {
      // End time is earlier than start time, so it spans over midnight
      return (
        currentTime >= startTimeInMinutes || currentTime < endTimeInMinutes
      );
    } else {
      // Normal case where end time is later than start time
      return (
        currentTime >= startTimeInMinutes && currentTime < endTimeInMinutes
      );
    }
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
    console.log(
      'is month day',
      startDay,
      endDay,
      currentMonthDay >= startDay && currentMonthDay <= endDay,
    );

    return currentMonthDay >= startDay && currentMonthDay <= endDay;
  }

  private isDayOfWeek(daysOfWeek: DayOfWeek[]) {
    return daysOfWeek.indexOf(this.dayOfWeekFromDate(new Date())) !== -1;
  }

  private isMonth(months: Month[]) {
    console.log(
      'is month',
      this.monthFromDate(new Date()),
      months.indexOf(this.monthFromDate(new Date())) !== -1,
    );

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

  public async tollPrice(tollPriceInput: TollPriceInput): Promise<number> {
    console.log('params', tollPriceInput);

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
        dailyPrice.price.endTimestamp,
      ),
    );
    const currentTimeWeeklyPrices = allWeeklyPrices.filter(
      (weeklyPrice) =>
        this.isDayOfWeek(weeklyPrice.days) &&
        this.isTimeBetween(
          weeklyPrice.price.startTimestamp,
          weeklyPrice.price.endTimestamp,
        ),
    );
    const currentTimeMonthlyPrices = allMonthlyPrices.filter(
      (monthlyPrice) =>
        this.isMonth(monthlyPrice.months) &&
        this.isMonthDay(monthlyPrice.startDay, monthlyPrice.endDay) &&
        this.isTimeBetween(
          monthlyPrice.price.startTimestamp,
          monthlyPrice.price.endTimestamp,
        ),
    );
    const currentTimeYearlyPrices = allYearlyPrices.filter(
      (yearlyPrice) =>
        this.isDateBetween(yearlyPrice.startDate, yearlyPrice.endDate) &&
        this.isTimeBetween(
          yearlyPrice.price.startTimestamp,
          yearlyPrice.price.endTimestamp,
        ),
    );
    const currentTimeCustomPrices = allCustomPrices.filter(
      (customPrice) =>
        this.isDateBetween(customPrice.startDate, customPrice.endDate) &&
        this.isTimeBetween(
          customPrice.price.startTimestamp,
          customPrice.price.endTimestamp,
        ),
    );

    // console.log(currentTimeDailyPrices);
    /*     console.log(currentTimeWeeklyPrices);
    console.log(currentTimeMonthlyPrices);
    console.log(currentTimeYearlyPrices);
    console.log(currentTimeCustomPrices); */

    const dailyPricesGlobal = currentTimeDailyPrices.filter(
      (dailyPrice) => dailyPrice.price.tollPrice === null,
    );
    const weeklyPricesGlobal = currentTimeWeeklyPrices.filter(
      (weeklyPrice) => weeklyPrice.price.tollPrice === null,
    );
    const monthlyPricesGlobal = currentTimeMonthlyPrices.filter(
      (monthlyPrice) => monthlyPrice.price.tollPrice === null,
    );
    const yearlyPricesGlobal = currentTimeYearlyPrices.filter(
      (yearlyPrice) => yearlyPrice.price.tollPrice === null,
    );
    const customPricesGlobal = currentTimeCustomPrices.filter(
      (customPrice) => customPrice.price.tollPrice === null,
    );

    const dailyPricesLocal = currentTimeDailyPrices.filter(
      (dailyPrice) => dailyPrice.price.tollPrice !== null,
    );
    const weeklyPricesLocal = currentTimeWeeklyPrices.filter(
      (weeklyPrice) => weeklyPrice.price.tollPrice !== null,
    );
    const monthlyPricesLocal = currentTimeMonthlyPrices.filter(
      (monthlyPrice) => monthlyPrice.price.tollPrice !== null,
    );
    const yearlyPricesLocal = currentTimeYearlyPrices.filter(
      (yearlyPrice) => yearlyPrice.price.tollPrice !== null,
    );
    const customPricesLocal = currentTimeCustomPrices.filter(
      (customPrice) => customPrice.price.tollPrice !== null,
    );

    const sortPrices = (price1, price2) => {
      if (price1.price.priority > price2.price.priority) {
        return -1;
      } else if (price1.price.priority < price2.price.priority) {
        return 1;
      }
      return 0;
    };

    console.log('month global', monthlyPricesGlobal);

    if (customPricesLocal.length > 0) {
      const price = customPricesLocal.sort(sortPrices)[0];
      console.log(price);
      return price.price.value.toNumber();
    } else if (yearlyPricesLocal.length > 0) {
      const price = yearlyPricesLocal.sort(sortPrices)[0];
      console.log(price);
      return price.price.value.toNumber();
    } else if (monthlyPricesLocal.length > 0) {
      const price = monthlyPricesLocal.sort(sortPrices)[0];
      console.log(price);
      return price.price.value.toNumber();
    } else if (weeklyPricesLocal.length > 0) {
      const price = weeklyPricesLocal.sort(sortPrices)[0];
      console.log(price);
      return price.price.value.toNumber();
    } else if (dailyPricesLocal.length > 0) {
      const price = dailyPricesLocal.sort(sortPrices)[0];
      console.log(price);
      return price.price.value.toNumber();
      //
    } else if (customPricesGlobal.length > 0) {
      const price = customPricesGlobal.sort(sortPrices)[0];
      console.log(price);
      return price.price.value.toNumber();
    } else if (yearlyPricesGlobal.length > 0) {
      const price = yearlyPricesGlobal.sort(sortPrices)[0];
      console.log(price);
      return price.price.value.toNumber();
    } else if (monthlyPricesGlobal.length > 0) {
      const price = monthlyPricesGlobal.sort(sortPrices)[0];
      console.log(price);
      return price.price.value.toNumber();
    } else if (weeklyPricesGlobal.length > 0) {
      const price = weeklyPricesGlobal.sort(sortPrices)[0];
      console.log(price);
      return price.price.value.toNumber();
    } else if (dailyPricesGlobal.length > 0) {
      const price = dailyPricesGlobal.sort(sortPrices)[0];
      console.log(price);
      return price.price.value.toNumber();
    } else {
      console.log(defaultPrice);
      return defaultPrice;
    }
  }
}
