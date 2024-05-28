import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { EmailModule } from 'src/email/email.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { EmailAuthService } from './email-auth.service';
import { TokenAuthService } from './token-auth.service';
import { GoogleAuthService } from './google-auth.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [EmailModule, ConfigModule, UserModule, JwtModule.register({})],
  providers: [
    AuthResolver,
    EmailAuthService,
    GoogleAuthService,
    TokenAuthService,
  ],
})
export class AuthModule {}
