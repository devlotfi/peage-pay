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
import { TokenModule } from './token/token.module';
import { HighwayModule } from './highway/highway.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { TokenErrors } from './token/graphql/token-errors.gql';
import { TollModule } from './toll/toll.module';
import { WilayaModule } from './wilaya/wilaya.module';
import { PriceModule } from './price/price.module';
import { TollNetworkModule } from './toll-network/toll-network.module';
import { HighwaySearchFields } from './highway/graphql/highway-search-fields.gql';
import { TollNetworkSearchFields } from './toll-network/graphql/toll-network-search-fields.gql';
import { TollSearchFields } from './toll/graphql/toll-search-fields.gql';
import { SubscriptionSearchFields } from './subscription/graphql/subscription-search-fields.gql';
import { WilayaSearchFields } from './wilaya/graphql/wilaya-search-fields.gql';
import { SectionModule } from './section/section.module';
import { TollDistanceModule } from './toll-distance/toll-distance.module';
import { PriceErrors } from './price/graphql/price-errors.gql';
import { PrismaErrors } from './shared/graphql/prisma-errors.gql';
import { BaseUserErrors } from './user/graphql/base-user-errors.gql';
import { BaseUserSearchFields } from './user/graphql/base-user-search-fields.gql';
import { UserModule } from './user/user.module';
import { RfidTagModule } from './rfid-tag/rfid-tag.module';
import { RfidTagSearchFields } from './rfid-tag/graphql/rfid-tag-search-fields.gql';
import { AutomaticGateModule } from './automatic-gate/automatic-gate.module';
import { AutomaticGateSearchFields } from './automatic-gate/graphql/automatic-gate-search-fields.gql';
import { TicketModule } from './ticket/ticket.module';
import { CodeModule } from './code/code.module';
import { DepositModule } from './deposit/deposit.module';
import { TripModule } from './trip/trip.module';
import { ChargilyModule } from './chargily/chargily.module';
import { PaymentModule } from './payment/payment.module';
import { PaymentSubscriptionMessages } from './payment/graphql/payment-subscription-messages.gql';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: validateEnv,
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory(...args) {
        const configService: ConfigService<Env> = args[0];
        return {
          url: configService.getOrThrow<string>('REDIS_URL'),
        };
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      subscriptions: {
        'graphql-ws': true,
      },
      buildSchemaOptions: {
        orphanedTypes: [
          AuthErrors,
          BaseUserErrors,
          TokenErrors,
          PriceErrors,
          PrismaErrors,

          HighwaySearchFields,
          TollNetworkSearchFields,
          TollSearchFields,
          SubscriptionSearchFields,
          WilayaSearchFields,
          BaseUserSearchFields,
          RfidTagSearchFields,
          AutomaticGateSearchFields,

          PaymentSubscriptionMessages,
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
    TollModule,
    UserModule,
    WilayaModule,
    SectionModule,
    PriceModule,
    TollNetworkModule,
    TollDistanceModule,
    RfidTagModule,
    AutomaticGateModule,
    TicketModule,
    CodeModule,
    DepositModule,
    TripModule,
    ChargilyModule,
    PaymentModule,
  ],
})
export class AppModule {}
