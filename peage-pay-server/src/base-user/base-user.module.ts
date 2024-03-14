import { Module } from '@nestjs/common';
import { BaseUserService } from './base-user.service';
import { BaseUserResolver } from './base-user.resolver';

@Module({
  providers: [BaseUserService, BaseUserResolver],
  exports: [BaseUserService],
})
export class BaseUserModule {}
