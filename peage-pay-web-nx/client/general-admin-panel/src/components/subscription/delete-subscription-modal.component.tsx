import { useMutation } from '@apollo/client';
import {
  faExclamationCircle,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button, Alert, LoaderDots } from '@peage-pay-web/ui';
import { RefObject } from 'react';
import { DELETE_SUBSCRIPTION } from '../../graphql/mutations';
import { SubscriptionType } from '../../__generated__/graphql';
import { SUBSCRIPTION_LIST } from '../../graphql/queries';

interface DeleteSubscriptionModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  subscription: SubscriptionType;
}

const DeleteSubscriptionModal = ({
  modalRef,
  subscription,
}: DeleteSubscriptionModalProps) => {
  const [deleteSubscription, { loading, error }] = useMutation(
    DELETE_SUBSCRIPTION,
    {
      onCompleted(data, clientOptions) {
        modalRef.current?.close();
      },
      refetchQueries: [SUBSCRIPTION_LIST],
      awaitRefetchQueries: true,
    },
  );

  const handleDelete = () => {
    deleteSubscription({
      variables: {
        deleteSubscriptionInput: {
          subscriptionId: subscription.id,
        },
      },
    });
  };

  return (
    <Modal modalRef={modalRef}>
      <Modal.Window>
        <Modal.Header>Delete highway</Modal.Header>
        <Modal.Content>
          Are you sure you want to dete this subscription
          {error ? (
            <Alert variant={'error'} className="mb-[0.5rem]">
              <Alert.Icon position={'left'}>
                <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
              </Alert.Icon>
              <Alert.Content>{`auth:errors.${error.message}`}</Alert.Content>
            </Alert>
          ) : null}
        </Modal.Content>
        <Modal.Footer className="justify-end">
          <Button
            onClick={() => modalRef.current?.close()}
            variant={'base-200'}
          >
            <Button.Icon position={'left'}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </Button.Icon>
            <Button.Content>Close</Button.Content>
          </Button>
          <Button
            className="ml-[0.5rem]"
            onClick={handleDelete}
            variant={'error'}
          >
            {loading ? (
              <LoaderDots dotProps={{ variant: 'color-content' }}></LoaderDots>
            ) : (
              <>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Delete</Button.Content>
              </>
            )}
          </Button>
        </Modal.Footer>
      </Modal.Window>
    </Modal>
  );
};

export default DeleteSubscriptionModal;
