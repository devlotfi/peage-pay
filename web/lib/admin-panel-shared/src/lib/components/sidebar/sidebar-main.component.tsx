import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Button, WebUtils } from '@peage-pay/web-shared';
import { PeagePayAdminLogo } from '@peage-pay/assets';
import { AdminPanelLayoutContext } from '../admin-panel-layout/admin-panel-layout.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const sidebarMainVariants = cva(
  'fixed lg:static flex flex-col bg-base-200 lg:bg-transparent lg:shadow-none rounded-tr-2xl rounded-br-2xl h-screen lg:h-auto min-w-[20rem] w-[20rem] p-[0.7rem] z-50 duration-300 ease overflow-y-auto',
  {
    variants: {
      sidebarOpened: {
        opened: 'left-[0rem] shadow-lg',
        closed: 'left-[-20rem]',
      },
    },
    defaultVariants: {
      sidebarOpened: 'closed',
    },
  }
);

interface SidebarMainProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarMainVariants> {}

const SidebarMain = ({
  className,
  children,
  ...props
}: SidebarMainProps): JSX.Element => {
  const { sidebarOpened, setSidebarOpened } = useContext(
    AdminPanelLayoutContext
  );

  return (
    <div
      className={WebUtils.cn(
        sidebarMainVariants({
          className,
          sidebarOpened: sidebarOpened ? 'opened' : 'closed',
        })
      )}
      {...props}
    >
      <div className="flex">
        <Button variant={'base-200'}>
          <Button.Content>
            <img
              className="w-[15rem]"
              src={PeagePayAdminLogo}
              alt="peage-pay-admin-logo"
            />
          </Button.Content>
        </Button>
        <Button
          className="ml-[0.5rem] lg:hidden"
          variant={'base-200'}
          onClick={() => setSidebarOpened(false)}
        >
          <Button.Icon>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </Button.Icon>
        </Button>
      </div>
      <div className="flex h-[1px] bg-edge-100 mx-[1rem] my-[1rem]"></div>
      {children}
    </div>
  );
};
export default SidebarMain;
