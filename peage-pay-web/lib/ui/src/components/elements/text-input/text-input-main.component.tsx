import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { TextInputContext } from './text-input.context';

const textInputMainVariants = cva(
  'flex flex-1 min-h-[2.5rem] border-[1px] rounded-lg relative focus-within:outline outline-[3px]',
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
      active: {
        active: 'outline outline-[2px] outline-offset-[2px]',
      },
    },
    defaultVariants: {
      variant: 'edge-100',
    },
  },
);

interface TextInputMainProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textInputMainVariants> {}

const TextInputMain = ({
  variant,
  className,
  children,
  ...props
}: TextInputMainProps): JSX.Element => {
  const { variant: globalVariant } = useContext(TextInputContext);

  return (
    <div
      className={Utils.cn(
        textInputMainVariants({
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
export default TextInputMain;
