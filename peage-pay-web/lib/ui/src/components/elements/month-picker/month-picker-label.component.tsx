import { VariantProps, cva } from 'class-variance-authority';
import { LabelHTMLAttributes, useContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { MonthPickerContext } from './month-picker.context';

const monthPickerLabelVariants = cva(
  'flex text-[11pt] absolute top-[-1rem] left-[1rem] bg-base-100 px-[0.5rem]',
  {
    variants: {
      variant: {
        primary: 'text-primary-100',
        success: 'text-success-100',
        error: 'text-error-100',
        warning: 'text-warning-100',
        'edge-100': 'text-edge-100',
        'edge-200': 'text-edge-200',
      },
    },
    defaultVariants: {
      variant: 'edge-100',
    },
  },
);

interface MonthPickerLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof monthPickerLabelVariants> {}

const MonthPickerLabel = ({
  variant,
  className,
  children,
  ...props
}: MonthPickerLabelProps): JSX.Element => {
  const { variant: globalVariant } = useContext(MonthPickerContext);

  return (
    <label
      className={Utils.cn(
        monthPickerLabelVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
          className,
        }),
      )}
      {...props}
    >
      {children}
    </label>
  );
};
export default MonthPickerLabel;
