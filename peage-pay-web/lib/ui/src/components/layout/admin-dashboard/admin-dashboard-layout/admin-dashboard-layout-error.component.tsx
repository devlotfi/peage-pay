import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { PageError } from '@peage-pay-web/assets';

const adminDashboardLayoutLayoutErrorVariants = cva(
  'flex justify-center items-center flex-1',
);

interface AdminDashboardLayoutErrorProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminDashboardLayoutLayoutErrorVariants> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
}

const AdminDashboardLayoutError = ({
  className,
  error,
  children,
  ...props
}: AdminDashboardLayoutErrorProps) => {
  if (error) {
    return (
      <div
        className={Utils.cn(
          adminDashboardLayoutLayoutErrorVariants({ className }),
        )}
        {...props}
      >
        <div className="flex flex-col items-center">
          <img className="h-[10rem] mb-[0.5rem]" src={PageError} alt="Error" />
          <div className="flex text-[17pt]">Error while fetching</div>
        </div>
      </div>
    );
  } else {
    return children;
  }
};
export default AdminDashboardLayoutError;
