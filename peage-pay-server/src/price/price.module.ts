import { Module } from '@nestjs/common';
import { PriceService } from './price.service';
import { PriceResolver } from './price.resolver';
import { DailyPriceService } from './daily-price.service';
import { WeeklyPriceService } from './weekly-price.service';
import { MonthlyPriceService } from './monthly-price.service';
import { YearlyPriceService } from './yearly-price.service';
import { CustomPriceService } from './custom-price.service';

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
