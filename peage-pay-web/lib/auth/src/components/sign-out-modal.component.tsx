import { useMutation } from '@apollo/client';
import { Button, LoaderDots, Modal } from '@peage-pay-web/ui';
import {
  SIGN_OUT,
  SIGN_OUT_WITH_REFRESH_TOKEN_COOKIE,
} from '../graphql/mutations';
import { RefObject, useContext } from 'react';
import { AuthContext, UserAuthUtils } from '@peage-pay-web/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faTimes } from '@fortawesome/free-solid-svg-icons';
import { RefreshTokenMode } from '../__generated__/graphql';
import { useTranslation } from 'react-i18next';

interface SignOutModalProps {
  modalRef: RefObject<HTMLDialogElement>;
}

const SignOutModal = ({ modalRef }: SignOutModalProps): JSX.Element => {
  const { t } = useTranslation();
  const { setAuthData, refreshTokenMode } = useContext(AuthContext);
  const [signOut, { loading: signOutLoading }] = useMutation(SIGN_OUT, {
    variables: {
      signOutInput: {
        refreshToken: UserAuthUtils.getRefreshToken()!,
      },
    },
    onCompleted() {
      UserAuthUtils.clearAccessToken();
      UserAuthUtils.clearRefreshToken();
      setAuthData(null);
    },
    onError(error) {
      console.log(error);
      UserAuthUtils.clearAccessToken();
      UserAuthUtils.clearRefreshToken();
      setAuthData(null);
    },
  });
  const [
    signOutWithRefreshTokenCookie,
    { loading: signOutWithRefreshTokenLoading },
  ] = useMutation(SIGN_OUT_WITH_REFRESH_TOKEN_COOKIE, {
    onCompleted() {
      UserAuthUtils.clearAccessToken();
      UserAuthUtils.clearRefreshToken();
      setAuthData(null);
    },
    onError(error) {
      console.log(error);
      UserAuthUtils.clearAccessToken();
      UserAuthUtils.clearRefreshToken();
      setAuthData(null);
    },
  });

  const handleSignOut = () => {
    if (refreshTokenMode === RefreshTokenMode.Cookie) {
      signOutWithRefreshTokenCookie();
    } else {
      signOut();
    }
  };

  return (
    <Modal modalRef={modalRef}>
      <Modal.Window>
        <Modal.Header>{t('SIGN_OUT')}</Modal.Header>
        <Modal.Content>{t('SIGN_OUT_CONFIRM')}</Modal.Content>
        <Modal.Footer className="justify-end">
          <Button
            onClick={() => modalRef.current?.close()}
            variant={'base-200'}
            className="mr-[0.5rem]"
          >
            <Button.Icon position={'left'}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </Button.Icon>
            <Button.Content>{t('CLOSE')}</Button.Content>
          </Button>
          <Button onClick={handleSignOut} variant={'error'}>
            {signOutLoading || signOutWithRefreshTokenLoading ? (
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
                <Button.Content>{t('SIGN_OUT')}</Button.Content>
              </>
            )}
          </Button>
        </Modal.Footer>
      </Modal.Window>
    </Modal>
  );
};

export default SignOutModal;
