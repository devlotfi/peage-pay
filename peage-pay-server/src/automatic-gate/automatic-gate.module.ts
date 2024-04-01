import { Module } from '@nestjs/common';
import { AutomaticGateService } from './automatic-gate.service';
import { AutomaticGateResolver } from './automatic-gate.resolver';
import { UserModule } from 'src/user/user.module';
import { TokenModule } from 'src/token/token.module';

@Module({
  imports: [UserModule, TokenModule],
  providers: [AutomaticGateService, AutomaticGateResolver],
})
export class AutomaticGateModule {}
