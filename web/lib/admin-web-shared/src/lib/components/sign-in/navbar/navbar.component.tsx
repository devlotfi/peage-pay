import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '@peage-pay/web-shared';
import NavbarRightContent from './navbar-right-content.component';
import NavbarLeftContent from './navbar-left-content.component';

const navbarVariants = cva(
  'flex min-h-[3.5rem] items-center justify-between p-[0.5rem]',
);

interface NavbarProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarVariants> {}

const Navbar = ({
  className,
  children,
  ...props
}: NavbarProps): JSX.Element => {
  return (
    <div className={WebUtils.cn(navbarVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
Navbar.RightContent = NavbarRightContent;
Navbar.LeftContent = NavbarLeftContent;
export default Navbar;
