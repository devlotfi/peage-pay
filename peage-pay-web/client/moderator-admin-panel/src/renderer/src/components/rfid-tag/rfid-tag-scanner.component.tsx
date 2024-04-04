import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from '@peage-pay-web/ui';
import BadgeScannerPage from '@renderer/pages/rfid-tag/badge-scanner.page';

interface BadgePickerProps {
  modalRef: React.RefObject<HTMLDialogElement>;
}

const BadgePicker = ({ modalRef }: BadgePickerProps): JSX.Element => {
  return (
    <Modal modalRef={modalRef} className="h-screen w-screen">
      <Modal.Window className="flex overflow-y-auto">
        <Modal.Header>
          <div className="flex items-center justify-between w-full">
            <div className="flex">Scan a badge</div>
            <Button
              onClick={() => modalRef.current?.close()}
              variant={'base-200'}
            >
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Close</Button.Content>
            </Button>
          </div>
        </Modal.Header>
        <Modal.Content>
          <BadgeScannerPage></BadgeScannerPage>
        </Modal.Content>
      </Modal.Window>
    </Modal>
  );
};

export default BadgePicker;
