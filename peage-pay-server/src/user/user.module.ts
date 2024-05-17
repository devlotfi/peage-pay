import { Module } from '@nestjs/common';
import { BaseUserService } from './base-user.service';
import { BaseUserResolver } from './base-user.resolver';
import { HumanRessourcesAdminService } from './human-ressources-admin.service';
import { TollAdminResolver } from './toll-admin.resolver';
import { TollAdminService } from './toll-admin.service';
import { GateAdminService } from './gate-admin.service';
import { ModeratorService } from './moderator.service';
import { GateAdminResolver } from './gate-admin.resolver';
import { ModeratorResolver } from './moderator.resolver';
import { HumanRessourcesAdminResolver } from './human-ressources-admin.resolver';
import { TollModule } from 'src/toll/toll.module';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { TripModule } from 'src/trip/trip.module';
import { TokenModule } from 'src/token/token.module';

@Module({
  imports: [TollModule, TripModule],
  providers: [
    BaseUserService,
    HumanRessourcesAdminService,
    TollAdminService,
    GateAdminService,
    ModeratorService,
    BaseUserResolver,
    TollAdminResolver,
    GateAdminResolver,
    ModeratorResolver,
    UserResolver,
    UserService,
    HumanRessourcesAdminResolver,
  ],
  exports: [
    BaseUserService,
    HumanRessourcesAdminService,
    TollAdminService,
    GateAdminService,
    ModeratorService,
  ],
})
export class UserModule {}
