import { Module } from '@nestjs/common';
import { GraphTollDistanceService } from './graph-toll-distance.service';
import { GraphTollDistanceResolver } from './graph-toll-distance.resolver';

@Module({
  providers: [GraphTollDistanceService, GraphTollDistanceResolver],
})
export class GraphTollDistanceModule {}
