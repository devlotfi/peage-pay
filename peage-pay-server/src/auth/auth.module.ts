import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { EmailModule } from 'src/email/email.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { RedisModule } from 'src/redis/redis.module';
import { AuthRedisService } from './auth-redis.service';
import { EmailAuthService } from './email-auth.service';
import { TokenAuthService } from './token-auth.service';
import { GoogleAuthService } from './google-auth.service';
import { SmsModule } from 'src/sms/sms.module';
import { BaseUserModule } from 'src/base-user/base-user.module';

@Module({
  imports: [
    EmailModule,
    SmsModule,
    ConfigModule,
    RedisModule,
    BaseUserModule,
    JwtModule.register({}),
  ],
  providers: [
    AuthResolver,
    EmailAuthService,
    GoogleAuthService,
    TokenAuthService,
    AuthRedisService,
  ],
})
export class AuthModule {}
