import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsProcessor } from './sms.processor';
import { TwilioService } from './twilio.service';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { BullQueues } from 'src/constants/bull-queues';

@Module({
  imports: [
    ConfigModule,
    BullModule.registerQueue({
      name: BullQueues.SMS,
    }),
  ],
  providers: [SmsService, SmsProcessor, TwilioService],
  exports: [SmsService],
})
export class SmsModule {}
