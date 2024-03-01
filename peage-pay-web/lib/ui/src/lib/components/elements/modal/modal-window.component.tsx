import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { VariantProps, cva } from 'class-variance-authority';

const modalWindowVariants = cva(
  'flex flex-col w-full min-h-[15rem] bg-base-100 rounded-xl border-[1px] border-edge-200',
);

interface ModalWindowProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalWindowVariants> {}

const ModalWindow = ({
  className,
  children,
  ...props
}: ModalWindowProps): JSX.Element => {
  return (
    <div className={Utils.cn(modalWindowVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
export default ModalWindow;
