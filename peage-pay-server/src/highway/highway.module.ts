import { Module } from '@nestjs/common';
import { HighwayService } from './highway.service';
import { HighwayResolver } from './highway.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [HighwayService, HighwayResolver],
})
export class HighwayModule {}
