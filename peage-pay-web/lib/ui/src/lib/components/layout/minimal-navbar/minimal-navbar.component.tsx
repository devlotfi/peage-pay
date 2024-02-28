import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import MinimalNavbarRightContent from './minimal-navbar-right-content.component';
import MinimalNavbarLeftContent from './minimal-navbar-left-content.component';

const navbarVariants = cva(
  'flex min-h-[3.5rem] items-center justify-between px-[0.5rem] lg:p-[0.5rem]  lg:p-[0.5rem]',
);

interface NavbarProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarVariants> {}

const MinimalNavbar = ({
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
MinimalNavbar.RightContent = MinimalNavbarRightContent;
MinimalNavbar.LeftContent = MinimalNavbarLeftContent;
export default MinimalNavbar;
