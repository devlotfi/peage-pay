import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Button } from '@peage-pay-web/ui';
import { Utils } from '@peage-pay-web/utils';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayoutContext } from '../admin-dashboard-layout/admin-dashboard-layout.component';
import { PeagePayLogo } from '@peage-pay-web/assets';

const navbarLeftContentVariants = cva('flex');

interface NavbarLeftContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarLeftContentVariants> {}

const NavbarLeftContent = ({
  className,
  children,
  ...props
}: NavbarLeftContentProps): JSX.Element => {
  const { setSidebarOpened } = useContext(AdminDashboardLayoutContext);

  return (
    <div
      className={Utils.cn(navbarLeftContentVariants({ className }))}
      {...props}
    >
      <Button
        onClick={() => setSidebarOpened(true)}
        variant={'base-100'}
        className="lg:hidden"
      >
        <Button.Icon>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </Button.Icon>
      </Button>
      <Button variant={'base-100'} className="lg:hidden">
        <Button.Content>
          <img
            className="w-[1.8rem]"
            src={PeagePayLogo}
            alt="peage-pay-admin-logo"
          />
        </Button.Content>
      </Button>
      {children}
    </div>
  );
};
export default NavbarLeftContent;
