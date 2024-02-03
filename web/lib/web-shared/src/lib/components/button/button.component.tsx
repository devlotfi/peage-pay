import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { Utils } from '../../utils';
import ButtonContent from './button-content.component';
import ButtonIcon from './button-icon.component';

const buttonVariants = cva(
  'flex min-h-[3rem] justify-center items-center text-[11pt] font-medium px-[1rem] rounded-md duration-300 ease active:scale-95',
  {
    variants: {
      variant: {
        primary: 'bg-primary-100 hover:bg-primary-200 text-color-content',
        success: 'bg-success-100 hover:bg-success-200 text-color-content',
        error: 'bg-error-100 hover:bg-error-200 text-color-content',
        warning: 'bg-warning-100 hover:bg-warning-200 text-color-content',
        'base-100': 'bg-base-100 hover:bg-base-200 text-base-content',
        'base-200': 'bg-base-200 hover:bg-base-300 text-base-content',
      },
    },
    defaultVariants: {
      variant: 'base-100',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  variant,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={Utils.cn(buttonVariants({ variant, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

Button.Content = ButtonContent;
Button.Icon = ButtonIcon;
