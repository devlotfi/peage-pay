import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { TollType } from '../../../../__generated__/graphql';

const adminDashboardLayoutTollInfoVariants = cva(
  'flex flex-col bg-base-100 rounded-lg border-[1px] border-edge-200 mb-[1rem] p-[0.5rem]',
);

interface AdminDashboardLayoutTollInfoProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminDashboardLayoutTollInfoVariants> {
  toll: TollType;
}

const AdminDashboardLayoutTollInfo = ({
  className,
  children,
  toll,
  ...props
}: AdminDashboardLayoutTollInfoProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(adminDashboardLayoutTollInfoVariants({ className }))}
      {...props}
    >
      <div className="flex">Toll: {toll.name}</div>
      <div className="flex">Status: {toll.status}</div>
    </div>
  );
};
export default AdminDashboardLayoutTollInfo;
