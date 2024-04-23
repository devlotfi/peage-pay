import { Module } from '@nestjs/common';
import { TollDistanceService } from './toll-distance.service';
import { TollDistanceResolver } from './toll-distance.resolver';
import { TollModule } from 'src/toll/toll.module';

@Module({
  imports: [TollModule],
  providers: [TollDistanceService, TollDistanceResolver],
  exports: [TollDistanceService],
})
export class TollDistanceModule {}
