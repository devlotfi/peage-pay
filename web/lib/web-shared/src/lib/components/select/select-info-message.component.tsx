import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { WebUtils } from '../../web-utils';
import { SelectContext } from './select.component';

const selectInfoMessageVariants = cva('flex ml-[1rem]', {
  variants: {
    variant: {
      primary: 'text-primary-100',
      success: 'text-success-100',
      error: 'text-error-100',
      warning: 'text-warning-100',
      'edge-100': 'text-edge-100',
      'edge-200': 'text-edge-200',
    },
  },
  defaultVariants: {
    variant: 'edge-100',
  },
});

interface SelectInfoMessageProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof selectInfoMessageVariants> {}

const SelectInfoMessage = ({
  variant,
  className,
  children,
  ...props
}: SelectInfoMessageProps): JSX.Element => {
  const { variant: globalVariant } = useContext(SelectContext);

  return (
    <div
      className={WebUtils.cn(
        selectInfoMessageVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
          className,
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default SelectInfoMessage;
