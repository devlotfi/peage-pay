import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { RedisModule } from './redis/redis.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { SmsModule } from './sms/sms.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validateEnv } from './config/validate-env';
import { UserModule } from './user/user.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthErrors } from './auth/auth-errors';
import { BullModule } from '@nestjs/bull';
import { Env } from './config/env.type';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      validate: validateEnv,
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      async useFactory(...args: [ConfigService<Env>]) {
        const configService = args[0];
        const redisUrl = configService.getOrThrow<string>('REDIS_URL');

        return {
          url: redisUrl
        };
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      buildSchemaOptions: {
        orphanedTypes: [AuthErrors],
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    DatabaseModule,
    RedisModule,
    AuthModule,
    EmailModule,
    SmsModule,
    UserModule,
  ],
})
export class AppModule {}
