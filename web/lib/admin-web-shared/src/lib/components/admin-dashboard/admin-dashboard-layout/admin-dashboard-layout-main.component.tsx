import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '@peage-pay/web-shared';

const adminDashboardLayoutMainVariants = cva(
  'flex flex-col w-full pb-[0.5rem] pr-[0.5rem] pl-[0.5rem] lg:pl-0 lg:pb-[1rem] lg:pr-[1rem] overflow-hidden'
);

interface AdminDashboardLayoutMainProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminDashboardLayoutMainVariants> {}

const AdminDashboardLayoutMain = ({
  className,
  children,
  ...props
}: AdminDashboardLayoutMainProps): JSX.Element => {
  return (
    <div
      className={WebUtils.cn(adminDashboardLayoutMainVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default AdminDashboardLayoutMain;
