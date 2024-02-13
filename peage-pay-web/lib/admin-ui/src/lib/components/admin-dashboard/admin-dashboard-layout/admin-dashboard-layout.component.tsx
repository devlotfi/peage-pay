import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, createContext, useState } from 'react';
import { Utils } from '@peage-pay-web/utils';
import AdminDashboardLayoutMain from './admin-dashboard-layout-main.component';
import AdminDashboardLayoutContent from './admin-dashboard-layout-content.component';
import Navbar from '../navbar/navbar.component';
import Sidebar from '../sidebar/sidebar.component';

const adminDashboardLayoutVariants = cva(
  'flex max-h-screen min-h-screen bg-base-200',
);

interface AdminDashboardLayoutProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminDashboardLayoutVariants> {}

interface AdminDashboardLayoutContext {
  sidebarOpened: boolean;
  setSidebarOpened: (value: boolean) => void;
}

const initialValue: AdminDashboardLayoutContext = {
  sidebarOpened: false,
  setSidebarOpened: () => {
    return;
  },
};

export const AdminDashboardLayoutContext = createContext(initialValue);

const AdminDashboardLayout = ({
  className,
  children,
  ...props
}: AdminDashboardLayoutProps): JSX.Element => {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);

  return (
    <AdminDashboardLayoutContext.Provider
      value={{
        sidebarOpened,
        setSidebarOpened,
      }}
    >
      <div
        className={Utils.cn(adminDashboardLayoutVariants({ className }))}
        {...props}
      >
        {children}
      </div>
    </AdminDashboardLayoutContext.Provider>
  );
};
AdminDashboardLayout.Main = AdminDashboardLayoutMain;
AdminDashboardLayout.Content = AdminDashboardLayoutContent;
AdminDashboardLayout.Navbar = Navbar;
AdminDashboardLayout.Sidebar = Sidebar;
export default AdminDashboardLayout;
