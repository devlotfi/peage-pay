import { VariantProps, cva } from 'class-variance-authority';
import { SelectHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const selectFieldVariants = cva(
  'flex w-full rounded-lg border-[1px] bg-base-100 outline-none border-none px-[1rem] mr-[0.5rem]',
);

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectFieldVariants> {}

const SelectField = ({
  className,
  children,
  ...props
}: SelectProps): JSX.Element => {
  return (
    <select
      className={Utils.cn(
        selectFieldVariants({
          className,
        }),
      )}
      {...props}
    >
      {children}
    </select>
  );
};
export default SelectField;
