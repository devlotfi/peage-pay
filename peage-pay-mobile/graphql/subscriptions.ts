import { gql } from '../__generated__';

export const PAYMENT_SUCCESSFUL = gql(`
  subscription PAYMENT_SUCCESSFUL($paymentSuccessfulInput: IdInput!) {
    paymentSuccessful(paymentSuccessfulInput: $paymentSuccessfulInput)
  }
`);

export const PAYMENT_FAILED = gql(`
  subscription PAYMENT_FAILED($paymentFailedInput: IdInput!) {
    paymentFailed(paymentFailedInput: $paymentFailedInput)
  }
`);
