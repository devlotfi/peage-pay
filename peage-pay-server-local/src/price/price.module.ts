import { Module } from '@nestjs/common';
import { AddPriceService } from './add-price.service';
import { PriceResolver } from './price.resolver';
import { DeletePriceService } from './delete-price.service';
import { GlobalPriceListService } from './global-price-list.service';
import { LocalPriceListService } from './local-price-list.service';
import { DefaultPriceService } from './default-price.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [
    AddPriceService,
    DeletePriceService,
    GlobalPriceListService,
    LocalPriceListService,
    PriceResolver,
    DefaultPriceService,
  ],
  exports: [
    AddPriceService,
    DeletePriceService,
    GlobalPriceListService,
    LocalPriceListService,
    PriceResolver,
  ],
})
export class PriceModule {}
