import { useMutation } from "@apollo/client";
import { Button, LoaderDots, Modal } from "@peage-pay-web/ui";
import { SIGN_OUT_WITH_REFRESH_TOKEN_COOKIE } from "../graphql/mutations";
import { RefObject, useContext } from "react";
import { AuthContext } from "@peage-pay-web/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faTimes } from "@fortawesome/free-solid-svg-icons";

interface SignOutModalProps {
  modalRef: RefObject<HTMLDialogElement>;
}

const SignOutModal = ({ modalRef }: SignOutModalProps): JSX.Element => {
  const { setAuthData, clearAccessToken } = useContext(AuthContext);
  const [signOutWithRefreshTokenCookie, { loading }] = useMutation(
    SIGN_OUT_WITH_REFRESH_TOKEN_COOKIE,
    {
      onCompleted() {
        setAuthData(null);
        clearAccessToken();
      },
      onError(error) {
        console.log(error);
        setAuthData(null);
      },
    }
  );

  return (
    <Modal modalRef={modalRef}>
      <Modal.Window>
        <Modal.Header>Sign out</Modal.Header>
        <Modal.Content>Are you sure you want to sign out ?</Modal.Content>
        <Modal.Footer className="justify-end">
          <Button
            onClick={() => modalRef.current?.close()}
            variant={"base-200"}
            className="mr-[0.5rem]"
          >
            <Button.Icon position={"left"}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </Button.Icon>
            <Button.Content>Close</Button.Content>
          </Button>
          <Button
            onClick={() => signOutWithRefreshTokenCookie()}
            variant={"error"}
          >
            {loading ? (
              <Button.Content>
                <LoaderDots
                  dotProps={{ variant: "color-content" }}
                ></LoaderDots>
              </Button.Content>
            ) : (
              <>
                <Button.Icon position={"left"}>
                  <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Sign out</Button.Content>
              </>
            )}
          </Button>
        </Modal.Footer>
      </Modal.Window>
    </Modal>
  );
};

export default SignOutModal;
