import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '../../utils';

const tooltipMessageVariants = cva(
  'px-[0.5rem] py-[0.3rem] rounded-md text-[10pt] opacity-0 absolute group-hover:opacity-100 duration-300 ease z-50 text-color-content',
  {
    variants: {
      variant: {
        primary: 'bg-primary-100',
        success: 'bg-success-100',
        error: 'bg-error-100',
        warning: 'bg-warning-100',
      },
      position: {
        top: 'bottom-[calc(100%+0.5rem)] left-[50%] translate-x-[-50%]',
        bottom: 'top-[calc(100%+0.5rem)] left-[50%] translate-x-[-50%]',
        left: 'right-[calc(100%+0.5rem)] top-[50%] translate-y-[-50%]',
        right: 'left-[calc(100%+0.5rem)] top-[50%] translate-y-[-50%]',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface TooltipMessageProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipMessageVariants> {}

const TooltipMessage = ({
  variant,
  className,
  children,
  position,
  ...props
}: TooltipMessageProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(
        tooltipMessageVariants({ variant, className, position })
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default TooltipMessage;
