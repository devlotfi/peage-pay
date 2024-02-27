import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { EmailModule } from 'src/email/email.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TokenModule } from 'src/token/token.module';
import { RedisModule } from 'src/redis/redis.module';
import { AuthRedisService } from './auth-redis.service';
import { EmailAuthService } from './email-auth.service';
import { TokenAuthService } from './token-auth.service';
import { GoogleAuthService } from './google-auth.service';
import { PhoneAuthService } from './phone-auth.service';

@Module({
  imports: [
    DatabaseModule,
    EmailModule,
    ConfigModule,
    TokenModule,
    RedisModule,
    JwtModule.register({}),
  ],
  providers: [
    AuthResolver,
    EmailAuthService,
    GoogleAuthService,
    PhoneAuthService,
    TokenAuthService,
    AuthRedisService,
  ],
})
export class AuthModule {}
