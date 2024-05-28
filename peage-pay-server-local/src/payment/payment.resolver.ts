import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { DepositAmountInput } from './input/deposit-amount.input.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';
import { ContextAccessTokenPayload } from 'src/shared/decorators/context-access-token-payload.decorator';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { PaymentMessagesPrefixes } from './payment-messages-prefixes';
import { pubSub } from 'src/shared/pub-sub';

@Resolver()
export class PaymentResolver {
  public constructor(private readonly paymentService: PaymentService) {}

  @Mutation(() => String)
  @AllowRoles([BaseUserRolesType.USER])
  @UseGuards(AuthGuard)
  public async depositAmount(
    @Args('depositAmountInput') depositAmountInput: DepositAmountInput,
    @ContextAccessTokenPayload() userAccessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.paymentService.depositAmount(
      depositAmountInput,
      userAccessTokenPayload,
    );
  }

  @Subscription(() => Boolean)
  public paymentSuccessful(
    @Args('paymentSuccessfulInput') paymentSuccessfulInput: IdInput,
  ) {
    return pubSub.asyncIterator(
      PaymentMessagesPrefixes.PAYMENT_SUCCESSFUL(paymentSuccessfulInput.id),
    );
  }

  @Subscription(() => Boolean)
  public paymentFailed(
    @Args('paymentFailedInput') paymentFailedInput: IdInput,
  ) {
    return pubSub.asyncIterator(
      PaymentMessagesPrefixes.PAYMENT_FAILED(paymentFailedInput.id),
    );
  }
}
