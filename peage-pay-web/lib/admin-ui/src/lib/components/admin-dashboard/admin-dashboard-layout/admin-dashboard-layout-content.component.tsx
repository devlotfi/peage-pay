import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const adminDashboardLayoutContentVariants = cva(
  'flex flex-col h-full overflow-y-auto overflow-x-hidden rounded-xl bg-base-100',
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
      {children}
    </div>
  );
};
export default AdminDashboardLayoutContent;
