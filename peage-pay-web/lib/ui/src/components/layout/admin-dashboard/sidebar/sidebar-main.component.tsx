import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Button, IconButton } from '@peage-pay-web/ui';
import { Utils } from '@peage-pay-web/utils';
import { AdminDashboardLayoutContext } from '../admin-dashboard-layout/admin-dashboard-layout.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const sidebarMainVariants = cva(
  'fixed lg:static flex flex-col bg-base-200 lg:bg-transparent h-screen lg:h-auto min-w-[20rem] w-[20rem] p-[0.7rem] z-50 duration-300 ease overflow-y-auto',
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
    VariantProps<typeof sidebarMainVariants> {
  logoTitle: string;
  logo: any;
  title: string;
}

const SidebarMain = ({
  className,
  children,
  logoTitle,
  logo,
  title,
  ...props
}: SidebarMainProps): JSX.Element => {
  const { sidebarOpened, setSidebarOpened } = useContext(
    AdminDashboardLayoutContext,
  );

  return (
    <div
      className={Utils.cn(
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
            <div className="flex flex-col items-center my-[0.3rem]">
              <div className="flex items-center">
                <img
                  className="w-[2.3rem]"
                  src={logo}
                  alt="peage-pay-admin-logo"
                />
                <div className="flex font-bold font-logo text-[15pt] ml-[0.7rem]">
                  {logoTitle}
                </div>
              </div>
              <div className="flex justify-center max-w-[10rem] whitespace-break-spaces text-center">
                {title}
              </div>
            </div>
          </Button.Content>
        </Button>
        <IconButton
          className="ml-[0.5rem] lg:hidden"
          variant={'base-200'}
          onClick={() => setSidebarOpened(false)}
        >
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </IconButton>
      </div>
      <div className="flex min-h-[1px] bg-edge-100 mx-[1rem] my-[1rem]"></div>
      {children}
    </div>
  );
};
export default SidebarMain;
