import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { WebUtils } from '../../web-utils';
import { SelectContext } from './select.component';

const selectMainVariants = cva(
  'flex flex-1 min-h-[3rem] border-[1px] rounded-lg relative focus-within:outline outline-[2px] outline-offset-[2px]',
  {
    variants: {
      variant: {
        primary: 'border-primary-100 outline-primary-100',
        success: 'border-success-100 outline-success-100',
        error: 'border-error-100 outline-error-100',
        warning: 'border-warning-100 outline-warning-100',
        'edge-100': 'border-edge-100 outline-edge-100',
        'edge-200': 'border-edge-200 outline-edge-200',
      },
    },
    defaultVariants: {
      variant: 'edge-100',
    },
  },
);

interface SelectMainProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof selectMainVariants> {}

const SelectMain = ({
  variant,
  className,
  children,
  ...props
}: SelectMainProps): JSX.Element => {
  const { variant: globalVariant } = useContext(SelectContext);

  return (
    <div
      className={WebUtils.cn(
        selectMainVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
          className,
        }),
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default SelectMain;
