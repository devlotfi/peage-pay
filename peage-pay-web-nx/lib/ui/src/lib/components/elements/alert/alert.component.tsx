import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import AlertContent from './alert-content.component';
import AlertIcon from './alert-icon.component';

const alertVariants = cva(
  'flex min-h-[3.2rem] items-center text-[11pt] font-medium px-[1rem] rounded-xl',
  {
    variants: {
      variant: {
        primary: 'bg-primary-100 text-color-content',
        success: 'bg-success-100 text-color-content',
        error: 'bg-error-100 text-color-content',
        warning: 'bg-warning-100 text-color-content',
        transparent: 'bg-transparent text-base-content',
        'base-100': 'bg-base-100 text-base-content',
        'base-200': 'bg-base-200 text-base-content',
      },
    },
    defaultVariants: {
      variant: 'base-100',
    },
  },
);

interface AlertProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = ({
  variant,
  className,
  children,
  ...props
}: AlertProps): JSX.Element => {
  return (
    <div className={Utils.cn(alertVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
};
Alert.Content = AlertContent;
Alert.Icon = AlertIcon;
export default Alert;
