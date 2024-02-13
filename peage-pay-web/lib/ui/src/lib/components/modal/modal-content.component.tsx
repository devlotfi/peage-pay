import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { VariantProps, cva } from 'class-variance-authority';

const modalContentVariants = cva('flex flex-col p-[1rem] flex-1');

interface ModalContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalContentVariants> {}

const ModalContent = ({
  className,
  children,
  ...props
}: ModalContentProps): JSX.Element => {
  return (
    <div className={Utils.cn(modalContentVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
export default ModalContent;
