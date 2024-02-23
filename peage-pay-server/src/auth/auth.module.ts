import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { DatabaseModule } from 'src/database/database.module';
import { EmailModule } from 'src/email/email.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TokenModule } from 'src/token/token.module';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [
    DatabaseModule,
    EmailModule,
    ConfigModule,
    TokenModule,
    RedisModule,
    JwtModule.register({}),
  ],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
