import { useMutation } from '@apollo/client';
import {
  faExclamationCircle,
  faTimes,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button, Alert, LoaderDots } from '@peage-pay-web/ui';
import { RefObject } from 'react';
import { ADD_HUMAN_RESSOURCES_ADMIN_ROLE } from '../../graphql/mutations';
import { BaseUserType } from '../../__generated__/graphql';
import { BASE_USER_LIST } from '../../graphql/queries';
import { useTranslation } from 'react-i18next';

interface AddHumanRessourcesAdminRoleModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  baseUser: BaseUserType;
}

const AddHumanRessourcesAdminRoleModal = ({
  modalRef,
  baseUser,
}: AddHumanRessourcesAdminRoleModalProps) => {
  const { t } = useTranslation();
  const [addHumanRessourcesAdminRole, { loading, error }] = useMutation(
    ADD_HUMAN_RESSOURCES_ADMIN_ROLE,
    {
      onCompleted() {
        modalRef.current?.close();
      },
      refetchQueries: [BASE_USER_LIST],
      awaitRefetchQueries: true,
    },
  );

  const handleAdd = () => {
    addHumanRessourcesAdminRole({
      variables: {
        addHumanRessoucesAdminRoleInput: {
          id: baseUser.id,
        },
      },
    });
  };

  return (
    <Modal modalRef={modalRef}>
      <Modal.Window>
        <Modal.Header>{t('ADD_ROLE')}</Modal.Header>
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
                  <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>{t('ADD')}</Button.Content>
              </>
            )}
          </Button>
        </Modal.Footer>
      </Modal.Window>
    </Modal>
  );
};

export default AddHumanRessourcesAdminRoleModal;
