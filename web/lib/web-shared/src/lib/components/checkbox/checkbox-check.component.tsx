import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { WebUtils } from '../../web-utils';
import { CheckboxContext } from './checkbox.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const checkboxCheckVariants = cva(
  'flex justify-center items-center text-color-content min-h-[1.5rem] min-w-[1.5rem] h-[1.5rem] w-[1.5rem] rounded-md cursor-pointer border-[2px] border-edge-100',
  {
    variants: {
      variant: {
        primary: 'bg-primary-100',
        success: 'bg-success-100',
        error: 'bg-error-100',
        warning: 'bg-warning-100',
      },
      checked: {
        checked: 'border-none',
        'not-checked': 'bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface CheckboxCheckProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof checkboxCheckVariants> {}

const CheckboxCheck = ({
  variant,
  className,
  ...props
}: CheckboxCheckProps): JSX.Element => {
  const { variant: globalVariant, checked: globalChecked } =
    useContext(CheckboxContext);

  return (
    <div
      className={WebUtils.cn(
        checkboxCheckVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
          checked: globalChecked ? 'checked' : 'not-checked',
          className,
        })
      )}
      {...props}
    >
      {globalChecked ? (
        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
      ) : null}
    </div>
  );
};
export default CheckboxCheck;
