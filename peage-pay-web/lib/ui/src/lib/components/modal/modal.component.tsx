import './modal-animation.css';
import { DialogHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { VariantProps, cva } from 'class-variance-authority';
import ModalHeader from './modal-header.component';
import ModalWindow from './modal-window.component';
import ModalFooter from './modal-footer.component';
import ModalContent from './modal-content.component';

const modalVariants = cva(
  'bg-transparent w-[40rem] p-0 text-base-content animate-[modal_0.5s_ease]'
);

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
      className={Utils.cn(modalVariants({ className }))}
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
