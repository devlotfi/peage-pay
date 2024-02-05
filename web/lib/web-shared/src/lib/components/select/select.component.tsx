import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, createContext } from 'react';
import { Utils } from '../../utils';
import SelectField from './select-field.component';
import SelectIcon from './select-icon.component';
import SelectInfoMessage from './select-info-message.component';
import SelectLabel from './select-label.component';
import SelectMain from './select-main.component';

const selectVariants = cva('flex flex-col', {
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

interface SelectProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof selectVariants> {}

interface SelectContext {
  variant: string;
}

const initialValue: SelectContext = {
  variant: 'edge-100',
};

export const SelectContext = createContext(initialValue);

const Select = ({
  variant,
  className,
  children,
  ...props
}: SelectProps): JSX.Element => {
  return (
    <SelectContext.Provider
      value={{
        variant: variant || 'edge-100',
      }}
    >
      <div
        className={Utils.cn(selectVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    </SelectContext.Provider>
  );
};
Select.SelectMain = SelectMain;
Select.SelectField = SelectField;
Select.SelectIcon = SelectIcon;
Select.SelectLabel = SelectLabel;
Select.SelectInfoMessage = SelectInfoMessage;
export default Select;
