import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import MonthPickerMain from './month-picker-main.component';
import MonthPickerLabel from './month-picker-label.component';
import MonthPickerInfoMessage from './month-picker-info-message.component';
import { MonthPickerContext } from './month-picker.context';

const monthPickerVariants = cva('flex flex-col', {
  variants: {
    variant: {
      primary: '',
      success: '',
      error: '',
      warning: '',
      'edge-100': '',
      'edge-200': '',
    },
  },
  defaultVariants: {
    variant: 'edge-100',
  },
});

interface MonthPickerProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof monthPickerVariants> {}

const MonthPicker = ({
  variant,
  className,
  children,
  ...props
}: MonthPickerProps): JSX.Element => {
  return (
    <MonthPickerContext.Provider
      value={{
        variant: variant || 'edge-100',
      }}
    >
      <div
        className={Utils.cn(monthPickerVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    </MonthPickerContext.Provider>
  );
};
MonthPicker.Main = MonthPickerMain;
MonthPicker.Label = MonthPickerLabel;
MonthPicker.InfoMessage = MonthPickerInfoMessage;
export default MonthPicker;
