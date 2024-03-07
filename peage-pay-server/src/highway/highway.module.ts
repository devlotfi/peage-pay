import { Module } from '@nestjs/common';
import { HighwayService } from './highway.service';
import { HighwayResolver } from './highway.resolver';

@Module({
  providers: [HighwayService, HighwayResolver],
})
export class HighwayModule {}
