import { Module } from '@nestjs/common';
import { ChargilyService } from './chargily.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [ChargilyService],
  exports: [ChargilyService],
})
export class ChargilyModule {}
