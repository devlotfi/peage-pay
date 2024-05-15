import { useMutation } from '@apollo/client';
import {
  faExclamationCircle,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button, Alert, LoaderDots } from '@peage-pay-web/ui';
import { RefObject } from 'react';
import { SectionType } from '../../__generated__/graphql';
import { DELETE_SECTION } from '../../graphql/mutations';
import {
  SECTION_LIST_FOR_TOLL_NETWORK,
  SECTION_LIST_FOR_TOLL_NETWORK_PAGINATED,
} from '../../graphql/queries';
import { useTranslation } from 'react-i18next';

interface DeleteSectionModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  section: SectionType;
}

const DeleteSectionModal = ({ modalRef, section }: DeleteSectionModalProps) => {
  const { t } = useTranslation();
  const [deleteSection, { loading, error }] = useMutation(DELETE_SECTION, {
    onCompleted() {
      modalRef.current?.close();
    },
    refetchQueries: [
      SECTION_LIST_FOR_TOLL_NETWORK_PAGINATED,
      SECTION_LIST_FOR_TOLL_NETWORK,
    ],
    awaitRefetchQueries: true,
  });

  const handleDelete = () => {
    deleteSection({
      variables: {
        deleteSectionInput: {
          fromTollId: section.fromToll.id,
          toTollId: section.toToll.id,
        },
      },
    });
  };

  return (
    <Modal modalRef={modalRef}>
      <Modal.Window>
        <Modal.Header>{t('DELETION')}</Modal.Header>
        <Modal.Content>
          {t('DELETE_CONFIRM')}
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
                <Button.Content>{t('DELETE')}</Button.Content>
              </>
            )}
          </Button>
        </Modal.Footer>
      </Modal.Window>
    </Modal>
  );
};

export default DeleteSectionModal;
