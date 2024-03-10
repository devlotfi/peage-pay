import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { RedisModule } from './redis/redis.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { SmsModule } from './sms/sms.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validateEnv } from './shared/config/validate-env';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthErrors } from './auth/graphql/auth-errors.gql';
import { BullModule } from '@nestjs/bull';
import { Env } from './shared/config/env.type';
import { BaseUserErrors } from './base-user/graphql/base-user-errors.gql';
import { TokenModule } from './token/token.module';
import { HighwayModule } from './highway/highway.module';
import { HighwayErrors } from './highway/graphql/highway-errors.gql';
import { SubscriptionModule } from './subscription/subscription.module';
import { HumanRessourcesAdminModule } from './human-ressources-admin/human-ressources-admin.module';
import { TokenErrors } from './token/graphql/token-errors.gql';
import { TollModule } from './toll/toll.module';
import { BaseUserModule } from './base-user/base-user.module';
import { WilayaModule } from './wilaya/wilaya.module';
import { TollErrors } from './toll/graphql/toll-errors.gql';
import { AdjacentTollDistanceModule } from './adjacent-toll-distance/adjacent-toll-distance.module';
import { PriceModule } from './price/price.module';
import { TollNetworkModule } from './toll-network/toll-network.module';
import { TollDistanceModule } from './toll-distance/toll-distance.module';
import { HighwaySearchFields } from './highway/graphql/highway-search-fields.gql';
import { TollNetworkSearchFields } from './toll-network/graphql/toll-network-search-fields.gql';
import { TollSearchFields } from './toll/graphql/toll-search-fields.gql';
import { SubscriptionSearchFields } from './subscription/graphql/subscription-search-fields.gql';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: validateEnv,
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      useFactory(...args) {
        const configService: ConfigService<Env> = args[0];
        return {
          redis: {
            username: configService.getOrThrow<string>('REDIS_USERNAME'),
            password: configService.getOrThrow<string>('REDIS_PASSWORD'),
            host: configService.getOrThrow<string>('REDIS_HOST'),
            port: configService.getOrThrow<string>('REDIS_PORT'),
          },
        };
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      buildSchemaOptions: {
        orphanedTypes: [
          AuthErrors,
          BaseUserErrors,
          HighwayErrors,
          TokenErrors,
          TollErrors,

          HighwaySearchFields,
          TollNetworkSearchFields,
          TollSearchFields,
          SubscriptionSearchFields,
        ],
      },
      context: ({ req, res }) => ({ req, res }),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    DatabaseModule,
    RedisModule,
    AuthModule,
    EmailModule,
    SmsModule,
    TokenModule,
    HighwayModule,
    SubscriptionModule,
    HumanRessourcesAdminModule,
    TollModule,
    BaseUserModule,
    WilayaModule,
    AdjacentTollDistanceModule,
    PriceModule,
    TollNetworkModule,
    TollDistanceModule,
  ],
})
export class AppModule {}
