import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '../../utils';
import { TextInputContext } from './text-input.component';

const textInputIconVariants = cva(
  'flex justify-center items-center text-[15pt]',
  {
    variants: {
      variant: {
        primary: 'text-primary-100',
        success: 'text-success-100',
        error: 'text-error-100',
        warning: 'text-warning-100',
        'edge-100': 'text-edge-100',
        'edge-200': 'text-edge-200',
      },
      position: {
        left: 'pl-[1rem]',
        right: 'pr-[1rem]',
      },
    },
    defaultVariants: {
      variant: 'edge-100',
    },
  }
);

interface TextInputIconProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textInputIconVariants> {}

const TextInputIcon = ({
  variant,
  className,
  children,
  position,
  ...props
}: TextInputIconProps): JSX.Element => {
  const { variant: globalVariant } = useContext(TextInputContext);

  return (
    <div
      className={Utils.cn(
        textInputIconVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
          position,
          className,
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default TextInputIcon;
