import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import DayOfWeekPickerMain from './day-of-week-picker-main.component';
import DayOfWeekPickerLabel from './day-of-week-picker-label.component';
import DayOfWeekPickerInfoMessage from './day-of-week-picker-info-message.component';
import { DayOfWeekPickerContext } from './day-of-week-picker.context';

const dayOfWeekPickerVariants = cva('flex flex-col', {
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

interface DayOfWeekPickerProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dayOfWeekPickerVariants> {}

const DayOfWeekPicker = ({
  variant,
  className,
  children,
  ...props
}: DayOfWeekPickerProps): JSX.Element => {
  return (
    <DayOfWeekPickerContext.Provider
      value={{
        variant: variant || 'edge-100',
      }}
    >
      <div
        className={Utils.cn(dayOfWeekPickerVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    </DayOfWeekPickerContext.Provider>
  );
};
DayOfWeekPicker.Main = DayOfWeekPickerMain;
DayOfWeekPicker.Label = DayOfWeekPickerLabel;
DayOfWeekPicker.InfoMessage = DayOfWeekPickerInfoMessage;
export default DayOfWeekPicker;
