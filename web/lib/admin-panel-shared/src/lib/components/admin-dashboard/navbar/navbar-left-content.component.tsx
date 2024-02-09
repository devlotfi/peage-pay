import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Button, WebUtils } from '@peage-pay/web-shared';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminPanelLayoutContext } from '../admin-panel-layout/admin-panel-layout.component';
import { PeagePayAdminLogo } from '@peage-pay/assets';

const navbarLeftContentVariants = cva(
  'flex min-h-[3.5rem] items-center justify-between'
);

interface NavbarLeftContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarLeftContentVariants> {}

const NavbarLeftContent = ({
  className,
  children,
  ...props
}: NavbarLeftContentProps): JSX.Element => {
  const { setSidebarOpened } = useContext(AdminPanelLayoutContext);

  return (
    <div
      className={WebUtils.cn(navbarLeftContentVariants({ className }))}
      {...props}
    >
      <Button
        onClick={() => setSidebarOpened(true)}
        variant={'base-200'}
        className="lg:hidden"
      >
        <Button.Icon>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </Button.Icon>
      </Button>
      <Button variant={'base-200'} className="lg:hidden">
        <Button.Content>
          <img
            className="w-[1.8rem]"
            src={PeagePayAdminLogo}
            alt="peage-pay-admin-logo"
          />
        </Button.Content>
      </Button>
      {children}
    </div>
  );
};
export default NavbarLeftContent;
