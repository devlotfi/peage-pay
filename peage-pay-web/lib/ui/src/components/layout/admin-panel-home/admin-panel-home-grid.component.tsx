import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const adminPanelHomeGridVariants = cva(
  'grid gap-3 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3',
);

interface AdminPanelHomeGridProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminPanelHomeGridVariants> {}

const AdminPanelHomeGrid = ({
  className,
  children,
  ...props
}: AdminPanelHomeGridProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(adminPanelHomeGridVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default AdminPanelHomeGrid;
