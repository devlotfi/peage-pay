import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Button, WebUtils } from '@peage-pay/web-shared';
import { PeagePayLogo } from '@peage-pay/assets';
import { AdminDashboardLayoutContext } from '../admin-dashboard-layout/admin-dashboard-layout.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const sidebarMainVariants = cva(
  'fixed lg:static flex flex-col bg-base-200 lg:bg-transparent rounded-tr-2xl rounded-br-2xl h-screen lg:h-auto min-w-[20rem] w-[20rem] p-[0.7rem] z-50 duration-300 ease overflow-y-auto',
  {
    variants: {
      sidebarOpened: {
        opened: 'left-[0rem]',
        closed: 'left-[-20rem]',
      },
    },
    defaultVariants: {
      sidebarOpened: 'closed',
    },
  },
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
    AdminDashboardLayoutContext,
  );

  return (
    <div
      className={WebUtils.cn(
        sidebarMainVariants({
          className,
          sidebarOpened: sidebarOpened ? 'opened' : 'closed',
        }),
      )}
      {...props}
    >
      <div className="flex justify-center">
        <Button variant={'base-200'} className="w-full">
          <Button.Content>
            <img
              className="w-[1.8rem]"
              src={PeagePayLogo}
              alt="peage-pay-admin-logo"
            />
            <div className="flex font-bold font-logo text-[15pt] ml-[0.7rem]">
              PeagePay Admin
            </div>
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
