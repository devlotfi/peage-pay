import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const buttonContentVariants = cva('flex items-center whitespace-nowrap');

interface ButtonContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonContentVariants> {}

const ButtonContent = ({
  className,
  children,
  ...props
}: ButtonContentProps): JSX.Element => {
  return (
    <div className={Utils.cn(buttonContentVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
export default ButtonContent;
