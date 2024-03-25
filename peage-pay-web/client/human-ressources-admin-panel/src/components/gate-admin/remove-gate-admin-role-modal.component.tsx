import { useMutation } from "@apollo/client";
import {
  faExclamationCircle,
  faTimes,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Alert, LoaderDots } from "@peage-pay-web/ui";
import { RefObject } from "react";
import { BaseUserType } from "../../__generated__/graphql";
import { REMOVE_GATE_ADMIN_ROLE } from "../../graphql/mutations";

interface RemoveGateAdminRoleModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  baseUser: BaseUserType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetchQuery: any;
}

const RemoveGateAdminRoleModal = ({
  modalRef,
  baseUser,
  refetchQuery,
}: RemoveGateAdminRoleModalProps) => {
  const [removeGateAdminRole, { loading, error }] = useMutation(
    REMOVE_GATE_ADMIN_ROLE,
    {
      onCompleted() {
        modalRef.current?.close();
      },
      refetchQueries: [refetchQuery],
      awaitRefetchQueries: true,
    }
  );

  const handleRemove = () => {
    removeGateAdminRole({
      variables: {
        changeTollInput: {
          baseUserId: baseUser.id,
        },
      },
    });
  };

  return (
    <Modal modalRef={modalRef}>
      <Modal.Window>
        <Modal.Header>Remove role</Modal.Header>
        <Modal.Content>
          Are you sure you want to remove the "Gate admin" role to this user
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

export default RemoveGateAdminRoleModal;
