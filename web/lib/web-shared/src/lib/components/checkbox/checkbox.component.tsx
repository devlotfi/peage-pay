import { VariantProps, cva } from 'class-variance-authority';
import { LabelHTMLAttributes, createContext } from 'react';
import { Utils } from '../../utils';

const checkboxVariants = cva('flex flex-col', {
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
}

const initialValue: CheckboxContext = {
  variant: 'edge-100',
};

export const CheckboxContext = createContext(initialValue);

const Checkbox = ({
  variant,
  className,
  children,
  ...props
}: CheckboxProps): JSX.Element => {
  return (
    <CheckboxContext.Provider
      value={{
        variant: variant || 'edge-100',
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
export default Checkbox;
