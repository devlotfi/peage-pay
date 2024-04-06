import { useMutation } from '@apollo/client';
import { Button, LoaderDots, Modal } from '@peage-pay-web/ui';
import { RefObject, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SIGN_OUT_AUTOMATIC_GATE } from '../graphql/mutations';
import { AutomaticGateAuthContext } from '../context/automatic-gate-auth.context';
import { AutomaticGateAuthUtils } from '../utils';

interface SignOutModalProps {
  modalRef: RefObject<HTMLDialogElement>;
}

const AutomaticGateSignOutModal = ({
  modalRef,
}: SignOutModalProps): JSX.Element => {
  const { setAutomaticGateAuthData } = useContext(AutomaticGateAuthContext);
  const [signOutWithRefreshTokenCookie, { loading }] = useMutation(
    SIGN_OUT_AUTOMATIC_GATE,
    {
      onCompleted() {
        setAutomaticGateAuthData(null);
        AutomaticGateAuthUtils.clearAccessToken();
      },
      onError(error) {
        console.log(error);
        setAutomaticGateAuthData(null);
      },
    },
  );

  return (
    <Modal modalRef={modalRef}>
      <Modal.Window>
        <Modal.Header>Sign out</Modal.Header>
        <Modal.Content>Are you sure you want to sign out ?</Modal.Content>
        <Modal.Footer className="justify-end">
          <Button
            onClick={() => modalRef.current?.close()}
            variant={'base-200'}
            className="mr-[0.5rem]"
          >
            <Button.Icon position={'left'}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </Button.Icon>
            <Button.Content>Close</Button.Content>
          </Button>
          <Button
            onClick={() => signOutWithRefreshTokenCookie()}
            variant={'error'}
          >
            {loading ? (
              <Button.Content>
                <LoaderDots
                  dotProps={{ variant: 'color-content' }}
                ></LoaderDots>
              </Button.Content>
            ) : (
              <>
                <Button.Icon position={'left'}>
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

export default AutomaticGateSignOutModal;
