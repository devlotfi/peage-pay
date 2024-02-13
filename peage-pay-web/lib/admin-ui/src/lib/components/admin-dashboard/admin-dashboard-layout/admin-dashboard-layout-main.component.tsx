import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const adminDashboardLayoutMainVariants = cva(
  'flex flex-col w-full pb-[0.5rem] pr-[0.5rem] pl-[0.5rem] lg:pl-0 overflow-hidden',
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
      className={Utils.cn(adminDashboardLayoutMainVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default AdminDashboardLayoutMain;
