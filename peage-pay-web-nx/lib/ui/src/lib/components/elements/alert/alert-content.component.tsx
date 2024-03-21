import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const alertContentVariants = cva('flex items-center whitespace-nowrap');

interface AlertContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertContentVariants> {}

const AlertContent = ({
  className,
  children,
  ...props
}: AlertContentProps): JSX.Element => {
  return (
    <div className={Utils.cn(alertContentVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
export default AlertContent;
