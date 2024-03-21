import { useMutation } from '@apollo/client';
import {
  faExclamationCircle,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button, Alert, LoaderDots } from '@peage-pay-web/ui';
import { RefObject } from 'react';
import { DELETE_TOLL_NETWORK } from '../../graphql/mutations';
import { TollNetworkType } from '../../__generated__/graphql';
import { TOLL_NETWORK_LIST } from '../../graphql/queries';

interface DeleteTollNetworkModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  tollNetwork: TollNetworkType;
}

const DeleteTollNetworkModal = ({
  modalRef,
  tollNetwork,
}: DeleteTollNetworkModalProps) => {
  const [deleteTollNetwork, { loading, error }] = useMutation(
    DELETE_TOLL_NETWORK,
    {
      onCompleted(data, clientOptions) {
        modalRef.current?.close();
      },
      refetchQueries: [TOLL_NETWORK_LIST],
      awaitRefetchQueries: true,
    },
  );

  const handleDelete = () => {
    deleteTollNetwork({
      variables: {
        deleteTollNetworkInput: {
          tollNetworkId: tollNetwork.id,
        },
      },
    });
  };

  return (
    <Modal modalRef={modalRef}>
      <Modal.Window>
        <Modal.Header>Delete toll network</Modal.Header>
        <Modal.Content>
          Are you sure you want to dete this toll network
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

export default DeleteTollNetworkModal;
