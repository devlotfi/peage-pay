import { Utils } from '@peage-pay-web/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';

const navbarRightContentVariants = cva('flex');

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
      className={Utils.cn(navbarRightContentVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default NavbarRightContent;
