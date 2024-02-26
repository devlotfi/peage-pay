import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { EmailProcessor } from './email.processor';
import { BullQueues } from 'src/constants/bull-queues';
import { DatabaseModule } from 'src/database/database.module';
import { NodemailerService } from './nodemailer.service';
import { TokenModule } from 'src/token/token.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    TokenModule,
    BullModule.registerQueue({
      name: BullQueues.EMAIL,
    }),
  ],
  providers: [EmailService, EmailProcessor, NodemailerService],
  exports: [EmailService],
})
export class EmailModule {}
