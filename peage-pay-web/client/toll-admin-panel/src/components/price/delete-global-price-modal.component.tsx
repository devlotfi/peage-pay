import { useMutation } from '@apollo/client';
import {
  faExclamationCircle,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button, Alert, LoaderDots } from '@peage-pay-web/ui';
import { RefObject } from 'react';
import { PriceType } from '../../__generated__/graphql';
import { DELETE_LOCAL_PRICE } from '../../graphql/mutations';
import { useTranslation } from 'react-i18next';

interface DeleteLocalPriceModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  price: PriceType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetchList: any;
}

const DeleteLocalPriceModal = ({
  modalRef,
  price,
  refetchList,
}: DeleteLocalPriceModalProps) => {
  const { t } = useTranslation();
  const [deleteLocalPrice, { loading, error }] = useMutation(
    DELETE_LOCAL_PRICE,
    {
      onCompleted() {
        modalRef.current?.close();
      },
      refetchQueries: [refetchList],
      awaitRefetchQueries: true,
    },
  );

  const handleDelete = () => {
    deleteLocalPrice({
      variables: {
        deletePriceInput: {
          id: price.id,
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

export default DeleteLocalPriceModal;
