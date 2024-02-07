import { BaseHTMLAttributes } from 'react';
import { Utils } from '../../utils';
import { VariantProps, cva } from 'class-variance-authority';

const modalFooterVariants = cva(
  'flex items-center py-[1rem] mx-[1rem] min-h-[3rem]'
);

interface ModalFooterProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalFooterVariants> {}

const ModalFooter = ({
  className,
  children,

  ...props
}: ModalFooterProps): JSX.Element => {
  return (
    <div className={Utils.cn(modalFooterVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
export default ModalFooter;
