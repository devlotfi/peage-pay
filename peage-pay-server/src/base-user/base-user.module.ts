import { Module } from '@nestjs/common';
import { BaseUserService } from './base-user.service';
import { BaseUserResolver } from './base-user.resolver';
import { HumanRessourceAdminService } from './human-ressources-admin.service';
import { TollAdminResolver } from './toll-admin.resolver';
import { TollAdminService } from './toll-admin.service';
import { GateAdminService } from './gate-admin.service';
import { ModeratorService } from './moderator.service';

@Module({
  providers: [
    BaseUserService,
    HumanRessourceAdminService,
    TollAdminService,
    GateAdminService,
    ModeratorService,
    BaseUserResolver,
    TollAdminResolver,
  ],
  exports: [BaseUserService],
})
export class BaseUserModule {}
