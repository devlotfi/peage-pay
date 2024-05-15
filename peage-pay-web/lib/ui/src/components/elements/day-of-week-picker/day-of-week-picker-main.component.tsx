import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { DayOfWeekType } from '../../../__generated__/graphql';
import Checkbox from '../checkbox/checkbox.component';
import { DayOfWeekPickerContext } from './day-of-week-picker.context';
import { useTranslation } from 'react-i18next';

const dayOfWeekPickerMainVariants = cva(
  'grid grid-cols-2 relative lg:grid-cols-4 min-h-[2.7rem] border-[1px] rounded-lg relative focus-within:outline outline-[3px]',
  {
    variants: {
      variant: {
        primary: 'border-primary-100 outline-primary-transparent',
        success: 'border-success-100 outline-success-transparent',
        error: 'border-error-100 outline-error-transparent',
        warning: 'border-warning-100 outline-warning-transparent',
        'edge-100': 'border-edge-100 outline-primary-transparent',
        'edge-200': 'border-edge-200 outline-primary-transparent',
      },
      active: {
        active: 'outline outline-[2px] outline-offset-[2px]',
      },
    },
    defaultVariants: {
      variant: 'edge-100',
    },
  },
);

interface DayOfWeekPickerMainProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dayOfWeekPickerMainVariants> {
  value?: DayOfWeekType[];
  handleChange?: (selectedDayOfWeek: DayOfWeekType[]) => void;
}

const DayOfWeekPickerMain = ({
  variant,
  className,
  children,
  value,
  handleChange,
  ...props
}: DayOfWeekPickerMainProps): JSX.Element => {
  const { t } = useTranslation();
  const { variant: globalVariant } = useContext(DayOfWeekPickerContext);

  const handleDaySelected = (month: DayOfWeekType) => {
    if (handleChange && value) {
      handleChange([...value, month]);
    }
  };

  const handleDayUnselected = (month: DayOfWeekType) => {
    if (handleChange && value) {
      handleChange(value.filter((listMonth) => month !== listMonth));
    }
  };

  const isDaySelected = (month: DayOfWeekType) => {
    if (value && value.find((listMonth) => listMonth === month)) {
      return true;
    } else {
      return false;
    }
  };

  const renderDays = () => {
    return Object.keys(DayOfWeekType).map((key) => {
      const dayOfWeek = DayOfWeekType[key as keyof typeof DayOfWeekType];
      return (
        <div key={key} className="p-[0.7rem]">
          <Checkbox
            initialChecked={isDaySelected(dayOfWeek)}
            variant={'primary'}
          >
            <Checkbox.Check></Checkbox.Check>
            <Checkbox.Field
              onChange={(e) =>
                e.target.checked
                  ? handleDaySelected(dayOfWeek)
                  : handleDayUnselected(dayOfWeek)
              }
            ></Checkbox.Field>
            <Checkbox.Label>{t(dayOfWeek)}</Checkbox.Label>
          </Checkbox>
        </div>
      );
    });
  };

  return (
    <div
      className={Utils.cn(
        dayOfWeekPickerMainVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
          className,
        }),
      )}
      {...props}
    >
      {children}
      {renderDays()}
    </div>
  );
};
export default DayOfWeekPickerMain;
