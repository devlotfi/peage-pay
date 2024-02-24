import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { VariantProps, cva } from 'class-variance-authority';

const modalHeaderVariants = cva(
  'flex items-center py-[1rem] mx-[1rem] min-h-[3rem] border-b-[1px] border-edge-100 text-[15pt] font-bold'
);

interface ModalHeaderProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalHeaderVariants> {}

const ModalHeader = ({
  className,
  children,

  ...props
}: ModalHeaderProps): JSX.Element => {
  return (
    <div className={Utils.cn(modalHeaderVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
export default ModalHeader;
