import { Module } from '@nestjs/common';
import { DepositService } from './deposit.service';
import { DepositResolver } from './deposit.resolver';

@Module({
  providers: [DepositService, DepositResolver]
})
export class DepositModule {}
