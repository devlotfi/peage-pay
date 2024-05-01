import { Module } from '@nestjs/common';
import { TripService } from './trip.service';
import { TripResolver } from './trip.resolver';
import { TollDistanceModule } from 'src/toll-distance/toll-distance.module';
import { TollModule } from 'src/toll/toll.module';

@Module({
  imports: [TollModule, TollDistanceModule],
  providers: [TripService, TripResolver],
  exports: [TripService],
})
export class TripModule {}
