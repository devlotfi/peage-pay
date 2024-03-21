import { useMutation } from "@apollo/client";
import {
  faExclamationCircle,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Alert, LoaderDots } from "@peage-pay-web/ui";
import { RefObject } from "react";
import { SectionType } from "../../__generated__/graphql";
import { DELETE_SECTION } from "../../graphql/mutations";
import { SECTION_LIST_FOR_TOLL } from "../../graphql/queries";

interface DeleteSectionModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  section: SectionType;
}

const DeleteSectionModal = ({ modalRef, section }: DeleteSectionModalProps) => {
  const [deleteSection, { loading, error }] = useMutation(DELETE_SECTION, {
    onCompleted() {
      modalRef.current?.close();
    },
    refetchQueries: [SECTION_LIST_FOR_TOLL],
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
        <Modal.Header>Delete highway</Modal.Header>
        <Modal.Content>
          Are you sure you want to dete this section
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

export default DeleteSectionModal;
