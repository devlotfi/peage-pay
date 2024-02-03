import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { Utils } from '../../utils';

const checkboxInputVariants = cva('flex', {
  variants: {
    variant: {
      primary: 'bg-primary-100',
      success: 'bg-success-100',
      error: 'bg-error-100',
      warning: 'bg-warning-100',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface CheckboxInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxInputVariants> {}

export default function CheckboxInput({
  variant,
  className,
  children,
  ...props
}: CheckboxInputProps): JSX.Element {
  return (
    <input
      type="checkbox"
      className={Utils.cn(checkboxInputVariants({ variant, className }))}
      {...props}
    />
  );
}
