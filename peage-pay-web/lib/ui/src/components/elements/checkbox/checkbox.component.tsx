import { VariantProps, cva } from 'class-variance-authority';
import { LabelHTMLAttributes, useState } from 'react';
import { Utils } from '@peage-pay-web/utils';
import CheckboxField from './checkbox-field.component';
import CheckboxLabel from './checkbox-label.component';
import CheckboxCheck from './checkbox-check.component';
import { CheckboxContext } from './checkbox.context';

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
    VariantProps<typeof checkboxVariants> {
  initialChecked?: boolean;
}

const Checkbox = ({
  variant,
  className,
  children,
  initialChecked,
  ...props
}: CheckboxProps): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(
    initialChecked ? initialChecked : false,
  );

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
Checkbox.Field = CheckboxField;
Checkbox.Label = CheckboxLabel;
Checkbox.Check = CheckboxCheck;
export default Checkbox;
