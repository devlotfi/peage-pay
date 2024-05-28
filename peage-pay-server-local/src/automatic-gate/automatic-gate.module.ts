import { Module } from '@nestjs/common';
import { AutomaticGateService } from './automatic-gate.service';
import { AutomaticGateResolver } from './automatic-gate.resolver';
import { UserModule } from 'src/user/user.module';
import { TokenModule } from 'src/token/token.module';
import { TollModule } from 'src/toll/toll.module';

@Module({
  imports: [UserModule, TokenModule, TollModule],
  providers: [AutomaticGateService, AutomaticGateResolver],
})
export class AutomaticGateModule {}
