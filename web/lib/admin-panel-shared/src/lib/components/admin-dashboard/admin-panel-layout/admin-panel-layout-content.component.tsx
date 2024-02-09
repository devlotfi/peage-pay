import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '@peage-pay/web-shared';

const adminPanelLayoutContentVariants = cva(
  'flex flex-col h-full overflow-y-auto overflow-x-hidden rounded-xl bg-base-100'
);

interface AdminPanelLayoutContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminPanelLayoutContentVariants> {}

const AdminPanelLayoutContent = ({
  className,
  children,
  ...props
}: AdminPanelLayoutContentProps): JSX.Element => {
  return (
    <div
      className={WebUtils.cn(adminPanelLayoutContentVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default AdminPanelLayoutContent;
