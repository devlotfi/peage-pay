import { Module } from '@nestjs/common';
import { PriceService } from './service/price.service';
import { PriceResolver } from './resolver/price.resolver';
import { DailyPriceService } from './service/daily-price.service';
import { WeeklyPriceService } from './service/weekly-price.service';
import { MonthlyPriceService } from './service/monthly-price.service';
import { YearlyPriceService } from './service/yearly-price.service';
import { CustomPriceService } from './service/custom-price.service';

@Module({
  providers: [
    PriceService,
    DailyPriceService,
    WeeklyPriceService,
    MonthlyPriceService,
    YearlyPriceService,
    CustomPriceService,
    PriceResolver,
  ],
})
export class PriceModule {}
