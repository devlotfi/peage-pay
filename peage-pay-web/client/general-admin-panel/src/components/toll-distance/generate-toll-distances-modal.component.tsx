import { useMutation } from '@apollo/client';
import {
  faExclamationCircle,
  faRecycle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button, Alert, LoaderDots } from '@peage-pay-web/ui';
import { RefObject } from 'react';
import { GENERATE_TOLL_DISTANCES } from '../../graphql/mutations';
import { TOLL_DISTANCE_LIST } from '../../graphql/queries';

interface GenerateTollDistancesModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  tollNetworkId: string;
}

const GenerateTollDistancesModal = ({
  modalRef,
  tollNetworkId,
}: GenerateTollDistancesModalProps) => {
  const [generateTollDistances, { loading, error }] = useMutation(
    GENERATE_TOLL_DISTANCES,
    {
      onCompleted() {
        modalRef.current?.close();
      },
      refetchQueries: [TOLL_DISTANCE_LIST],
      awaitRefetchQueries: true,
    },
  );

  const handleDelete = () => {
    generateTollDistances({
      variables: {
        generateTollDistancesInput: {
          id: tollNetworkId,
        },
      },
    });
  };

  return (
    <Modal modalRef={modalRef}>
      <Modal.Window>
        <Modal.Header>Generate toll distances</Modal.Header>
        <Modal.Content>
          Are you sure you want to generate toll distances
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
            variant={'primary'}
          >
            {loading ? (
              <LoaderDots dotProps={{ variant: 'color-content' }}></LoaderDots>
            ) : (
              <>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faRecycle}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Generate</Button.Content>
              </>
            )}
          </Button>
        </Modal.Footer>
      </Modal.Window>
    </Modal>
  );
};

export default GenerateTollDistancesModal;
