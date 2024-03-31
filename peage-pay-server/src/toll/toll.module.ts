import { Module } from '@nestjs/common';
import { TollService } from './toll.service';
import { TollResolver } from './toll.resolver';
import { WilayaModule } from 'src/wilaya/wilaya.module';
import { HighwayModule } from 'src/highway/highway.module';
import { TollNetworkModule } from 'src/toll-network/toll-network.module';

@Module({
  imports: [WilayaModule, HighwayModule, TollNetworkModule],
  providers: [TollService, TollResolver],
  exports: [TollService],
})
export class TollModule {}
