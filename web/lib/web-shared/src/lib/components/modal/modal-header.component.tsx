import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '../../web-utils';
import { VariantProps, cva } from 'class-variance-authority';

const modalHeaderVariants = cva(
  'flex items-center py-[1rem] mx-[1rem] min-h-[3rem] border-b-[1px] border-edge-100 text-[15pt] font-bold',
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
    <div className={WebUtils.cn(modalHeaderVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
export default ModalHeader;
