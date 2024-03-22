import { Module } from '@nestjs/common';
import { AddPriceService } from './add-price.service';
import { PriceResolver } from './price.resolver';
import { DeletePriceService } from './delete-price.service';
import { GlobalPriceListService } from './global-price-list.service';
import { TollAdminService } from './toll-admin.service';
import { LocalPriceListService } from './local-price-list.service';

@Module({
  providers: [
    AddPriceService,
    DeletePriceService,
    TollAdminService,
    GlobalPriceListService,
    LocalPriceListService,
    PriceResolver,
  ],
})
export class PriceModule {}
