import { useMutation } from "@apollo/client";
import {
  faExclamationCircle,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Alert, LoaderDots } from "@peage-pay-web/ui";
import { RefObject } from "react";
import { DELETE_HIGHWAY } from "../../graphql/mutations";
import { HighwayType } from "../../__generated__/graphql";
import { HIGHWAY_LIST } from "../../graphql/queries";

interface DeleteHighwayModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  highway: HighwayType;
}

const DeleteHighwayModal = ({ modalRef, highway }: DeleteHighwayModalProps) => {
  const [deleteHighway, { loading, error }] = useMutation(DELETE_HIGHWAY, {
    onCompleted() {
      modalRef.current?.close();
    },
    refetchQueries: [HIGHWAY_LIST],
    awaitRefetchQueries: true,
  });

  const handleDelete = () => {
    deleteHighway({
      variables: {
        deleteHighwayInput: {
          highwayId: highway.id,
        },
      },
    });
  };

  return (
    <Modal modalRef={modalRef}>
      <Modal.Window>
        <Modal.Header>Delete highway</Modal.Header>
        <Modal.Content>
          Are you sure you want to dete this highway
          {error ? (
            <Alert variant={"error"} className="mb-[0.5rem]">
              <Alert.Icon position={"left"}>
                <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
              </Alert.Icon>
              <Alert.Content>{`auth:errors.${error.message}`}</Alert.Content>
            </Alert>
          ) : null}
        </Modal.Content>
        <Modal.Footer className="justify-end">
          <Button
            onClick={() => modalRef.current?.close()}
            variant={"base-200"}
          >
            <Button.Icon position={"left"}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </Button.Icon>
            <Button.Content>Close</Button.Content>
          </Button>
          <Button
            className="ml-[0.5rem]"
            onClick={handleDelete}
            variant={"error"}
          >
            {loading ? (
              <LoaderDots dotProps={{ variant: "color-content" }}></LoaderDots>
            ) : (
              <>
                <Button.Icon position={"left"}>
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

export default DeleteHighwayModal;
