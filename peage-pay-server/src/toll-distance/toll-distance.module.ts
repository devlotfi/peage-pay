import { Module } from '@nestjs/common';
import { TollDistanceService } from './toll-distance.service';
import { TollDistanceResolver } from './toll-distance.resolver';

@Module({
  providers: [TollDistanceService, TollDistanceResolver],
  exports: [TollDistanceService],
})
export class TollDistanceModule {}
