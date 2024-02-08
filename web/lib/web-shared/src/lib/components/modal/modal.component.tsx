import { DialogHTMLAttributes } from 'react';
import { WebUtils } from '../../web-utils';
import { VariantProps, cva } from 'class-variance-authority';
import ModalHeader from './modal-header.component';
import ModalWindow from './modal-window.component';
import ModalFooter from './modal-footer.component';
import ModalContent from './modal-content.component';

const modalVariants = cva('bg-transparent w-[40rem] p-0');

interface ModalProps
  extends DialogHTMLAttributes<HTMLDialogElement>,
    VariantProps<typeof modalVariants> {
  modalRef?: React.LegacyRef<HTMLDialogElement>;
}

const Modal = ({
  className,
  children,
  modalRef,
  ...props
}: ModalProps): JSX.Element => {
  return (
    <dialog
      ref={modalRef}
      className={WebUtils.cn(modalVariants({ className }))}
      {...props}
    >
      {children}
    </dialog>
  );
};
Modal.Window = ModalWindow;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Content = ModalContent;
export default Modal;
