import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, createContext, useState } from 'react';
import { WebUtils } from '@peage-pay/web-shared';
import AdminPanelLayoutMain from './admin-panel-layout-main.component';
import AdminPanelLayoutContent from './admin-panel-layout-content.component';

const adminPanelLayoutVariants = cva(
  'flex max-h-screen min-h-screen bg-base-200'
);

interface AdminPanelLayoutProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminPanelLayoutVariants> {}

interface AdminPanelLayoutContext {
  sidebarOpened: boolean;
  setSidebarOpened: (value: boolean) => void;
}

const initialValue: AdminPanelLayoutContext = {
  sidebarOpened: false,
  setSidebarOpened: () => {
    return;
  },
};

export const AdminPanelLayoutContext = createContext(initialValue);

const AdminPanelLayout = ({
  className,
  children,
  ...props
}: AdminPanelLayoutProps): JSX.Element => {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);

  return (
    <AdminPanelLayoutContext.Provider
      value={{
        sidebarOpened,
        setSidebarOpened,
      }}
    >
      <div
        className={WebUtils.cn(adminPanelLayoutVariants({ className }))}
        {...props}
      >
        {children}
      </div>
    </AdminPanelLayoutContext.Provider>
  );
};
AdminPanelLayout.Main = AdminPanelLayoutMain;
AdminPanelLayout.Content = AdminPanelLayoutContent;
export default AdminPanelLayout;
