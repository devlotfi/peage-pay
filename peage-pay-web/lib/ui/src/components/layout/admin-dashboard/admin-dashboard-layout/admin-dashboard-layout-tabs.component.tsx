import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes, Suspense } from "react";
import { Utils } from "@peage-pay-web/utils";
import { Outlet } from "react-router-dom";
import AdminDashboardLayout from "./admin-dashboard-layout.component";

const adminDashboardLayoutTabsVariants = cva("flex flex-col h-full");

interface AdminDashboardLayoutTablProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminDashboardLayoutTabsVariants> {}

const AdminDashboardLayoutTabs = ({
  className,
  children,
  ...props
}: AdminDashboardLayoutTablProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(adminDashboardLayoutTabsVariants({ className }))}
      {...props}
    >
      {children}
      <Suspense
        fallback={
          <AdminDashboardLayout.Loading loading></AdminDashboardLayout.Loading>
        }
      >
        <Outlet></Outlet>
      </Suspense>
    </div>
  );
};
export default AdminDashboardLayoutTabs;
