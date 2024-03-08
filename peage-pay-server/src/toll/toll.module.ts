import { Module } from '@nestjs/common';
import { TollService } from './toll.service';
import { TollResolver } from './toll.resolver';

@Module({
  providers: [TollService, TollResolver]
})
export class TollModule {}
