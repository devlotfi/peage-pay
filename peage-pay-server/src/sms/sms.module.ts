import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsProcessor } from './sms.processor';
import { TwilioService } from './twilio.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { BullModule } from '@nestjs/bull';
import { BullQueues } from 'src/constants/bull-queues';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    BullModule.registerQueue({
      name: BullQueues.SMS,
    }),
  ],
  providers: [SmsService, SmsProcessor, TwilioService],
})
export class SmsModule {}
