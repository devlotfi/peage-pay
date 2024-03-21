import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import NavbarRightContent from './navbar-right-content.component';
import NavbarLeftContent from './navbar-left-content.component';

const navbarVariants = cva(
  'flex lg:hidden min-h-[3.5rem] items-center justify-between border-edge-200 border-b-[1px] bg-base-100',
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
    <div className={Utils.cn(navbarVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
Navbar.RightContent = NavbarRightContent;
Navbar.LeftContent = NavbarLeftContent;
export default Navbar;
