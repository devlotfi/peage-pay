import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { TextAreaContext } from './text-area.context';

const textAreaMainVariants = cva(
  'flex flex-1 border-[1px] rounded-lg relative focus-within:outline outline-[3px] items-start',
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

interface TextAreaMainProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textAreaMainVariants> {}

const TextAreaMain = ({
  variant,
  className,
  children,
  ...props
}: TextAreaMainProps): JSX.Element => {
  const { variant: globalVariant } = useContext(TextAreaContext);

  return (
    <div
      className={Utils.cn(
        textAreaMainVariants({
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
export default TextAreaMain;
