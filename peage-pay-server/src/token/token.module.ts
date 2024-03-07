import { Global, Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

@Global()
@Module({
  imports: [ConfigModule, UserModule, JwtModule.register({})],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
