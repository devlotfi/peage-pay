import { Module } from '@nestjs/common';
import { BaseUserService } from './base-user.service';
import { BaseUserResolver } from './base-user.resolver';
import { HumanRessourceAdminService } from './human-ressources-admin.service';

@Module({
  providers: [BaseUserService, HumanRessourceAdminService, BaseUserResolver],
  exports: [BaseUserService],
})
export class BaseUserModule {}
