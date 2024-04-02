import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { AutomaticGateType } from '../../../../__generated__/graphql';

const adminDashboardLayoutAutomaticGateInfoVariants = cva(
  'flex flex-col bg-base-100 rounded-lg border-[1px] border-edge-200 mb-[1rem] p-[0.5rem]',
);

interface AdminDashboardLayoutAutomaticGateInfoProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminDashboardLayoutAutomaticGateInfoVariants> {
  automaticGate: AutomaticGateType;
}

const AdminDashboardLayoutAutomaticGateInfo = ({
  className,
  children,
  automaticGate,
  ...props
}: AdminDashboardLayoutAutomaticGateInfoProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(
        adminDashboardLayoutAutomaticGateInfoVariants({ className }),
      )}
      {...props}
    >
      <div className="flex">Automatic gate: {automaticGate.name}</div>
      <div className="flex">Direction: {automaticGate.direction}</div>
    </div>
  );
};
export default AdminDashboardLayoutAutomaticGateInfo;
