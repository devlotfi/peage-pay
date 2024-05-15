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
import { REMOVE_TOLL_ADMIN_ROLE } from '../../graphql/mutations';
import { useTranslation } from 'react-i18next';

interface RemoveTollAdminRoleModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  baseUser: BaseUserType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetchQuery: any;
}

const RemoveTollAdminRoleModal = ({
  modalRef,
  baseUser,
  refetchQuery,
}: RemoveTollAdminRoleModalProps) => {
  const { t } = useTranslation();
  const [removeTollAdminRole, { loading, error }] = useMutation(
    REMOVE_TOLL_ADMIN_ROLE,
    {
      onCompleted() {
        modalRef.current?.close();
      },
      refetchQueries: [refetchQuery],
      awaitRefetchQueries: true,
    },
  );

  const handleAdd = () => {
    removeTollAdminRole({
      variables: {
        removeTollAdminRoleInput: {
          id: baseUser.id,
        },
      },
    });
  };

  return (
    <Modal modalRef={modalRef}>
      <Modal.Window>
        <Modal.Header>{t('REMOVE_TOLL_ADMIN_ROLE')}</Modal.Header>
        <Modal.Content>
          {t('CONFIRM_MODIFICATION')}
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
            <Button.Content>{t('CLOSE')}</Button.Content>
          </Button>
          <Button
            className="ml-[0.5rem]"
            onClick={handleAdd}
            variant={'primary'}
          >
            {loading ? (
              <LoaderDots dotProps={{ variant: 'color-content' }}></LoaderDots>
            ) : (
              <>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>{t('REMOVE')}</Button.Content>
              </>
            )}
          </Button>
        </Modal.Footer>
      </Modal.Window>
    </Modal>
  );
};

export default RemoveTollAdminRoleModal;
