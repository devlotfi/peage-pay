import { Global, Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { BaseUserModule } from 'src/base-user/base-user.module';

@Global()
@Module({
  imports: [ConfigModule, BaseUserModule, JwtModule.register({})],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
