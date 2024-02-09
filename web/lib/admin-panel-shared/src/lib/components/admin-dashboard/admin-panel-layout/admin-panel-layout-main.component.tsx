import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '@peage-pay/web-shared';

const adminPanelLayoutMainVariants = cva(
  'flex flex-col w-full pb-[0.5rem] pr-[0.5rem] pl-[0.5rem] lg:pl-0 lg:pb-[1rem] lg:pr-[1rem] overflow-hidden'
);

interface AdminPanelLayoutMainProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminPanelLayoutMainVariants> {}

const AdminPanelLayoutMain = ({
  className,
  children,
  ...props
}: AdminPanelLayoutMainProps): JSX.Element => {
  return (
    <div
      className={WebUtils.cn(adminPanelLayoutMainVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default AdminPanelLayoutMain;
