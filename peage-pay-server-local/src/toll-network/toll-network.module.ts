import { Module } from '@nestjs/common';
import { TollNetworkService } from './toll-network.service';
import { TollNetworkResolver } from './toll-network.resolver';

@Module({
  providers: [TollNetworkService, TollNetworkResolver],
  exports: [TollNetworkService],
})
export class TollNetworkModule {}
