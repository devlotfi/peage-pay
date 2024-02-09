import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { WebUtils } from '../../web-utils';
import { SelectContext } from './select.component';

const selectMainVariants = cva(
  'flex flex-1 min-h-[3rem] border-[1px] rounded-lg relative focus-within:outline outline-[3px]',
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
