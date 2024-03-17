import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, Suspense } from 'react';
import { Utils } from '@peage-pay-web/utils';
import AdminDashboardLayoutLoading from './admin-dashboard-layout-loading.component';

const adminDashboardLayoutContentVariants = cva(
  'flex flex-col h-full overflow-y-auto overflow-x-hidden',
);

interface AdminDashboardLayoutContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminDashboardLayoutContentVariants> {}

const AdminDashboardLayoutContent = ({
  className,
  children,
  ...props
}: AdminDashboardLayoutContentProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(adminDashboardLayoutContentVariants({ className }))}
      {...props}
    >
      <Suspense
        fallback={<AdminDashboardLayoutLoading></AdminDashboardLayoutLoading>}
      >
        {children}
      </Suspense>
    </div>
  );
};
export default AdminDashboardLayoutContent;
