import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { ConfigModule } from '@nestjs/config';
import { NodemailerService } from './nodemailer.service';

@Module({
  imports: [ConfigModule],
  providers: [EmailService, NodemailerService],
  exports: [EmailService],
})
export class EmailModule {}
