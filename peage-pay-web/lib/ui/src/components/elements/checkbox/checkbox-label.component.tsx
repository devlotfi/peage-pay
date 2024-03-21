import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const checkboxLabelVariants = cva('flex text-base-content mx-[0.5rem]');

interface checkboxLabelProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof checkboxLabelVariants> {}

const CheckboxLabel = ({
  className,
  children,
  ...props
}: checkboxLabelProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(
        checkboxLabelVariants({
          className,
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default CheckboxLabel;
