import { Module } from '@nestjs/common';
import { HumanRessourcesAdminService } from './human-ressources-admin.service';
import { HumanRessourcesAdminResolver } from './human-ressources-admin.resolver';

@Module({
  providers: [HumanRessourcesAdminService, HumanRessourcesAdminResolver]
})
export class HumanRessourcesAdminModule {}
