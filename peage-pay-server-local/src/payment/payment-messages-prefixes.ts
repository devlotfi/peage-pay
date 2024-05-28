import { PaymentSubscriptionMessages } from './graphql/payment-subscription-messages.gql';

export abstract class PaymentMessagesPrefixes {
  public static PAYMENT_SUCCESSFUL(baseUserId: string): string {
    return `${PaymentSubscriptionMessages.PAYMENT_SUCCESSFUL}:${baseUserId}`;
  }

  public static PAYMENT_FAILED(baseUserId: string): string {
    return `${PaymentSubscriptionMessages.PAYMENT_FAILED}:${baseUserId}`;
  }
}
