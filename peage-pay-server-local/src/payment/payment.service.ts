import { BadRequestException, Injectable } from '@nestjs/common';
import { ChargilyService } from 'src/chargily/chargily.service';
import { DepositAmountInput } from './input/deposit-amount.input.gql';
import { Request } from 'express';
import { createHmac } from 'crypto';
import { ConfigService } from '@nestjs/config';
import { Env } from 'src/shared/config/env.type';
import { RedisService } from 'src/redis/redis.service';
import { PaymentMessagesPrefixes } from './payment-messages-prefixes';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PaymentService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly chargilyService: ChargilyService,
    private readonly configService: ConfigService<Env>,
    private readonly redisService: RedisService,
  ) {}

  public async depositAmount(
    depositAmountInput: DepositAmountInput,
    userAccessTokenPayload: UserAccessTokenPayload,
  ): Promise<string> {
    const checkout = await this.chargilyService.client.createCheckout({
      success_url: 'http://localhost:3000',
      amount: depositAmountInput.amount,
      currency: 'dzd',
      locale: 'fr',
      webhook_endpoint: this.configService.getOrThrow<string>(
        'CHARGILY_WEBHOOK_URL',
      ),
      pass_fees_to_customer: true,
      metadata: {
        baseUserId: userAccessTokenPayload.userId,
      },
    });
    return checkout.checkout_url;
  }

  public async handleWebHook(checkout: any, req: Request): Promise<string> {
    const signature = req.get('signature');
    const payload = JSON.stringify(req.body);
    if (!signature) {
      console.log('bad request');
      throw new BadRequestException();
    }

    const computedSignature = createHmac(
      'sha256',
      this.configService.getOrThrow<string>('CHARGILY_PAY_SECRET_KEY'),
    )
      .update(payload)
      .digest('hex');

    console.log(computedSignature, '//', signature);

    if (computedSignature !== signature) {
      //throw new ForbiddenException();
    }
    console.log(checkout);

    switch (checkout.type) {
      case 'checkout.paid':
        console.log('successful payment');

        await this.databaseService.$transaction([
          this.databaseService.user.update({
            data: {
              balance: {
                increment: checkout.data.amount,
              },
            },
            where: {
              baseUserId: checkout.data.metadata.baseUserId,
            },
          }),
          this.databaseService.deposit.create({
            data: {
              amount: checkout.data.amount,
              baseUserId: checkout.data.metadata.baseUserId,
            },
          }),
        ]);
        this.redisService.pubSubClient.publish(
          PaymentMessagesPrefixes.PAYMENT_SUCCESSFUL(
            checkout.data.metadata.baseUserId,
          ),
          {
            paymentSuccessful: true,
          },
        );
        break;
      case 'checkout.failed':
        this.redisService.pubSubClient.publish(
          PaymentMessagesPrefixes.PAYMENT_FAILED(
            checkout.data.metadata.baseUserId,
          ),
          {
            paymentFailed: true,
          },
        );
        break;
    }

    return 'Payment recieved';
  }
}
