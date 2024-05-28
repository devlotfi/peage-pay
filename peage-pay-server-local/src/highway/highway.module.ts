import { Module } from '@nestjs/common';
import { HighwayService } from './highway.service';
import { HighwayResolver } from './highway.resolver';

@Module({
  providers: [HighwayService, HighwayResolver],
  exports: [HighwayService],
})
export class HighwayModule {}
