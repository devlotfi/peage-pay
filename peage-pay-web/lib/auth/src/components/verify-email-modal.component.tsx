import { Button, Modal } from '@peage-pay-web/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MailSent } from '@peage-pay-web/assets';
import { RefObject } from 'react';

interface VerifyEmailModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  email: string;
}

const VerifyEmailModal = ({
  modalRef,
  email,
}: VerifyEmailModalProps): JSX.Element => {
  return (
    <Modal modalRef={modalRef}>
      <Modal.Window className="max-w-[30rem]">
        <Modal.Header>Email verification</Modal.Header>
        <Modal.Content className="flex">
          <img
            className="max-h-[10rem] my-[2rem] text-center"
            src={MailSent}
            alt="mail"
          />
          <div className="flex justify-center text-[17pt] text-center">
            A verification email hash been sent to
          </div>
          <div className="flex justify-center text-primary-100">{email}</div>
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
        </Modal.Footer>
      </Modal.Window>
    </Modal>
  );
};

export default VerifyEmailModal;
