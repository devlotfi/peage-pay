import { PeagePayLogo } from '@peage-pay-web/assets';
import { Button } from '@peage-pay-web/ui';
import { Utils } from '@peage-pay-web/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';

const navbarLeftContentVariants = cva('flex');

interface NavbarLeftContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarLeftContentVariants> {}

const MinimalNavbarLeftContent = ({
  className,
  children,
  ...props
}: NavbarLeftContentProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(navbarLeftContentVariants({ className }))}
      {...props}
    >
      <Button variant={'base-200'}>
        <Button.Content>
          <img
            className="w-[1.8rem]"
            src={PeagePayLogo}
            alt="peage-pay-admin-logo"
          />
          <div className="hidden md:flex font-bold font-logo text-[15pt] ml-[0.7rem] lg:text-base-content">
            PeagePay Admin
          </div>
        </Button.Content>
      </Button>
      {children}
    </div>
  );
};
export default MinimalNavbarLeftContent;
