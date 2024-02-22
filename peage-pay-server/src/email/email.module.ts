import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    ConfigModule,
    BullModule.registerQueue({
      name: 'emailQueue',
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
