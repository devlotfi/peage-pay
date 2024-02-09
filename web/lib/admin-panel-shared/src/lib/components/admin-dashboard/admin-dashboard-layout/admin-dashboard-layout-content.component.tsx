import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '@peage-pay/web-shared';

const adminDashboardLayoutContentVariants = cva(
  'flex flex-col h-full overflow-y-auto overflow-x-hidden rounded-xl bg-base-100'
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
      className={WebUtils.cn(
        adminDashboardLayoutContentVariants({ className })
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default AdminDashboardLayoutContent;
