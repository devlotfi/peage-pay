import { Global, Module } from '@nestjs/common';
import { UserTokenService } from './user-token.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AutomaticGateTokenService } from './automatic-gate-token.service';

@Global()
@Module({
  imports: [ConfigModule, UserModule, JwtModule.register({})],
  providers: [UserTokenService, AutomaticGateTokenService],
  exports: [UserTokenService],
})
export class TokenModule {}
