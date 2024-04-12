import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';
import { ChargilyModule } from 'src/chargily/chargily.module';
import { PaymentController } from './payment.controller';

@Module({
  imports: [ChargilyModule],
  providers: [PaymentService, PaymentResolver],
  controllers: [PaymentController],
})
export class PaymentModule {}
