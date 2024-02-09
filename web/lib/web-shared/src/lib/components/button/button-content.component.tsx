import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '../../web-utils';

const buttonContentVariants = cva('flex items-center');

interface ButtonContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonContentVariants> {}

const ButtonContent = ({
  className,
  children,
  ...props
}: ButtonContentProps): JSX.Element => {
  return (
    <div
      className={WebUtils.cn(buttonContentVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default ButtonContent;
