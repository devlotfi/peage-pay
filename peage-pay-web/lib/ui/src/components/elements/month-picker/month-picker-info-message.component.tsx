import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { MonthPickerContext } from './month-picker.context';

const monthPickerInfoMessageVariants = cva('flex ml-[1rem]', {
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
});

interface MonthPickerInfoMessageProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof monthPickerInfoMessageVariants> {}

const MonthPickerInfoMessage = ({
  className,
  children,
  variant,
  ...props
}: MonthPickerInfoMessageProps): JSX.Element => {
  const { variant: globalVariant } = useContext(MonthPickerContext);

  return (
    <div
      className={Utils.cn(
        monthPickerInfoMessageVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
          className,
        }),
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default MonthPickerInfoMessage;
