import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';
import { ChargilyModule } from 'src/chargily/chargily.module';
import { PaymentController } from './payment.controller';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [ChargilyModule, ConfigModule, RedisModule],
  providers: [PaymentService, PaymentResolver],
  controllers: [PaymentController],
})
export class PaymentModule {}
