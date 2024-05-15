import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { MonthType } from '../../../__generated__/graphql';
import Checkbox from '../checkbox/checkbox.component';
import { MonthPickerContext } from './month-picker.context';
import { useTranslation } from 'react-i18next';

const monthPickerMainVariants = cva(
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

interface MonthPickerMainProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof monthPickerMainVariants> {
  value?: MonthType[];
  handleChange?: (selectedMonths: MonthType[]) => void;
}

const MonthPickerMain = ({
  variant,
  className,
  children,
  value,
  handleChange,
  ...props
}: MonthPickerMainProps): JSX.Element => {
  const { t } = useTranslation();
  const { variant: globalVariant } = useContext(MonthPickerContext);

  const handleMonthSelected = (month: MonthType) => {
    if (handleChange && value) {
      handleChange([...value, month]);
    }
  };

  const handleMonthUnselected = (month: MonthType) => {
    if (handleChange && value) {
      handleChange(value.filter((listMonth) => month !== listMonth));
    }
  };

  const isMonthSelected = (month: MonthType) => {
    if (value && value.find((listMonth) => listMonth === month)) {
      return true;
    } else {
      return false;
    }
  };

  const renderMonths = () => {
    return Object.keys(MonthType).map((key) => {
      const month = MonthType[key as keyof typeof MonthType];
      return (
        <div key={key} className="p-[0.7rem]">
          <Checkbox initialChecked={isMonthSelected(month)} variant={'primary'}>
            <Checkbox.Check></Checkbox.Check>
            <Checkbox.Field
              onChange={(e) =>
                e.target.checked
                  ? handleMonthSelected(month)
                  : handleMonthUnselected(month)
              }
            ></Checkbox.Field>
            <Checkbox.Label>{t(month)}</Checkbox.Label>
          </Checkbox>
        </div>
      );
    });
  };

  return (
    <div
      className={Utils.cn(
        monthPickerMainVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
          className,
        }),
      )}
      {...props}
    >
      {children}
      {renderMonths()}
    </div>
  );
};
export default MonthPickerMain;
