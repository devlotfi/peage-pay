import { Module } from '@nestjs/common';
import { RfidTagService } from './rfid-tag.service';
import { RfidTagResolver } from './rfid-tag.resolver';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [RfidTagService, RfidTagResolver],
  exports: [RfidTagService],
})
export class RfidTagModule {}
