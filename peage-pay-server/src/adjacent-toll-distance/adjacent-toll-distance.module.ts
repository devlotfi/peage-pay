import { Module } from '@nestjs/common';
import { AdjacentTollDistanceService } from './adjacent-toll-distance.service';
import { AdjacentTollDistanceResolver } from './adjacent-toll-distance.resolver';

@Module({
  providers: [AdjacentTollDistanceService, AdjacentTollDistanceResolver],
})
export class AdjacentTollDistanceModule {}
