import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { EmailProcessor } from './email.processor';
import { BullQueues } from 'src/constants/bull-queues';

@Module({
  imports: [
    ConfigModule,
    BullModule.registerQueue({
      name: BullQueues.EMAIL,
    }),
  ],
  providers: [EmailService, EmailProcessor],
  exports: [EmailService],
})
export class EmailModule {}
