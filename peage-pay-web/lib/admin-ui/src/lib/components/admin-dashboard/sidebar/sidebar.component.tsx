import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import SidebarMain from './sidebar-main.component';
import SidebarOverlay from './sidebar-overlay.component';

const sidebarVariants = cva('flex');

interface SidebarProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {}

const Sidebar = ({
  className,
  children,
  ...props
}: SidebarProps): JSX.Element => {
  return (
    <div className={Utils.cn(sidebarVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
Sidebar.Main = SidebarMain;
Sidebar.Overlay = SidebarOverlay;
export default Sidebar;
