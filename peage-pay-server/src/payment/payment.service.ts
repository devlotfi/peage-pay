import { Injectable } from '@nestjs/common';
import { ChargilyService } from 'src/chargily/chargily.service';
import { DepositAmountInput } from './input/deposit-amount.input.gql';

@Injectable()
export class PaymentService {
  public constructor(private readonly chargilyService: ChargilyService) {}

  public async depositAmount(
    depositAmountInput: DepositAmountInput,
  ): Promise<string> {
    const checkout = await this.chargilyService.client.createCheckout({
      success_url: 'http://localhost:3000',
      amount: depositAmountInput.amount,
      currency: 'dzd',
      pass_fees_to_customer: true,
    });
    return checkout.checkout_url;
  }
}
