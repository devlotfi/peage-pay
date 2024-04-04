import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketResolver } from './ticket.resolver';
import { TollModule } from 'src/toll/toll.module';
import { TollDistanceModule } from 'src/toll-distance/toll-distance.module';

@Module({
  imports: [TollModule, TollDistanceModule],
  providers: [TicketService, TicketResolver],
})
export class TicketModule {}
