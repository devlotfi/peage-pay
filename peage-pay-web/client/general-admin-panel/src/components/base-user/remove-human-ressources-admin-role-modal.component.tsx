import { useMutation } from "@apollo/client";
import {
  faExclamationCircle,
  faTimes,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Alert, LoaderDots } from "@peage-pay-web/ui";
import { RefObject } from "react";
import { REMOVE_HUMAN_RESSOURCES_ADMIN_ROLE } from "../../graphql/mutations";
import { BaseUserType } from "../../__generated__/graphql";
import { BASE_USER_LIST } from "../../graphql/queries";

interface RemoveHumanRessourcesAdminRoleModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  baseUser: BaseUserType;
}

const RemoveHumanRessourcesAdminRoleModal = ({
  modalRef,
  baseUser,
}: RemoveHumanRessourcesAdminRoleModalProps) => {
  const [removeHumanRessourcesAdminRole, { loading, error }] = useMutation(
    REMOVE_HUMAN_RESSOURCES_ADMIN_ROLE,
    {
      onCompleted() {
        modalRef.current?.close();
      },
      refetchQueries: [BASE_USER_LIST],
      awaitRefetchQueries: true,
    }
  );

  const handleRemove = () => {
    removeHumanRessourcesAdminRole({
      variables: {
        removeHumanRessoucesAdminRoleInput: {
          id: baseUser.id,
        },
      },
    });
  };

  return (
    <Modal modalRef={modalRef}>
      <Modal.Window>
        <Modal.Header>Remove role</Modal.Header>
        <Modal.Content>
          Are you sure you want to remove the "Human ressources admin" role to
          this user
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
            onClick={handleRemove}
            variant={"primary"}
          >
            {loading ? (
              <LoaderDots dotProps={{ variant: "color-content" }}></LoaderDots>
            ) : (
              <>
                <Button.Icon position={"left"}>
                  <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Remove</Button.Content>
              </>
            )}
          </Button>
        </Modal.Footer>
      </Modal.Window>
    </Modal>
  );
};

export default RemoveHumanRessourcesAdminRoleModal;
