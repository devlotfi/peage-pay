import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { Utils } from '../../utils';
import ButtonContent from './button-content.component';
import ButtonIcon from './button-icon.component';

const buttonOutlineVariants = cva(
  'flex min-h-[3rem] justify-center items-center text-[11pt] font-medium px-[1rem] rounded-md bg-base-100 border-[1px] hover:bg-base-200 duration-300 ease active:scale-95',
  {
    variants: {
      variant: {
        primary: 'border-primary-100 text-primary-100',
        success: 'border-success-100 text-success-100',
        error: 'border-error-100 text-error-100',
        warning: 'border-warning-100 text-warning-100',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonOutlineVariants> {}

export default function ButtonOutline({
  variant,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={Utils.cn(buttonOutlineVariants({ variant, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

ButtonOutline.Content = ButtonContent;
ButtonOutline.Icon = ButtonIcon;
