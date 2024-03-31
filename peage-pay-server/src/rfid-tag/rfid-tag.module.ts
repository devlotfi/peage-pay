import { Module } from '@nestjs/common';
import { RfidTagService } from './rfid-tag.service';
import { RfidTagResolver } from './rfid-tag.resolver';

@Module({
  providers: [RfidTagService, RfidTagResolver],
})
export class RfidTagModule {}
