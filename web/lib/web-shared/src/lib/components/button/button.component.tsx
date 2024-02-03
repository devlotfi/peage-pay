import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { Utils } from '../../utils';
import ButtonContent from './button-content.component';
import ButtonIcon from './button-icon.component';

const buttonVariants = cva(
  'flex min-h-[3rem] justify-center items-center text-[11pt] font-medium px-[1rem] rounded-md hover:brightness-75 duration-300 ease',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-color-content',
        success: 'bg-success text-color-content',
        error: 'bg-error text-color-content',
        warning: 'bg-warning text-color-content',
        'base-100': 'bg-base-100 text-base-content',
        'base-200': 'bg-base-200 text-base-content',
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
