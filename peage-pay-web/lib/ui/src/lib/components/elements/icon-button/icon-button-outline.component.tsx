import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const iconButtonOutlineVariants = cva(
  'flex min-h-[2.7rem] min-w-[2.7rem] h-[2.7rem] w-[2.7rem] justify-center items-center text-[11pt] font-medium rounded-md bg-base-100 border-[1px] hover:bg-base-200 duration-300 ease active:scale-95',
  {
    variants: {
      variant: {
        primary: 'border-primary-100 text-primary-100',
        success: 'border-success-100 text-success-100',
        error: 'border-error-100 text-error-100',
        warning: 'border-warning-100 text-warning-100',
        'edge-100': 'border-edge-100',
        'edge-200': 'border-edge-200',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonOutlineVariants> {}

const IconButtonOutline = ({
  variant,
  className,
  children,
  ...props
}: IconButtonProps): JSX.Element => {
  return (
    <button
      className={Utils.cn(iconButtonOutlineVariants({ variant, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
export default IconButtonOutline;
