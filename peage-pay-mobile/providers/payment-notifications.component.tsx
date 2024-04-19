import { useSubscription } from '@apollo/client';
import { PropsWithChildren, useContext } from 'react';
import { PAYMENT_FAILED, PAYMENT_SUCCESSFUL } from '../graphql/subscriptions';
import { AuthContext } from '../context/auth.context';

const PaymentNotificationsProvider = ({ children }: PropsWithChildren) => {
  const { authData } = useContext(AuthContext);

  useSubscription(PAYMENT_SUCCESSFUL, {
    onData() {
      console.log('payment successful');
    },
    variables: {
      paymentSuccessfulInput: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        id: authData?.baseUser.id as any,
      },
    },
    shouldResubscribe: true,
    skip: !authData,
  });
  useSubscription(PAYMENT_FAILED, {
    onData() {
      console.log('payment failed');
    },
    shouldResubscribe: true,
    variables: {
      paymentFailedInput: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        id: authData?.baseUser.id as any,
      },
    },
    skip: !authData,
  });

  return children;
};

export default PaymentNotificationsProvider;
