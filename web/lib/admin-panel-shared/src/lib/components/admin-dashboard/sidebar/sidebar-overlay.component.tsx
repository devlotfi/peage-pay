import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { WebUtils } from '@peage-pay/web-shared';
import { AdminPanelLayoutContext } from '../admin-panel-layout/admin-panel-layout.component';

const sidebarOverlayVariants = cva(
  'fixed lg:hidden h-screen w-screen bg-black opacity-50 z-40',
  {
    variants: {
      sidebarOpened: {
        opened: 'flex',
        closed: 'hidden',
      },
    },
    defaultVariants: {
      sidebarOpened: 'closed',
    },
  }
);

interface SidebarOverlayProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarOverlayVariants> {}

const SidebarOverlay = ({
  className,
  children,
  ...props
}: SidebarOverlayProps): JSX.Element => {
  const { sidebarOpened } = useContext(AdminPanelLayoutContext);

  return (
    <div
      className={WebUtils.cn(
        sidebarOverlayVariants({
          className,
          sidebarOpened: sidebarOpened ? 'opened' : 'closed',
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default SidebarOverlay;
