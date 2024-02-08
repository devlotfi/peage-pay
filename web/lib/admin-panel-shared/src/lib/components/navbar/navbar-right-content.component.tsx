import { WebUtils } from '@peage-pay/web-shared';
import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';

const navbarRightContentVariants = cva(
  'flex min-h-[3.5rem] items-center justify-between'
);

interface NavbarRightContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarRightContentVariants> {}

const NavbarRightContent = ({
  className,
  children,
  ...props
}: NavbarRightContentProps): JSX.Element => {
  return (
    <div
      className={WebUtils.cn(navbarRightContentVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default NavbarRightContent;
