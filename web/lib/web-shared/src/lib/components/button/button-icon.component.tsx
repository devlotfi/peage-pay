import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '../../utils';

const buttonIconVariants = cva('flex justify-center items-center text-[15pt]', {
  variants: {
    variant: {
      signle: '',
      left: 'mr-[0.5rem]',
      right: 'ml-[0.5rem]',
    },
  },
  defaultVariants: {
    variant: 'signle',
  },
});

interface ButtonIconProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonIconVariants> {}

export default function ButtonIcon({
  variant,
  className,
  children,
  ...props
}: ButtonIconProps): JSX.Element {
  return (
    <div
      className={Utils.cn(buttonIconVariants({ variant, className }))}
      {...props}
    >
      {children}
    </div>
  );
}
