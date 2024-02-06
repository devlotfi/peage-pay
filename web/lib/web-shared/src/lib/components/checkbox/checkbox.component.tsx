import { VariantProps, cva } from 'class-variance-authority';
import { LabelHTMLAttributes, createContext, useState } from 'react';
import { Utils } from '../../utils';
import CheckboxField from './checkbox-field.component';
import CheckboxLabel from './checkbox-label.component';
import CheckboxCheck from './checkbox-check.component';

const checkboxVariants = cva('flex', {
  variants: {
    variant: {
      primary: '',
      success: '',
      error: '',
      warning: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface CheckboxProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof checkboxVariants> {}

interface CheckboxContext {
  variant: string;
  checked: boolean;
  setChecked: (value: boolean) => void;
}

const initialValue: CheckboxContext = {
  variant: 'primary',
  checked: false,
  setChecked: () => {
    return;
  },
};

export const CheckboxContext = createContext(initialValue);

const Checkbox = ({
  variant,
  className,
  children,
  ...props
}: CheckboxProps): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <CheckboxContext.Provider
      value={{
        variant: variant || 'primary',
        checked,
        setChecked,
      }}
    >
      <label
        className={Utils.cn(checkboxVariants({ variant, className }))}
        {...props}
      >
        {children}
      </label>
    </CheckboxContext.Provider>
  );
};
Checkbox.CheckboxField = CheckboxField;
Checkbox.CheckboxLabel = CheckboxLabel;
Checkbox.CheckboxCheck = CheckboxCheck;
export default Checkbox;
