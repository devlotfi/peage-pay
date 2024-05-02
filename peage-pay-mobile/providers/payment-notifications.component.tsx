import { useApolloClient, useSubscription } from '@apollo/client';
import { PropsWithChildren, useContext, useState } from 'react';
import { PAYMENT_FAILED, PAYMENT_SUCCESSFUL } from '../graphql/subscriptions';
import { AuthContext } from '../context/auth.context';
import { DEPOSIT_LIST, USER_INFO } from '../graphql/queries';
import PaymentSuccessfulModal from '../components/payment/payment-successful-modal.component';

const PaymentNotificationsProvider = ({ children }: PropsWithChildren) => {
  const { authData } = useContext(AuthContext);
  const apolloClient = useApolloClient();
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  useSubscription(PAYMENT_SUCCESSFUL, {
    onData() {
      console.log('payment successful');
      apolloClient.refetchQueries({
        include: [USER_INFO, DEPOSIT_LIST],
      });
      setShowSuccessModal(true);
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

  return (
    <>
      {showSuccessModal ? (
        <PaymentSuccessfulModal
          onClose={() => setShowSuccessModal(false)}
        ></PaymentSuccessfulModal>
      ) : null}
      {children}
    </>
  );
};

export default PaymentNotificationsProvider;
