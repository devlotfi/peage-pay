import { useMutation } from '@apollo/client';
import {
  faExclamationCircle,
  faTimes,
  faUserMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button, Alert, LoaderDots } from '@peage-pay-web/ui';
import { RefObject } from 'react';
import { BaseUserType } from '../../__generated__/graphql';
import { BASE_USER_LIST } from '../../graphql/queries';
import { DELETE_BASE_USER } from '../../graphql/mutations';

interface DeleteBaseUserModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  baseUser: BaseUserType;
}

const DeleteBaseUserModal = ({
  modalRef,
  baseUser,
}: DeleteBaseUserModalProps) => {
  const [deleteBaseUser, { loading, error }] = useMutation(DELETE_BASE_USER, {
    onCompleted() {
      modalRef.current?.close();
    },
    refetchQueries: [BASE_USER_LIST],
    awaitRefetchQueries: true,
  });

  const handleDelete = () => {
    deleteBaseUser({
      variables: {
        deleteBaseUserInput: {
          id: baseUser.id,
        },
      },
    });
  };

  return (
    <Modal modalRef={modalRef}>
      <Modal.Window>
        <Modal.Header>Delete user</Modal.Header>
        <Modal.Content>
          Are you sure you want to delete the user {baseUser.firstName}{' '}
          {baseUser.lastName}
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
                  <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
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

export default DeleteBaseUserModal;
