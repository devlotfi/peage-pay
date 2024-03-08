import { Module } from '@nestjs/common';
import { BaseUserService } from './base-user.service';

@Module({
  providers: [BaseUserService],
  exports: [BaseUserService],
})
export class BaseUserModule {}
